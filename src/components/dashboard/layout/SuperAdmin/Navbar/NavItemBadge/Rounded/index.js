import React from 'react'

const RoundedNavBadge = ({ bg="default", lable="" }) => {
    let bgType = bg === "default" ? 'defaultBg' 
                    : bg === "primary" ? 'primaryBg' 
                    : bg === "light" ? 'lightBg' 
                    : bg === "warning" ? 'warningBg' : 'default';
    return (
        <div className="dashboardNavBarContentSectionLinkBadgeContainer">
            <div className={`dashboardNavBarContentSectionLinkBadge rounded ${bgType}`}>
                <p className="dashboardNavBarContentSectionLinkBadgeTxt">{lable}</p>
            </div>
        </div>
    )
}

export default RoundedNavBadge