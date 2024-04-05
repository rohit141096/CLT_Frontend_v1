import React from 'react'
import { useNavigate } from 'react-router-dom'
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction'
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings'
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos'
import ResetPasswordRequestInfoCard from '../../components/prelogin/ResetPasswordRequestInfoCard'
import { defaults } from '../../utils'

const ForgotPasswordReqAlreadyExistsPage = ({ user }) => {
    const navigate = useNavigate();

    return (
        <>
            <PreLoginSectionLogos />
            
            <PreLoginSectionHeadings 
                heading="Hold On!" 
                description={`Hello ${defaults.capitalize(user.name)}, we found a reset password request raised by you which is still OPEN.||Kindly continue with the same request or withdraw the request to resubmit.`} 
                isDiscriptionML={true}
                hasAction={false} 
            />

            <ResetPasswordRequestInfoCard request_id={user.reset_password_request_id} user_id={user.id} user={user} />

            <PreLoginFormInfoAction 
                info="not sure where you are?"
                hasAction={true}
                actionPosition="right"
                actionLable="back to home"
                actionHandler={() => navigate('/')}
            />
        </>
    )
}

export default ForgotPasswordReqAlreadyExistsPage