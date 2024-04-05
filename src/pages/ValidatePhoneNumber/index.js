import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../reducers/User";
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings';
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos';
import ValidatePhoneNoForm from '../../components/prelogin/ValidatePhoneNoForm';
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction';

const ValidatePhoneNumberPage = ({user}) => {
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
                heading="Validate Phone No." 
                description="Enter OTP sent to your Phone No." 
                hasAction={true}
                actionLable="Sign Out"
                actionHandler={logoutHandler}
            />
            <ValidatePhoneNoForm user={user} />
            <PreLoginFormInfoAction 
                info="Didn't Receive Any Message?"
                hasAction={true}
                actionPosition="right"
                actionLable="Resend"
                actionHandler={logoutHandler}
            />
        </>
    )
}

export default ValidatePhoneNumberPage