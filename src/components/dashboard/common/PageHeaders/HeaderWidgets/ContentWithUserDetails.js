import React from 'react'

const ContentWithUserDetails = ({ avatar="/images/default-avatar.jpg", heading="welcome back!", hasDescriptionIcon=false, descriptionIcon="", description="" }) => {
    return (
        <div className="dashboardPageBigHeaderUser">
            <div className="dashboardPageBigHeaderUserAvatar">
                <div className="dashboardPageBigHeaderUserAvatarImage">
                    <img src={avatar} className="dashboardPageBigHeaderUserAvatarImg" alt="User" />
                </div>
            </div>
            <div className="dashboardPageBigHeaderUserHeadingDescription">
                <div className="dashboardPageBigHeaderUserHeading">
                    <p className="dashboardPageBigHeaderUserHeadingTxt">{heading}</p>
                </div>
                <div className={`dashboardPageBigHeaderUserDescription ${hasDescriptionIcon === true ? 'hasIcon' : ''}`}>
                    {
                        hasDescriptionIcon === true 
                        ?
                        <div className="dashboardPageBigHeaderUserDescriptionIcon">
                            <i className={`${descriptionIcon} dashboardPageBigHeaderUserDescriptionIco`}></i>
                        </div>
                        :
                        <></>
                    }
                    
                    <p className="dashboardPageBigHeaderUserDescriptionTxt">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ContentWithUserDetails