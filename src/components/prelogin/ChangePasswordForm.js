import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PreLoginFormAction from '../../components/form/PreLoginFormAction';
import Button from '../../components/core/form/Button';
import { icons } from '../../constants';
import PasswordInputRT from '../core/form/PasswordInputRT';
import { ToastAlert, validations } from '../../utils';
import PasswordPatternValidation from '../core/form/PasswordPatternValidation';
import PreLoginFormInfoAction from '../form/PreLoginFormInfoAction';
import { logout } from '../../reducers/User';
import { ResetPasswordServices } from '../../services';

const ChangePasswordForm = ({user}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [newPassword, setNewPassword] = useState('');
    const [hasNewPasswordMessage, setHasNewPasswordMessage] = useState(false);
    const [newPasswordMessage, setNewPasswordMessage] = useState("");
    const [newPasswordMessageType, setNewPasswordMessageType] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);

    const [isPasswordMinCharValid, setIsPasswordMinCharValid] = useState(false);
    const [isPasswordDigitValid, setIsPasswordDigitValid] = useState(false);
    const [isPasswordSpecialCharValid, setIsPasswordSpecialCharValid] = useState(false);
    const [isPasswordUpperCaseValid, setIsPasswordUpperCaseValid] = useState(false);
    const [isPasswordLowerCaseValid, setIsPasswordLowerCaseValid] = useState(false);

    const [showPasswordPatternValidator, setShowPasswordPatternValidator] = useState(true);

    const [repeatPassword, setRepeatPassword] = useState('');
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [hasRepeatPasswordMessage, setHasRepeatPasswordMessage] = useState(false);
    const [repeatPasswordMessage, setRepeatPasswordMessage] = useState("");
    const [repeatPasswordMessageType, setRepeatPasswordMessageType] = useState("");

    const [validationResult, setValidationResult] = useState();

    const handlePasswordChange = async (e) => {
        setNewPassword(e);
        const isPasswordValid = await validations.validatePassword(e);
        setHasNewPasswordMessage(!isPasswordValid);
        setIsPasswordMinCharValid(isPasswordValid.isMinCharValid);
        setIsPasswordDigitValid(isPasswordValid.isDigitValid);
        setIsPasswordSpecialCharValid(isPasswordValid.isSpecialCharValid);
        setIsPasswordUpperCaseValid(isPasswordValid.isUpperCaseValid);
        setIsPasswordLowerCaseValid(isPasswordValid.isLowerCaseValid);
    }

    const [submitLoading, setSubmitLoading] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false);

    const [buttonBg, setButtonBg] = useState('primary');
    const [buttonHasIcon, setButtonHasIcon] = useState(false);
    const [buttonIconPosition, setButtonIconPosition] = useState('left');
    const [buttonLable, setButtonLable] = useState('Submit');
    const [buttonIco, setButtonIco] = useState(icons.tick);

    const handleChangePasswordSubmission = async (e) => {
        e.preventDefault();

        setSubmitLoading(true);

        let isNewPasswordValid = true;
        let isRepeatPasswordValid = true;

        if(newPassword===""){
            isNewPasswordValid = false
            setHasNewPasswordMessage(true);
            setNewPasswordMessage("New Password is Requried.");
            setNewPasswordMessageType("error");
        }
        else{
            const isNewPasswordPatternValid = await validations.validatePassword(newPassword);
            if(isNewPasswordPatternValid.status === false){
                isNewPasswordValid = false
                setHasNewPasswordMessage(true);
                setNewPasswordMessage("New Password is Invalid.");
                setNewPasswordMessageType("error");
            }
            else{
                isNewPasswordValid = true
                setHasNewPasswordMessage(false);
                setNewPasswordMessage("");
                setNewPasswordMessageType("");
            }
        }

        if(repeatPassword===""){
            isRepeatPasswordValid = false
            setHasRepeatPasswordMessage(true);
            setRepeatPasswordMessage("Repeat Password is Requried.");
            setRepeatPasswordMessageType("error");
        }
        else{
            const isRepeatPasswordPatternValid = await validations.validatePassword(repeatPassword);
            if(isRepeatPasswordPatternValid.status === false){
                isRepeatPasswordValid = false
                setHasRepeatPasswordMessage(true);
                setRepeatPasswordMessage("Repeat Password is Invalid.");
                setRepeatPasswordMessageType("error");
            }
            else{
                isRepeatPasswordValid = true
                setHasRepeatPasswordMessage(false);
                setRepeatPasswordMessage("");
                setRepeatPasswordMessageType("");
            }
        }

        if(isNewPasswordValid === false || isRepeatPasswordValid === false){
            setSubmitLoading(false);
            return
        }
        else{
            if(newPassword !== repeatPassword){
                ToastAlert.notifyError("New Password & Confirmation Password Does Not Match.");
                setSubmitLoading(false);
                return
            }
            else{
                const changePasswordReq = await ResetPasswordServices.changePasswordRequest({
                    user_id: user.id,
                    new_password: newPassword,
                    repeat_password: repeatPassword
                });

                if(changePasswordReq.status === false){
                    ToastAlert.notifyError(changePasswordReq.message);
                    setSubmitLoading(false);
                }
                else{
                    setSubmitLoading(false);
                    setSubmitDisabled(true);
                    setButtonBg('success');
                    setButtonHasIcon(true);
                    setButtonLable('Success');
                    dispatch(logout());
                    navigate('/');
                }
            }
        }
    }

    return(
        <div className="preLoginFormContainer">
            <form onSubmit={(e) => handleChangePasswordSubmission(e)}>
                <div className="cmsForm">
                    <PasswordInputRT 
                        hasLable={true}
                        lable="New Password"
                        isMandatory={true}
                        hasMessage={hasNewPasswordMessage}
                        message={newPasswordMessage}
                        messageType={newPasswordMessageType}
                    >
                        <input 
                            type={showNewPassword ? 'text' : 'password'} 
                            className="cmsFormStepInputText" 
                            placeholder={'Enter New Password'}
                            onChange={(e) => handlePasswordChange(e.target.value)}
                        />
                        {
                            showNewPassword === false
                            ?
                            <div className="cmsFormStepInputIcon">
                                <i className={`fa-solid fa-eye cmsFormStepInputIco clickable`} onClick={() => setShowNewPassword(true)}></i>
                            </div>
                            :
                            <div className="cmsFormStepInputIcon">
                                <i className={`fa-solid fa-eye-slash cmsFormStepInputIco clickable`} onClick={() => setShowNewPassword(false)}></i>
                            </div>
                        }
                    </PasswordInputRT>
                    {
                        showPasswordPatternValidator
                        ?
                            <PasswordPatternValidation validation={{
                                isPasswordMinCharValid: isPasswordMinCharValid,
                                isPasswordDigitValid: isPasswordDigitValid,
                                isPasswordSpecialCharValid: isPasswordSpecialCharValid,
                                isPasswordUpperCaseValid: isPasswordUpperCaseValid,
                                isPasswordLowerCaseValid: isPasswordLowerCaseValid
                            }} />
                        :
                            <></>
                    }
                    <PasswordInputRT 
                        hasLable={true}
                        lable="Repeat Password"
                        isMandatory={true}
                        hasMessage={hasRepeatPasswordMessage}
                        message={repeatPasswordMessage}
                        messageType={repeatPasswordMessageType}
                    >
                        <input 
                            type={showRepeatPassword ? 'text' : 'password'} 
                            className="cmsFormStepInputText" 
                            placeholder={'Enter Password Again'}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        {
                            showRepeatPassword === false
                            ?
                            <div className="cmsFormStepInputIcon">
                                <i className={`fa-solid fa-eye cmsFormStepInputIco clickable`} onClick={() => setShowRepeatPassword(true)}></i>
                            </div>
                            :
                            <div className="cmsFormStepInputIcon">
                                <i className={`fa-solid fa-eye-slash cmsFormStepInputIco clickable`} onClick={() => setShowRepeatPassword(false)}></i>
                            </div>
                        }
                    </PasswordInputRT>
                    <PreLoginFormAction>
                        <Button 
                            type="submit"
                            bgType="fill"
                            width="full"
                            bg={buttonBg}
                            borderRadius="short"
                            hasIcon={buttonHasIcon}
                            iconPosition={buttonIconPosition}
                            icon={buttonIco}
                            disabled={submitDisabled}
                            isLoading={submitLoading}
                        >
                            {buttonLable}
                        </Button>
                    </PreLoginFormAction>
                </div>
            </form>
        </div>
    )
}

export default ChangePasswordForm