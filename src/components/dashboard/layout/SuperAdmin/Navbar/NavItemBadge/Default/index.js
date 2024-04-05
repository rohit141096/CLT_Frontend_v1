import React from 'react'

const DefaultNavBadge = ({ bg="default", lable="" }) => {
    let bgType = bg === "default" ? 'defaultBg' 
                    : bg === "primary" ? 'primaryBg' 
                    : bg === "light" ? 'lightBg' 
                    : bg === "warning" ? 'warningBg' : 'default';
    return (
        <div className="dashboardNavBarContentSectionLinkBadgeContainer">
            <div className={`dashboardNavBarContentSectionLinkBadge default ${bgType}`}>
                <p className="dashboardNavBarContentSectionLinkBadgeTxt">{lable}</p>
            </div>
        </div>
    )
}

export default DefaultNavBadge