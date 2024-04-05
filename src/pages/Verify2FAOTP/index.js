import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../reducers/User";
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings'
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos'
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction'
import Verify2FAOTPForm from '../../components/prelogin/Verify2FAOTPForm'

const Verify2FAOTPPage = ({user}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <>
            <PreLoginSectionLogos />
            <PreLoginSectionHeadings 
                heading="Enter gAuth OTP" 
                description="Open Google Authenticator app on your mobile phone to find the OTP." 
                hasAction={false}
            />
            <Verify2FAOTPForm user={user} />
            <PreLoginFormInfoAction 
                info="Facing problem in 2FA?"
                hasAction={true}
                actionPosition="right"
                actionLable="Re Enable 2FA"
                actionHandler={() => navigate("/enable-2fa")}
            />
        </>
    )
}

export default Verify2FAOTPPage