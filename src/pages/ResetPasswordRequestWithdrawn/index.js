import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction'
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings'
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos'
import { logout } from "../../reducers/User";
import { defaults } from '../../utils'

const ResetPasswordRequestWithdrawnPage = ({ user }) => {
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
                heading="Request Withdrawn!" 
                description={`Hello ${defaults.capitalize(user.name)}, your reset password request has been successfully withdrawn.`} 
                isDiscriptionML={true}
                hasAction={false} 
            />

            <PreLoginFormInfoAction 
                info="Remember Password?"
                hasAction={true}
                actionPosition="right"
                actionLable="sign in"
                actionHandler={() => logoutHandler()}
            />
        </>
    )
}

export default ResetPasswordRequestWithdrawnPage