import React from 'react'

const FooterCMSv = ({ version=4 }) => {
    return (
        <div className="dashboardFooterCMSv">
            <p className="dashboardFooterCMSvTxt">CMS v{version}</p>
        </div>
    )
}

export default FooterCMSv