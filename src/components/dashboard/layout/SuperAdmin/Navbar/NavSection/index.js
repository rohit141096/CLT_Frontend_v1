import React from 'react'

const NavbarSection = ({heading, description, children}) => {
    return (
        <div className="dashboardNavBarContentSection">
            <div className="dashboardNavBarContentSectionHeadings">
                <div className="dashboardNavBarContentSectionHeading">
                    <p className="dashboardNavBarContentSectionHeadingTxt">{heading}</p>
                </div>
                <div className="dashboardNavBarContentSectionSubHeading">
                    <p className="dashboardNavBarContentSectionSubHeadingTxt">{description}</p>
                </div>
            </div>

            <div className="dashboardNavBarContentSectionLinks">
                {children}
            </div>
        </div>
    )
}

export default NavbarSection