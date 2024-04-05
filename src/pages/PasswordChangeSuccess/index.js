import React from 'react'
import { useNavigate } from 'react-router-dom'
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction'
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings'
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos'

const PasswordChangeSuccessPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <PreLoginSectionLogos />
            
            <PreLoginSectionHeadings 
                heading="Success!" 
                description="Hello Sharath, your account password has been updated successfully." 
                isDiscriptionML={true}
                hasAction={false} 
            />

            <PreLoginFormInfoAction 
                info="Access Your Account Now!"
                hasAction={true}
                actionPosition="right"
                actionLable="Continue Sign in"
                actionHandler={() => navigate('/enable-2fa')}
            />
        </>
    )
}

export default PasswordChangeSuccessPage