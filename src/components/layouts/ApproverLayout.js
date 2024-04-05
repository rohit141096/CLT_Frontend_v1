import React from 'react';
import { useLocation } from 'react-router-dom';

const ApproverLayout = ({children}) => {
    const location = useLocation();

    return (
        <>
            {children}
        </>
    )
}

export default ApproverLayout