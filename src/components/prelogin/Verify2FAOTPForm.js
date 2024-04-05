import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { decodeToken } from "react-jwt";
import { login } from "../../reducers/User";
import validations from '../../utils/Validations';
import TextInputRT from '../core/form/TextInputRT';
import PreLoginFormAction from '../form/PreLoginFormAction';
import Button from '../core/form/Button';
import { icons } from '../../constants';
import { GeneralServices, UserServices } from '../../services';
import { ToastAlert, defaults } from '../../utils';
import globals from '../../utils/Config';

const Verify2FAOTPForm = ({user}) => {
    
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

    const [ipAddress, setIpAddress] = useState(0);
    const [countryCode, setCountryCode] = useState(0);
    const [countryName, setCountryName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const handleGetUserIpReq = async () => {
        const userIpAddressReq = await GeneralServices.getUserIpAddress();
        if(userIpAddressReq.status === false){
            ToastAlert.notifyError(userIpAddressReq.message);
        }
        else{
            setIpAddress(userIpAddressReq.data.IPv4);
            setCountryCode(userIpAddressReq.data.country_code);
            setCountryName(userIpAddressReq.data.country_name);
            setCity(userIpAddressReq.data.city === null ? "" : userIpAddressReq.data.city);
            setState(userIpAddressReq.data.state === null ? "" : userIpAddressReq.data.state);
            setPincode(userIpAddressReq.data.postal === null ? "" : userIpAddressReq.data.postal);
            setLatitude(userIpAddressReq.data.latitude);
            setLongitude(userIpAddressReq.data.longitude);
        }
    }

    useEffect(() => {
        handleGetUserIpReq();
    }, []);
    
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

        const validateUserReq = await UserServices.validateUser2faOTP({
            user_id: user.id,
            otp: otp,
            token: user.access_token,
            ip_address: ipAddress,
            country_code: countryCode,
            country_name: countryName,
            state: state,
            city: city,
            pincode: pincode,
            latitude: latitude,
            longitude: longitude
        });

        if(validateUserReq.status === false){
            ToastAlert.notifyError(validateUserReq.message);
            setSubmitLoading(false);
            setHasOTPIcon(false);
            setOTPIcon("");
            setOTPIconType("");
        }
        else{
            setSubmitLoading(false);
            setSubmitDisabled(true);
            setButtonBg('success');
            setButtonHasIcon(true);
            setButtonLable('Success');
            setButtonIconPosition("left");
            setButtonIco(icons.tick);
            const tokenDetails = decodeToken(validateUserReq.data.access_token, globals.JWT_SECRET);
            if (tokenDetails.role === defaults.ROLES.SUPER_ADMIN || tokenDetails.role === defaults.ROLES.ADMIN || tokenDetails.role === defaults.ROLES.CREATOR || tokenDetails.role === defaults.ROLES.MODERATOR || tokenDetails.role === defaults.ROLES.APPROVER) {
                dispatch(
                    login(
                        {
                            id: validateUserReq.data.user_id,
                            name: validateUserReq.data.name,
                            role: tokenDetails.role,
                            email_id: validateUserReq.data.email_id,
                            access_token: validateUserReq.data.access_token,
                            refresh_token: validateUserReq.data.refresh_token,
                            avatar: '',
                            is_2fa_enabled: tokenDetails.is_2fa_enabled,
                            is_validated: tokenDetails.is_validated,
                            to_be_validated: tokenDetails.to_be_validated,
                            is_logged_in: true,
                            ip_address: ipAddress,
                            country_code: countryCode,
                            country_name: countryName,
                            city: city,
                            state: state,
                            pincode: pincode,
                            latitude: latitude,
                            longitude: longitude
                        }
                    )
                );
                
                if(tokenDetails.is_validated === true){
                    ToastAlert.notifySuccess("Welcome! You are successfully logged in.");
                }
                else{
                    return
                }
            }
            else{
                return
            }
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

export default Verify2FAOTPForm