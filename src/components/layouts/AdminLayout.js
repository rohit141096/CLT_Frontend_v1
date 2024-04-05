import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminLayout = ({children}) => {
    const location = useLocation();

    return (
        <>
            {children}
        </>
    )
}

export default AdminLayout