import React from 'react';
import { useLocation } from 'react-router-dom';

const CreatorLayout = ({children}) => {
    const location = useLocation();

    return (
        <>
            {children}
        </>
    )
}

export default CreatorLayout