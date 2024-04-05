import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ChangePasswordForm from '../../components/prelogin/ChangePasswordForm'
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings'
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos'
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction'
import { logout } from "../../reducers/User";

const ChangePasswordPage = ({user}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/");
    }
    
    return (
        <>
            <PreLoginSectionLogos />
            <PreLoginSectionHeadings 
                heading="Change password" 
                description="Enter your new password to continue." 
                hasAction={false}
            />
            <ChangePasswordForm user={user} />
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

export default ChangePasswordPage