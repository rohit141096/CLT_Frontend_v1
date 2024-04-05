import React from 'react'

const NavBarUserDetails = ({ avatar, name, emailID }) => {
    return (
        <div className="dashboardNavBarUserInfo">
            <div className="dashboardNavBarUserInfoAvatarContainer">
                <div className="dashboardNavBarUserInfoAvatarMain">
                    <div className="dashboardNavBarUserInfoAvatarImage">
                        <img src={avatar} className="dashboardNavBarUserInfoAvatarImg" alt="User Name" />
                    </div>
                </div>
            </div>
            <div className="dashboardNavBarUserInfoDetails">
                <div className="dashboardNavBarUserInfoName">
                    <p className="dashboardNavBarUserInfoNameTxt">{name}</p>
                </div>
                <div className="dashboardNavBarUserInfoEmail">
                    <p className="dashboardNavBarUserInfoEmailTxt">{emailID}</p>
                </div>
            </div>
        </div>
    )
}

export default NavBarUserDetails