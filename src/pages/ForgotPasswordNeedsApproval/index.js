import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction'
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings'
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos'
import { defaults } from "../../utils"
import { logout } from "../../reducers/User";

const ForgotPasswordNeedsApprovalPage = ({user}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <>
            <PreLoginSectionLogos />
            
            <PreLoginSectionHeadings 
                heading="Sent For Approval" 
                description={`Hello ${defaults.capitalize(user.name)}, we have sent your request of password change which is associated to the Email ID ${user.email_id} to the super admin and admin for their approval.||You will receive a link with next steps at your registered Email ID once they take an action.`}
                isDiscriptionML={true}
                hasAction={false} 
            />

            <PreLoginFormInfoAction 
                info="remember password?"
                hasAction={true}
                actionPosition="right"
                actionLable="back to sign in"
                actionHandler={() => logoutHandler()}
            />
        </>
    )
}

export default ForgotPasswordNeedsApprovalPage