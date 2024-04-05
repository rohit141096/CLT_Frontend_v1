import React from 'react';
import { useNavigate } from 'react-router-dom';
import { icons } from '../../../../../../constants';

const FooterButton = ({ buttonBg="primary", icon, lable, goTo }) => {
    const navigate = useNavigate();

    return (
        <div className={`dashboardFooterButton ${buttonBg}`} onClick={() => navigate(goTo)}>
            <div className="dashboardFooterButtonIcon">
                <i className={`${icon} dashboardFooterButtonIco`}></i>
            </div>
            <div className="dashboardFooterButtonLable">
                <p className="dashboardFooterButtonLableTxt">{lable}</p>
            </div>
        </div>
    )
}

export default FooterButton