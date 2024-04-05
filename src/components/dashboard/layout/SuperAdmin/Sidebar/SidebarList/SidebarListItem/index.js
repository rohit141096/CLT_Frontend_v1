import React from 'react';
import { useNavigate } from 'react-router-dom';

const SidebarListItem = ({logo, goTo, department="", count=0, countType="primary"}) => {
    const navigate = useNavigate();

    return (
        <div className="dashboardRightSidebarPortal" onClick={() => navigate(goTo)}>
            <div className="dashboardRightSidebarPortalImage">
                <img src={logo} className="dashboardRightSidebarPortalImg" alt={department} />
            </div>
            <div className={`dashboardRightSidebarPortalCount ${countType}`}>
                <p className="dashboardRightSidebarPortalCountTxt">{count}</p>
            </div>
        </div>
    )
}

export default SidebarListItem