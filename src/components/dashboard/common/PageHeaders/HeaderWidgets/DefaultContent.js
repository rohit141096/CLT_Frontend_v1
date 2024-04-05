import React from 'react'

const DefaultContent = ({ heading="welcome back!", hasDescriptionIcon=false, descriptionIcon="", description="" }) => {
    return (
        <div className="dashboardPageDefaultHeaderContent">
            <div className="dashboardPageDefaultHeaderContentHeading">
                <p className="dashboardPageDefaultHeaderContentHeadingTxt">{heading}</p>
            </div>
            <div className={`dashboardPageDefaultHeaderContentDescription ${hasDescriptionIcon === true ? 'hasIcon' : ''}`}>
                {
                    hasDescriptionIcon === true 
                    ?
                    <div className="dashboardPageDefaultHeaderContentDescriptionIcon">
                        <i className={`${descriptionIcon} dashboardPageDefaultHeaderContentDescriptionIco`}></i>
                    </div>
                    :
                    <></>
                }
                
                <p className="dashboardPageDefaultHeaderContentDescriptionTxt">{description}</p>
            </div>
        </div>
    )
}

export default DefaultContent