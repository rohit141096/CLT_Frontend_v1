import React from 'react';
import { useLocation } from 'react-router-dom';

import PreLoginContentSection from '../../components/prelogin/PreLoginContentSection';
import PreLoginWelcomeContent from '../../components/prelogin/PreLoginWelcomeContent';
import PreLogin2FAContent from '../prelogin/PreLogin2FAContent';

const PreLoginLayout = ({user, children}) => {
    const location = useLocation();

    return (
        <>
            <div className="preLoginPage">
                <div className="preLoginContentCard">
                    <div className="preLoginFormSection">
                        <div className="preLoginFormSectionContent">
                            {children}
                        </div>
                    </div>
                    <PreLoginContentSection>
                        {
                            user.is_logged_in === false
                            ?
                                <PreLoginWelcomeContent />
                            :
                            user.is_logged_in === true && user.is_validated === false && user.to_be_validated === "2fa"
                            ?
                                <PreLogin2FAContent />
                            :
                                <PreLoginWelcomeContent />
                        }
                        
                    </PreLoginContentSection>
                </div>
            </div>
        </>
    )
}

export default PreLoginLayout