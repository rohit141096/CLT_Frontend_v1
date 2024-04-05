import React from 'react'

const PlainNavBadge = ({ lable="" }) => {
    return (
        <div className="dashboardNavBarContentSectionLinkBadgeContainer">
            <div className={`dashboardNavBarContentSectionLinkBadge plain`}>
                <p className="dashboardNavBarContentSectionLinkBadgeTxt">{lable}</p>
            </div>
        </div>
    )
}

export default PlainNavBadge