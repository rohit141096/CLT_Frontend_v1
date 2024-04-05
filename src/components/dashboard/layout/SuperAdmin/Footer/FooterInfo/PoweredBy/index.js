import React from 'react'

const FooterPoweredBy = ({ logo="/images/pre-login-ceg-logo.png" }) => {
    return (
        <div className="dashboardFooterPoweredBy">
            <div className="dashboardFooterPoweredByLable">
                <p className="dashboardFooterPoweredByLableTxt">Powered By:</p>
            </div>
            <div className="dashboardFooterPoweredByLogo">
                <img src={logo} className="dashboardFooterPoweredByLogoImg" alt="" />
            </div>
        </div>
    )
}

export default FooterPoweredBy