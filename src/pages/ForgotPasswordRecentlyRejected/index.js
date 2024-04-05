import React from 'react'
import { useNavigate } from 'react-router-dom'
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction'
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings'
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos'
import { defaults } from '../../utils'

const ForgotPasswordRecentlyRejectedPage = ({ user }) => {
    const navigate = useNavigate();

    return (
        <>
            <PreLoginSectionLogos />
            
            <PreLoginSectionHeadings 
                heading="Try Again Later!" 
                description={`Hello ${defaults.capitalize(user.name)}, your request was rejected by the approver recently||You will be allowed to resubmit the request only after 24 hours from the time of rejection.||Time Remaining To Resubmit: 22 Hours.`} 
                isDiscriptionML={true}
                hasAction={false} 
            />

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

export default ForgotPasswordRecentlyRejectedPage