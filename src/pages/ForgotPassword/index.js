import React from 'react';
import { useNavigate } from 'react-router-dom';
import ForgotPasswordForm from '../../components/prelogin/ForgotPasswordForm';
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings';
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos';
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction';

const ForgotPasswordPage = ({user}) => {

    const navigate = useNavigate();

    return (
        <>
            <PreLoginSectionLogos />
            <PreLoginSectionHeadings 
                heading="Forgot Password" 
                description="Enter your email to reset the password" 
                hasAction={false}
            />
            <ForgotPasswordForm user={user} />
            <PreLoginFormInfoAction 
                info="remember password?"
                hasAction={true}
                actionPosition="right"
                actionLable="back to sign in"
                actionHandler={() => navigate('/')}
            />
        </>
    )
}

export default ForgotPasswordPage