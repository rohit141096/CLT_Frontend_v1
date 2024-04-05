import React from 'react'

const HeaderUserDetails = ({ avatar, name, role, action=() => console.log("") }) => {
    return (
        <div className="dashboardHeaderRightUser" onClick={action}>
            <div className="dashboardHeaderRightUserDetails">
                <div className="dashboardHeaderRightUserName">
                    <p className="dashboardHeaderRightUserNameTxt">{name}</p>
                </div>
                <div className="dashboardHeaderRightUserRole">
                    <p className="dashboardHeaderRightUserRoleTxt">{role}</p>
                </div>
            </div>
            <div className="dashboardHeaderRightUserAvatar">
                <div className="dashboardHeaderRightUserAvatarImage">
                    <img src={avatar} className="dashboardHeaderRightUserAvatarImg" alt="User" />
                </div>
            </div>
        </div>
    )
}

export default HeaderUserDetails