import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout } from "../../reducers/User";
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings';
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos';
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction';
import Enable2FAScanQr from '../../components/prelogin/Enable2FAScanQr';
import { UserServices } from '../../services';
import { ToastAlert } from '../../utils';

const ScanToEnable2FAPage = ({user}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    }

    const [qrToken, setQrToken] = useState(null);

    const getUserQrHandler = async () => {
        const getUserQrReq = await UserServices.getQrCodeToEnable2FA({
            user_id: user.id,
            token: user.access_token,
            ip_address: user.ip_address,
            country_code: user.country_code,
            country_name: user.country_name,
            city: user.city,
            state: user.state,
            pincode: user.pincode,
            latitude: user.latitude,
            longitude: user.longitude
        });
        if(getUserQrReq.status === false){
            setQrToken(null);
            ToastAlert.notifyError(getUserQrReq.message);
        }
        else{
            setQrToken(getUserQrReq.data.qr_token);
        }
    }

    useEffect(() => {
        getUserQrHandler();
    }, [])

    return (
        <>
            <PreLoginSectionLogos />
            <PreLoginSectionHeadings 
                heading="Enable 2FA" 
                description="You must enable 2 factor authentication to proceed with login."
            />

            <Enable2FAScanQr 
                qrcode={qrToken} 
                description={`Scan The QR Code From Authenticator App & Click on`} 
                actionLable={`Continue`}
                actionHandler={() => { location.pathname === "/enable-2fa" ? navigate('/') : navigate('/verify-enable-2fa-otp') } }
            />
            
            <PreLoginFormInfoAction 
                info="need help?"
                hasAction={true}
                actionPosition="right"
                actionLable="Watch Video on How to Setup 2FA?"
                actionHandler={logoutHandler}
            />
        </>
    )
}

export default ScanToEnable2FAPage