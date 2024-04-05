import React from 'react'
import { useNavigate } from 'react-router-dom'
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction'
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings'
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos'

const ForgotPasswordOTPExpiredPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <PreLoginSectionLogos />
            
            <PreLoginSectionHeadings 
                heading="OTP Expired" 
                description="Hello Sharath, we regret to inform you the password change OTP which was sent to your Email has been expired.||The OTP will be active only for 24 hours from the time of generation. You are requested to take action accordingly." 
                isDiscriptionML={true}
                hasAction={false} 
            />

            <PreLoginFormInfoAction 
                info="remember password?"
                hasAction={true}
                actionPosition="right"
                actionLable="back to sign in"
                actionHandler={() => navigate('/password-change-success')}
            />
        </>
    )
}

export default ForgotPasswordOTPExpiredPage