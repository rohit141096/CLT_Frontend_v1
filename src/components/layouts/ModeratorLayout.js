import React from 'react';
import { useLocation } from 'react-router-dom';

const ModeratorLayout = ({children}) => {
    const location = useLocation();

    return (
        <>
            {children}
        </>
    )
}

export default ModeratorLayout