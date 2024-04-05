import React, { useEffect } from 'react';
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings';
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos';

import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/prelogin/LoginForm';
import { useDispatch } from 'react-redux';
import { logout } from "../../reducers/User";

const LoginPage = ({user}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

    useEffect(() => {
        logoutHandler();
    }, []);

    return (
        <>
            <PreLoginSectionLogos />
            <PreLoginSectionHeadings 
                heading="Sign in" 
                description="Not sure where you are?" 
                hasAction={true} 
                actionLable="Back to home" 
                actionHandler={() => navigate('/forgot-password')} 
            />
            <LoginForm />
        </>
    )
}

export default LoginPage