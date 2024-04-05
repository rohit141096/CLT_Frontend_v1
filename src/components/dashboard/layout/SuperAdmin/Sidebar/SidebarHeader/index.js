import React from 'react';
import { icons } from '../../../../../../constants';

const SidebarHeader = ({ icon }) => {
    return (
        <div className="dashboardRightSidebarHeader">
            <div className="dashboardRightSidebarHeaderIcon">
                <i className={`${icon} dashboardRightSidebarHeaderIco`}></i>
            </div>
        </div>
    )
}

export default SidebarHeader