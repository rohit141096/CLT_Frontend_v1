import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { icons } from '../../../../../../constants';
import { logout } from '../../../../../../reducers/User';

const NavbarHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <div className="dashboardNavBarHeader">
            <div className="dashboardNavBarHeaderLogos">
                <div className="dashboardNavBarHeaderLogo">
                    <div className="dashboardNavBarHeaderLogoImage">
                        <img src="/images/pre-login-state-emblem.png" className="dashboardNavBarHeaderLogoImg" alt="Karnataka State" />
                    </div>
                </div>
                <div className="dashboardNavBarHeaderLogoSeperator">&nbsp;</div>
                <div className="dashboardNavBarHeaderLogo">
                    <div className="dashboardNavBarHeaderLogoImage">
                        <img src="/images/pre-login-ceg-logo.png" className="dashboardNavBarHeaderLogoImg" alt="CEG" />
                    </div>
                </div>
            </div>

            <div className="dashboardNavBarHeaderAction">
                <div className="dashboardNavBarHeaderActionIcon" onClick={() => logoutHandler()}>
                    <i className={`${icons.menu} dashboardNavBarHeaderActionIco`}></i>
                </div>
            </div>
        </div>
    )
}

export default NavbarHeader