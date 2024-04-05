import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from "react-jwt";
import CardHeading from '../../../../components/core/typography/dashboard/CardHeading';
import CardDescription from '../../../../components/core/typography/dashboard/CardDescription';
import PlainContainer from '../../../../components/core/containers/PlainContainer';
import SplitContainer from '../../../../components/core/containers/SplitContainer';
import TextInputRT from '../../../core/form/TextInputRT';
import PasswordInput from '../../../../components/core/form/PasswordInput';
import PasswordPatternValidation from '../../../core/form/PasswordPatternValidation';
import { icons } from '../../../../constants';
import { ToastAlert, validations } from '../../../../utils';
import PasswordInputRT from '../../../core/form/PasswordInputRT';
import Button from '../../../core/dashboard/Button';
import FormActions from '../../../form/FormActions';

const UserAddForm = ({ user, role, updateAddedUser }) => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [hasFirstNameIcon, setHasFirstNameIcon] = useState(false);
    const [firstNameIcon, setFirstNameIcon] = useState("");
    const [firstNameIconPosition, setFirstNameIconPosition] = useState("right");
    const [firstNameIconType, setFirstNameIconType] = useState("");
    const [hasFirstNameMessage, setHasFirstNameMessage] = useState(false);
    const [firstNameMessage, setFirstNameMessage] = useState("");
    const [firstNameMessageType, setFirstNameMessageType] = useState("");

    const [lastName, setLastName] = useState("");
    const [hasLastNameIcon, setHasLastNameIcon] = useState(false);
    const [lastNameIcon, setLastNameIcon] = useState("");
    const [lastNameIconPosition, setLastNameIconPosition] = useState("right");
    const [lastNameIconType, setLastNameIconType] = useState("");
    const [hasLastNameMessage, setHasLastNameMessage] = useState(false);
    const [lastNameMessage, setLastNameMessage] = useState("");
    const [lastNameMessageType, setLastNameMessageType] = useState("");

    const [email, setEmail] = useState("");
    const [hasEmailIcon, setHasEmailIcon] = useState(false);
    const [emailIcon, setEmailIcon] = useState(icons.email);
    const [emailIconPosition, setEmailIconPosition] = useState("right");
    const [emailIconType, setEmailIconType] = useState("");
    const [hasEmailMessage, setHasEmailMessage] = useState(false);
    const [emailMessage, setEmailMessage] = useState("");
    const [emailMessageType, setEmailMessageType] = useState("");

    const [phoneNo, setPhoneNo] = useState("");
    const [hasPhoneNoIcon, setHasPhoneNoIcon] = useState(false);
    const [phoneNoIcon, setPhoneNoIcon] = useState(icons.phone);
    const [phoneNoIconPosition, setPhoneNoIconPosition] = useState("right");
    const [phoneNoIconType, setPhoneNoIconType] = useState("");
    const [hasPhoneNoMessage, setHasPhoneNoMessage] = useState(false);
    const [phoneNoMessage, setPhoneNoMessage] = useState("");
    const [phoneNoMessageType, setPhoneNoMessageType] = useState("");

    const [password, setPassword] = useState('');
    const [hasPasswordMessage, setHasPasswordMessage] = useState(false);
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordMessageType, setPasswordMessageType] = useState("");
    const [showPassword, setShowPassword] = useState(false);

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

    const firstNameChanged = async (e) => {
        const isFirstNameValid = await validations.disableSpecialCharacter(e);
        if(isFirstNameValid){
            setFirstName(e);
        }
        else if(e.length === 0){
            setFirstName('');
        }
    }

    const lastNameChanged = async (e) => {
        const isLastNameValid = await validations.disableSpecialCharacter(e);
        if(isLastNameValid === true){
            setLastName(e);
        }
        else if(e.length === 0){
            setLastName('');
        }
    }

    const phoneNoChanged = async (e) => {
        const isPhoneNoValid = await validations.allowOnlyNumbers(e);
        if(isPhoneNoValid === true){
            setPhoneNo(e);
        }
        else if(e.length === 0){
            setPhoneNo('');
        }
    }

    const handlePasswordChange = async (e) => {
        setPassword(e);
        const isPasswordValid = await validations.validatePassword(e);
        setHasPasswordMessage(!isPasswordValid);
        setIsPasswordMinCharValid(isPasswordValid.isMinCharValid);
        setIsPasswordDigitValid(isPasswordValid.isDigitValid);
        setIsPasswordSpecialCharValid(isPasswordValid.isSpecialCharValid);
        setIsPasswordUpperCaseValid(isPasswordValid.isUpperCaseValid);
        setIsPasswordLowerCaseValid(isPasswordValid.isLowerCaseValid);
    }

    const [submitButtonHasIcon, setButtonHasIcon] = useState(false);
    const [submitButtonIconPosition, setButtonIconPosition] = useState('left');
    const [submitButtonIco, setButtonIco] = useState(icons.tick);
    const [submitButtonLable, setSubmitButtonLable] = useState("Submit");
    const [submitButtonBg, setSubmitButtonBg] = useState("dashboard");

    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const [submitButtonLoading, setSubmitButtonLoading] = useState(false);

    const [cancelButtonLable, setCancelButtonLable] = useState("Cancel");
    const [cancelButtonBg, setCancelButtonBg] = useState("error");

    const handleAddUserSubmission = async (e) => {
        e.preventDefault();

        setSubmitButtonLoading(true);

        let isPasswordValid = true;
        let isRepeatPasswordValid = true;

        const isFirstNameValid = await validations.validateName(firstName);

        if(isFirstNameValid.status === false){
            setHasFirstNameIcon(true);
            setFirstNameIcon(icons.wrongCircle);
            setFirstNameIconType("error");
            setHasFirstNameMessage(true);
            setFirstNameMessage("Invalid First Name");
            setFirstNameMessageType("error");
        }
        else{
            setHasFirstNameIcon(true);
            setFirstNameIcon(icons.tickCircle);
            setFirstNameIconType("success");
            setHasFirstNameMessage(false);
            setFirstNameMessage("");
            setFirstNameMessageType("");
        }

        const isLastNameValid = await validations.validateName(lastName);

        if(isLastNameValid.status === false){
            setHasLastNameIcon(true);
            setLastNameIcon(icons.wrongCircle);
            setLastNameIconType("error");
            setHasLastNameMessage(true);
            setLastNameMessage("Invalid Last Name");
            setLastNameMessageType("error");
        }
        else{
            setHasLastNameIcon(true);
            setLastNameIcon(icons.tickCircle);
            setLastNameIconType("success");
            setHasLastNameMessage(false);
            setLastNameMessage("");
            setLastNameMessageType("");
        }

        const isEmailIDValid = await validations.validateEmailID(email);

        if(isEmailIDValid.status === false){
            setHasEmailIcon(true);
            setEmailIcon(icons.wrongCircle);
            setEmailIconType("error");
            setHasEmailMessage(true);
            setEmailMessage("Invalid Email ID");
            setEmailMessageType("error");
        }
        else{
            setHasEmailIcon(true);
            setEmailIcon(icons.tickCircle);
            setEmailIconType("success");
            setHasEmailMessage(false);
            setEmailMessage("");
            setEmailMessageType("");
        }

        const isPhoneNoValid = await validations.validatePhoneNumber(phoneNo);

        if(isPhoneNoValid.status === false){
            setHasPhoneNoIcon(true);
            setPhoneNoIcon(icons.wrongCircle);
            setPhoneNoIconType("error");
            setHasPhoneNoMessage(true);
            setPhoneNoMessage("Invalid Phone Number");
            setPhoneNoMessageType("error");
        }
        else{
            setHasPhoneNoIcon(true);
            setPhoneNoIcon(icons.tickCircle);
            setPhoneNoIconType("success");
            setHasPhoneNoMessage(false);
            setPhoneNoMessage("");
            setPhoneNoMessageType("");
        }

        if(password===""){
            isPasswordValid = false
            setHasPasswordMessage(true);
            setPasswordMessage("Password is Requried.");
            setPasswordMessageType("error");
        }
        else{
            const isPasswordPatternValid = await validations.validatePassword(password);
            if(isPasswordPatternValid.status === false){
                isPasswordValid = false
                setHasPasswordMessage(true);
                setPasswordMessage("Password is Invalid.");
                setPasswordMessageType("error");
            }
            else{
                isPasswordValid = true
                setHasPasswordMessage(false);
                setPasswordMessage("");
                setPasswordMessageType("");
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

        if(isEmailIDValid.status === false || isPasswordValid === false || isRepeatPasswordValid === false){
            setSubmitButtonLoading(false);
            return
        }
        else{
            if(password !== repeatPassword){
                ToastAlert.notifyError("New Password & Confirmation Password Does Not Match.");
                setSubmitButtonLoading(false);
                return
            }
            else{
                
            }
        }
    }

    useEffect(() => {
        updateAddedUser({
            name: `${firstName} ${lastName}`,
            email_id: email,
            phone_no: phoneNo
        });
    }, [firstName, lastName, email, phoneNo]);

    return (
        <PlainContainer type="full">
            <CardHeading heading={"add new user"} color="dark" />
            <CardDescription description={"role: admin"} />

            <PlainContainer type='full' styles={{marginTop: "30px"}}>
                <form onSubmit={(e) => handleAddUserSubmission(e)} noValidate>
                    <div className="cmsForm">
                        <SplitContainer>
                            <TextInputRT 
                                hasLable={true}
                                lable="First Name"
                                isMandatory={true}
                                hasIcon={hasFirstNameIcon}
                                icon={firstNameIcon}
                                iconPosition={firstNameIconPosition}
                                iconType={firstNameIconType}
                                hasMessage={hasFirstNameMessage}
                                message={firstNameMessage}
                                messageType={firstNameMessageType}
                            >
                                <input 
                                    type="text" 
                                    className="cmsFormStepInputText" 
                                    placeholder={"Enter First Name"}
                                    onChange={(e) => firstNameChanged(e.target.value)}
                                    value={firstName}
                                />
                            </TextInputRT>

                            <TextInputRT 
                                hasLable={true}
                                lable="Last Name"
                                isMandatory={true}
                                hasIcon={hasLastNameIcon}
                                icon={lastNameIcon}
                                iconPosition={lastNameIconPosition}
                                iconType={lastNameIconType}
                                hasMessage={hasLastNameMessage}
                                message={lastNameMessage}
                                messageType={lastNameMessageType}
                            >
                                <input 
                                    type="text" 
                                    className="cmsFormStepInputText" 
                                    placeholder={"Enter Last Name"}
                                    onChange={(e) => lastNameChanged(e.target.value)}
                                    value={lastName}
                                />
                            </TextInputRT>
                        </SplitContainer>

                        <SplitContainer>
                            <TextInputRT 
                                hasLable={true}
                                lable="Email ID"
                                isMandatory={true}
                                hasIcon={hasEmailIcon}
                                icon={emailIcon}
                                iconPosition={emailIconPosition}
                                iconType={emailIconType}
                                hasMessage={hasEmailMessage}
                                message={emailMessage}
                                messageType={emailMessageType}
                            >
                                <input 
                                    type="email" 
                                    className="cmsFormStepInputText" 
                                    placeholder={"Enter Email ID"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </TextInputRT>

                            <TextInputRT 
                                hasLable={true}
                                lable="Phone Number"
                                isMandatory={true}
                                hasIcon={hasPhoneNoIcon}
                                icon={phoneNoIcon}
                                iconPosition={phoneNoIconPosition}
                                iconType={phoneNoIconType}
                                hasMessage={hasPhoneNoMessage}
                                message={phoneNoMessage}
                                messageType={phoneNoMessageType}
                            >
                                <input 
                                    type="tel" 
                                    className="cmsFormStepInputText" 
                                    placeholder={"Enter Phone Number"}
                                    onChange={(e) => phoneNoChanged(e.target.value)}
                                    value={phoneNo}
                                />
                            </TextInputRT>
                        </SplitContainer>

                        <SplitContainer>
                            <PasswordInputRT 
                                hasLable={true}
                                lable="New Password"
                                isMandatory={true}
                                hasMessage={hasPasswordMessage}
                                message={passwordMessage}
                                messageType={passwordMessageType}
                            >
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    className="cmsFormStepInputText" 
                                    placeholder={'Enter Password'}
                                    onChange={(e) => handlePasswordChange(e.target.value)}
                                    value={password}
                                />
                                {
                                    showPassword === false
                                    ?
                                    <div className="cmsFormStepInputIcon">
                                        <i className={`fa-solid fa-eye cmsFormStepInputIco clickable`} onClick={() => setShowPassword(true)}></i>
                                    </div>
                                    :
                                    <div className="cmsFormStepInputIcon">
                                        <i className={`fa-solid fa-eye-slash cmsFormStepInputIco clickable`} onClick={() => setShowPassword(false)}></i>
                                    </div>
                                }
                            </PasswordInputRT>

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
                                    value={repeatPassword}
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
                        </SplitContainer>
                        
                        <SplitContainer>
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
                            <FormActions>
                                <Button 
                                    type="submit"
                                    bgType="fill"
                                    width="auto"
                                    bg={submitButtonBg}
                                    borderRadius="short"
                                    hasIcon={submitButtonHasIcon}
                                    iconPosition={submitButtonIconPosition}
                                    icon={submitButtonIco}
                                    disabled={submitButtonDisabled}
                                    isLoading={submitButtonLoading}
                                >
                                    {submitButtonLable}
                                </Button>
                                <Button 
                                    type="button"
                                    bgType="fill"
                                    width="auto"
                                    bg={cancelButtonBg}
                                    borderRadius="short"
                                    action={() => navigate(-1)}
                                >
                                    {cancelButtonLable}
                                </Button>
                            </FormActions>
                        </SplitContainer>
                    </div>
                </form>
            </PlainContainer>
        </PlainContainer>
    )
}

export default UserAddForm