import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../../reducers/User";

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <>
            <div>Admin Home Page</div>
            <div onClick={logoutHandler}>Logout</div>
        </>
    )
}

export default AdminHomePage