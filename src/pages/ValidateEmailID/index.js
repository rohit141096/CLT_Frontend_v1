import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../reducers/User";
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings';
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos';
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction';
import ValidateEmailIDForm from '../../components/prelogin/ValidateEmailIDForm';

const ValidateEmailIDPage = ({user}) => {

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
                heading="Validate Email ID" 
                description="Enter OTP send to your Email ID" 
                hasAction={true}
                actionLable="Sign Out"
                actionHandler={logoutHandler}
            />
            <ValidateEmailIDForm user={user} />
            <PreLoginFormInfoAction 
                info="Didn't Receive Any Email?"
                hasAction={true}
                actionPosition="right"
                actionLable="Resend"
                actionHandler={logoutHandler}
            />
        </>
    )
}

export default ValidateEmailIDPage