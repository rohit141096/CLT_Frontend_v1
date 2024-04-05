import React from 'react'

const FooterCopyright = ({ year=2023 }) => {
    return (
        <div className="dashboardFooterCopyright">
            <p className="dashboardFooterCopyrightTxt">Copyright &copy; {year}. All Rights Reserved.</p>
        </div>
    )
}

export default FooterCopyright