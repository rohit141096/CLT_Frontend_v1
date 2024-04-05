import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { icons } from '../../constants';
import validations from '../../utils/Validations';
import Button from '../core/form/Button';
import TextInputRT from '../core/form/TextInputRT';
import PreLoginFormAction from '../form/PreLoginFormAction';
import { UserServices } from '../../services';
import { ToastAlert } from '../../utils';
import { resetPassword } from '../../reducers/User';

const ForgotPasswordVerifyOTPForm = ({ user }) => {
    const dispatch = useDispatch();

    const [otp, setOTP] = useState('');
    const [hasOTPIcon, setHasOTPIcon] = useState(false);
    const [otpIcon, setOTPIcon] = useState("");
    const [otpIconPosition, setOTPIconPosition] = useState("right");
    const [otpIconType, setOTPIconType] = useState("");
    const [hasOTPMessage, setHasOTPMessage] = useState(false);
    const [otpMessage, setOTPMessage] = useState("");
    const [otpMessageType, setOTPMessageType] = useState("");

    const [submitLoading, setSubmitLoading] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false);

    const [buttonBg, setButtonBg] = useState('primary');
    const [buttonHasIcon, setButtonHasIcon] = useState(false);
    const [buttonIconPosition, setButtonIconPosition] = useState('left');
    const [buttonLable, setButtonLable] = useState('Submit');
    const [buttonIco, setButtonIco] = useState(icons.tick);
    
    const handleOTPChangeHandler = (data, max_length) => {
        const isOtpNumberValid = validations.allowOnlyNumbers(data);

        if(isOtpNumberValid){
            if(otp.length >= max_length){
                if(data.length >= max_length){
                    return
                }
            }
            setOTP(data);
            setHasOTPMessage(false);
            setOTPMessage('');
        }
        else if(data.length === 0){
            setOTP('');
            setHasOTPMessage(true);
            setOTPMessage('OTP is Required');
        }
    }

    const verifyOtpHandler = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);

        if(otp.length !== 6){
            setHasOTPIcon(true);
            setOTPIcon(icons.wrongCircle);
            setOTPIconType("error");
            setOTPIconPosition("right");
            setHasOTPMessage(true);
            setOTPMessage("Invalid OTP");
            setOTPMessageType("error");
            setSubmitLoading(false);
            return
        }
        else{
            setHasOTPIcon(true);
            setOTPIcon(icons.tickCircle);
            setOTPIconType("success");
            setHasOTPMessage(false);
            setOTPMessage("");
            setOTPMessageType("");
        }

        const validateUserReq = await UserServices.validateResetPasswordOTP({
            request_id: user.reset_password_request_id,
            user_id: user.id,
            otp: otp
        });

        if(validateUserReq.status === false){
            ToastAlert.notifyError(validateUserReq.message);
            setSubmitLoading(false);
            setHasOTPIcon(true);
            setOTPIcon(icons.wrongCircle);
            setOTPIconType("error");
        }
        else{
            setSubmitLoading(false);
            setSubmitDisabled(true);

            setHasOTPIcon(false);
            setOTPIcon("");
            setOTPIconType("");

            setButtonBg('success');
            setButtonHasIcon(true);
            setButtonLable('Success');
            setButtonIconPosition("left");
            setButtonIco(icons.tick);
            setTimeout(() => {
                dispatch(
                    resetPassword(
                        {
                            id: user.id,
                            name: user.name,
                            role: user.role,
                            email_id: user.email_id,
                            reset_password_request_id: user.reset_password_request_id,
                            reset_password_request_readable_id: user.reset_password_request_readable_id,
                            reset_password_requested_on: user.reset_password_requested_on,
                            reset_password_request_try_after: 0,
                            is_reset_password_error: false,
                            is_reset_password_error_type: "CHANGE_PASSWORD",
                            forgot_password_current_route: "CHANGE_PASSWORD"
                        }
                    )
                );
            }, 800);
        }
    }

    return (
        <div className="preLoginFormContainer">
            <form onSubmit={(e) => verifyOtpHandler(e)}>
                <div className="cmsForm">
                    <TextInputRT 
                        hasLable={true}
                        lable="OTP"
                        isMandatory={true}
                        hasIcon={hasOTPIcon}
                        icon={otpIcon}
                        iconPosition={otpIconPosition}
                        iconType={otpIconType}
                        hasMessage={hasOTPMessage}
                        message={otpMessage}
                        messageType={otpMessageType}
                    >
                        <input 
                            type="tel" 
                            className="cmsFormStepInputText" 
                            placeholder={"Enter OTP"}
                            onChange={(e) => handleOTPChangeHandler(e.target.value, 6)}
                            value={otp}
                        />
                    </TextInputRT>
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

export default ForgotPasswordVerifyOTPForm