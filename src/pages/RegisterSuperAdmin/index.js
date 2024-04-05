import React, { useState, useEffect, useRef, forwardRef } from 'react';
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings';
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos';

import { useNavigate } from 'react-router-dom';

const RegisterSuperAdminPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <PreLoginSectionLogos />
            <PreLoginSectionHeadings 
                heading="Sign up" 
                description="Not sure where you are?" 
                hasAction={true} 
                actionLable="Back to sign in" 
                actionHandler={() => navigate('/')} 
            />
        </>
    )
}

export default RegisterSuperAdminPage