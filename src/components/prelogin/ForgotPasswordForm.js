import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TextInput from '../core/form/TextInput';
import PreLoginFormAction from '../form/PreLoginFormAction';
import Button from '../core/form/Button';
import { icons } from '../../constants';
import { ToastAlert, statusCodes, validations } from '../../utils';
import { resetPassword } from '../../reducers/User';
import { ResetPasswordServices } from '../../services';

const ForgotPasswordForm = ({user}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const emailRef = useRef();
    const [hasEmailIcon, setHasEmailIcon] = useState(false);
    const [emailIcon, setEmailIcon] = useState("");
    const [emailIconPosition, setEmailIconPosition] = useState("right");
    const [emailIconType, setEmailIconType] = useState("");
    const [hasEmailMessage, setHasEmailMessage] = useState(false);
    const [emailMessage, setEmailMessage] = useState("");
    const [emailMessageType, setEmailMessageType] = useState("");

    const [submitLoading, setSubmitLoading] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false);

    const [buttonBg, setButtonBg] = useState('primary');
    const [buttonHasIcon, setButtonHasIcon] = useState(false);
    const [buttonIconPosition, setButtonIconPosition] = useState('left');
    const [buttonLable, setButtonLable] = useState('Submit');
    const [buttonIco, setButtonIco] = useState(icons.tick);

    const changePasswordHandler = async (e) => {
        e.preventDefault();

        setSubmitLoading(true);

        let email_id = emailRef.current.value;

        const isEmailIDValid = await validations.validateEmailID(email_id);

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

        if(isEmailIDValid.status === false){
            setSubmitLoading(false);
            return
        }
        else{
            const resetPasswordReq = await ResetPasswordServices.resetPasswordRequest({
                email_id: email_id,
            });

            if(resetPasswordReq.status === false){
                ToastAlert.notifyError(resetPasswordReq.message);
                setSubmitLoading(false);
                setHasEmailIcon(false);
                setEmailIcon("");
                setEmailIconType("");
                if(resetPasswordReq.status_code === statusCodes.TIME_OUT){
                    dispatch(
                        resetPassword(
                            {
                                id: resetPasswordReq.data.user_id,
                                name: resetPasswordReq.data.user_name,
                                role: resetPasswordReq.data.role,
                                email_id: email_id,
                                reset_password_request_id: 0,
                                reset_password_request_readable_id: 0,
                                reset_password_requested_on: 0,
                                reset_password_request_try_after: resetPasswordReq.data.try_after,
                                is_reset_password_error: true,
                                is_reset_password_error_type: "RECENTLY_REJECTED",
                                forgot_password_current_route: "TRY_LATER"
                            }
                        )
                    );
                }
            }
            else {
                if(resetPasswordReq.status_code === statusCodes.ACCEPTED){
                    setSubmitLoading(false);
                    setSubmitDisabled(true);
                    setButtonBg('warning');
                    setButtonHasIcon(true);
                    setButtonLable('Warning');
                    dispatch(
                        resetPassword(
                            {
                                id: resetPasswordReq.data.user_id,
                                name: resetPasswordReq.data.user_name,
                                role: resetPasswordReq.data.role,
                                email_id: email_id,
                                reset_password_request_id: resetPasswordReq.data.reset_password_request_id,
                                reset_password_request_readable_id: resetPasswordReq.data.reset_password_request_readable_id,
                                reset_password_requested_on: resetPasswordReq.data.requested_on,
                                reset_password_request_try_after: 0,
                                is_reset_password_error: true,
                                is_reset_password_error_type: "ALREADY_EXIST",
                                forgot_password_current_route: "ALREADY_EXIST"
                            }
                        )
                    );
                }
                else{
                    setSubmitLoading(false);
                    setSubmitDisabled(true);
                    setButtonBg('success');
                    setButtonHasIcon(true);
                    setButtonLable('Success');
                    if(resetPasswordReq.data.role === "SUPER_ADMIN"){
                        dispatch(
                            resetPassword(
                                {
                                    id: resetPasswordReq.data.user_id,
                                    name: resetPasswordReq.data.user_name,
                                    role: resetPasswordReq.data.role,
                                    email_id: email_id,
                                    reset_password_request_id: 0,
                                    reset_password_request_readable_id: 0,
                                    reset_password_requested_on: 0,
                                    reset_password_request_try_after: 0,
                                    is_reset_password_error: false,
                                    is_reset_password_error_type: "",
                                    forgot_password_current_route: "CHANGE_PASSWORD"
                                }
                            )
                        );
                    }
                    else{
                        dispatch(
                            resetPassword(
                                {
                                    id: resetPasswordReq.data.user_id,
                                    name: resetPasswordReq.data.user_name,
                                    role: resetPasswordReq.data.role,
                                    email_id: email_id,
                                    reset_password_request_id: 0,
                                    reset_password_request_readable_id: 0,
                                    reset_password_requested_on: 0,
                                    reset_password_request_try_after: 0,
                                    is_reset_password_error: false,
                                    is_reset_password_error_type: "",
                                    forgot_password_current_route: "REQUIRES_APPROVAL"
                                }
                            )
                        );
                    }
                }
            }
        }
    }

    return (
        <div className="preLoginFormContainer">
            <form onSubmit={(e) => changePasswordHandler(e)} noValidate>
                <div className="cmsForm">
                    <TextInput 
                        ref={emailRef}
                        type="email"
                        placeholder="Enter Email ID"
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
                    />
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

export default ForgotPasswordForm