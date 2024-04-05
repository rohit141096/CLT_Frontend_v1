import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../reducers/User';
import { icons } from "../../../constants"

const SuperAdminHomePage = ({user}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <>
            <div className="dashboardPage">
                <div className="dashboardNavBar">
                    <div className="dashboardNavBarHeader">
                        <div className="dashboardNavBarHeaderLogos">
                            <div className="dashboardNavBarHeaderLogo">
                                <div className="dashboardNavBarHeaderLogoImage">
                                    <img src="images/pre-login-state-emblem.png" className="dashboardNavBarHeaderLogoImg" alt="Karnataka State" />
                                </div>
                            </div>
                            <div className="dashboardNavBarHeaderLogoSeperator">&nbsp;</div>
                            <div className="dashboardNavBarHeaderLogo">
                                <div className="dashboardNavBarHeaderLogoImage">
                                    <img src="images/pre-login-ceg-logo.png" className="dashboardNavBarHeaderLogoImg" alt="CEG" />
                                </div>
                            </div>
                        </div>

                        <div className="dashboardNavBarHeaderAction">
                            <div className="dashboardNavBarHeaderActionIcon">
                                <i className={`${icons.menu} dashboardNavBarHeaderActionIco`}></i>
                            </div>
                        </div>
                    </div>
                    <div className="dashboardNavBarUserInfo">
                        <div className="dashboardNavBarUserInfoAvatarContainer">
                            <div className="dashboardNavBarUserInfoAvatarMain">
                                <div className="dashboardNavBarUserInfoAvatarImage">
                                    <img src="images/default-avatar.jpg" className="dashboardNavBarUserInfoAvatarImg" alt="User Name" />
                                </div>
                            </div>
                        </div>
                        <div className="dashboardNavBarUserInfoDetails">
                            <div className="dashboardNavBarUserInfoName">
                                <p className="dashboardNavBarUserInfoNameTxt">sharath bharadwaj</p>
                            </div>
                            <div className="dashboardNavBarUserInfoEmail">
                                <p className="dashboardNavBarUserInfoEmailTxt">web-admin@karnataka.gov.in</p>
                            </div>
                        </div>
                    </div>

                    <div className="dashboardNavBarContent">
                        <div className="dashboardNavBarContentSection">
                            <div className="dashboardNavBarContentSectionHeadings">
                                <div className="dashboardNavBarContentSectionHeading">
                                    <p className="dashboardNavBarContentSectionHeadingTxt">dashboards</p>
                                </div>
                                <div className="dashboardNavBarContentSectionSubHeading">
                                    <p className="dashboardNavBarContentSectionSubHeadingTxt">All you need at your fingertips</p>
                                </div>
                            </div>

                            <div className="dashboardNavBarContentSectionLinks">
                                <div className="dashboardNavBarContentSectionLink active">
                                    <div className="dashboardNavBarContentSectionLinkIcon">
                                        <i className={`${icons.userSolid} dashboardNavBarContentSectionLinkIco`}></i>
                                    </div>
                                    <div className="dashboardNavBarContentSectionLinkLable">
                                        <p className="dashboardNavBarContentSectionLinkLableTxt">Owner</p>
                                    </div>
                                </div>
                                <div className="dashboardNavBarContentSectionLink">
                                    <div className="dashboardNavBarContentSectionLinkIcon">
                                        <i className={`${icons.userSolid} dashboardNavBarContentSectionLinkIco`}></i>
                                    </div>
                                    <div className="dashboardNavBarContentSectionLinkLable">
                                        <p className="dashboardNavBarContentSectionLinkLableTxt">websites</p>
                                    </div>
                                </div>
                                <div className="dashboardNavBarContentSectionLink">
                                    <div className="dashboardNavBarContentSectionLinkIcon">
                                        <i className={`${icons.userSolid} dashboardNavBarContentSectionLinkIco`}></i>
                                    </div>
                                    <div className="dashboardNavBarContentSectionLinkLable">
                                        <p className="dashboardNavBarContentSectionLinkLableTxt">defaults</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="dashboardNavBarContentSection">
                            <div className="dashboardNavBarContentSectionHeadings">
                                <div className="dashboardNavBarContentSectionHeading">
                                    <p className="dashboardNavBarContentSectionHeadingTxt">masterdata</p>
                                </div>
                                <div className="dashboardNavBarContentSectionSubHeading">
                                    <p className="dashboardNavBarContentSectionSubHeadingTxt">All you need at your fingertips</p>
                                </div>
                            </div>

                            <div className="dashboardNavBarContentSectionLinks">
                                <div className="dashboardNavBarContentSectionLink">
                                    <div className="dashboardNavBarContentSectionLinkIcon">
                                        <i className={`${icons.userSolid} dashboardNavBarContentSectionLinkIco`}></i>
                                    </div>
                                    <div className="dashboardNavBarContentSectionLinkLable">
                                        <p className="dashboardNavBarContentSectionLinkLableTxt">avatars</p>
                                    </div>
                                </div>
                                <div className="dashboardNavBarContentSectionLink">
                                    <div className="dashboardNavBarContentSectionLinkIcon">
                                        <i className={`${icons.userSolid} dashboardNavBarContentSectionLinkIco`}></i>
                                    </div>
                                    <div className="dashboardNavBarContentSectionLinkLable">
                                        <p className="dashboardNavBarContentSectionLinkLableTxt">hyrarchy</p>
                                    </div>
                                </div>
                                <div className="dashboardNavBarContentSectionLink">
                                    <div className="dashboardNavBarContentSectionLinkIcon">
                                        <i className={`${icons.userSolid} dashboardNavBarContentSectionLinkIco`}></i>
                                    </div>
                                    <div className="dashboardNavBarContentSectionLinkLable">
                                        <p className="dashboardNavBarContentSectionLinkLableTxt">political leaders</p>
                                    </div>
                                </div>
                                <div className="dashboardNavBarContentSectionLink">
                                    <div className="dashboardNavBarContentSectionLinkIcon">
                                        <i className={`${icons.userSolid} dashboardNavBarContentSectionLinkIco`}></i>
                                    </div>
                                    <div className="dashboardNavBarContentSectionLinkLable">
                                        <p className="dashboardNavBarContentSectionLinkLableTxt">sub header</p>
                                    </div>
                                </div>
                                <div className="dashboardNavBarContentSectionLink">
                                    <div className="dashboardNavBarContentSectionLinkIcon">
                                        <i className={`${icons.userSolid} dashboardNavBarContentSectionLinkIco`}></i>
                                    </div>
                                    <div className="dashboardNavBarContentSectionLinkLable">
                                        <p className="dashboardNavBarContentSectionLinkLableTxt">menu item</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboardHeaderContentFooterSidebar">
                    <div className="dashboardHeaderContent hasSidebar">
                        <div className="dashboardHeader">
                            <div className="dashboardHeaderLeftMenu">
                                <div className="dashboardHeaderMenuSingle">
                                    <i className={`${icons.addBordered} dashboardHeaderMenuSingleIco`}></i>
                                </div>
                                <div className="dashboardHeaderMenuSingle">
                                    <i className={`${icons.imageVideo} dashboardHeaderMenuSingleIco`}></i>
                                </div>
                                <div className="dashboardHeaderMenuSingle">
                                    <i className={`${icons.fileLines} dashboardHeaderMenuSingleIco`}></i>
                                </div>
                            </div>

                            <div className="dashboardHeaderRightMenuUser">
                                <div className="dashboardHeaderRightMenu">
                                    <div className="dashboardHeaderMenuSingle">
                                        <i className={`${icons.star} dashboardHeaderMenuSingleIco`}></i>
                                    </div>
                                    <div className="dashboardHeaderMenuSingle">
                                        <i className={`${icons.search} dashboardHeaderMenuSingleIco searchIco`}></i>
                                    </div>
                                    <div className="dashboardHeaderMenuSingle">
                                        <i className={`${icons.bell} dashboardHeaderMenuSingleIco`}></i>
                                        <div className="dashboardHeaderMenuSingleDot">
                                            <div className="dashboardHeaderMenuSingleDotMain">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="dashboardHeaderRightUser">
                                    <div className="dashboardHeaderRightUserDetails">
                                        <div className="dashboardHeaderRightUserName">
                                            <p className="dashboardHeaderRightUserNameTxt">sharath</p>
                                        </div>
                                        <div className="dashboardHeaderRightUserRole">
                                            <p className="dashboardHeaderRightUserRoleTxt">super admin</p>
                                        </div>
                                    </div>
                                    <div className="dashboardHeaderRightUserAvatar">
                                        <div className="dashboardHeaderRightUserAvatarImage">
                                            <img src="images/default-avatar.jpg" className="dashboardHeaderRightUserAvatarImg" alt="User" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboardRightSidebar">
                        <div className="dashboardRightSidebarHeader">
                            <div className="dashboardRightSidebarHeaderIcon">
                                <i className={`${icons.graphHigh} dashboardRightSidebarHeaderIco`}></i>
                            </div>
                        </div>
                        <div className="dashboardRightSidebarContent">
                            <div className="dashboardRightSidebarPortal">
                                <div className="dashboardRightSidebarPortalImage">
                                    <img src="images/state-emblem-icon.png" className="dashboardRightSidebarPortalImg" alt="Karnataka State" />
                                </div>
                                <div className="dashboardRightSidebarPortalCount warning">
                                    <p className="dashboardRightSidebarPortalCountTxt">1</p>
                                </div>
                            </div>
                            <div className="dashboardRightSidebarPortal">
                                <div className="dashboardRightSidebarPortalImage">
                                    <img src="images/bbmp-icon.png" className="dashboardRightSidebarPortalImg" alt="BBMP" />
                                </div>
                                <div className="dashboardRightSidebarPortalCount success">
                                    <p className="dashboardRightSidebarPortalCountTxt">2</p>
                                </div>
                            </div>
                            <div className="dashboardRightSidebarPortal">
                                <div className="dashboardRightSidebarPortalImage">
                                    <img src="images/metro-icon.png" className="dashboardRightSidebarPortalImg" alt="BMRCL" />
                                </div>
                                <div className="dashboardRightSidebarPortalCount error">
                                    <p className="dashboardRightSidebarPortalCountTxt">3</p>
                                </div>
                            </div>
                            <div className="dashboardRightSidebarPortal">
                                <div className="dashboardRightSidebarPortalImage">
                                    <img src="images/ksrtc-icon.png" className="dashboardRightSidebarPortalImg" alt="KSRTC" />
                                </div>
                                <div className="dashboardRightSidebarPortalCount primary">
                                    <p className="dashboardRightSidebarPortalCountTxt">4</p>
                                </div>
                            </div>
                            <div className="dashboardRightSidebarPortal">
                                <div className="dashboardRightSidebarPortalImage">
                                    <img src="images/mysore-palace-icon.png" className="dashboardRightSidebarPortalImg" alt="Mysore Palace" />
                                </div>
                                <div className="dashboardRightSidebarPortalCount dark">
                                    <p className="dashboardRightSidebarPortalCountTxt">5</p>
                                </div>
                            </div>
                            <div className="dashboardRightSidebarPortal">
                                <div className="dashboardRightSidebarPortalImage">
                                    <img src="images/state-emblem-icon.png" className="dashboardRightSidebarPortalImg" alt="Karnataka State" />
                                </div>
                                <div className="dashboardRightSidebarPortalCount warning">
                                    <p className="dashboardRightSidebarPortalCountTxt">6</p>
                                </div>
                            </div>
                            <div className="dashboardRightSidebarPortal">
                                <div className="dashboardRightSidebarPortalImage">
                                    <img src="images/bbmp-icon.png" className="dashboardRightSidebarPortalImg" alt="BBMP" />
                                </div>
                                <div className="dashboardRightSidebarPortalCount success">
                                    <p className="dashboardRightSidebarPortalCountTxt">7</p>
                                </div>
                            </div>
                            <div className="dashboardRightSidebarPortal">
                                <div className="dashboardRightSidebarPortalImage">
                                    <img src="images/metro-icon.png" className="dashboardRightSidebarPortalImg" alt="BMRCL" />
                                </div>
                                <div className="dashboardRightSidebarPortalCount error">
                                    <p className="dashboardRightSidebarPortalCountTxt">8</p>
                                </div>
                            </div>
                            <div className="dashboardRightSidebarPortal">
                                <div className="dashboardRightSidebarPortalImage">
                                    <img src="images/ksrtc-icon.png" className="dashboardRightSidebarPortalImg" alt="KSRTC" />
                                </div>
                                <div className="dashboardRightSidebarPortalCount primary">
                                    <p className="dashboardRightSidebarPortalCountTxt">9</p>
                                </div>
                            </div>
                            <div className="dashboardRightSidebarPortal">
                                <div className="dashboardRightSidebarPortalImage">
                                    <img src="images/mysore-palace-icon.png" className="dashboardRightSidebarPortalImg" alt="Mysore Palace" />
                                </div>
                                <div className="dashboardRightSidebarPortalCount dark">
                                    <p className="dashboardRightSidebarPortalCountTxt">10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboardFooter">
                        <div className="dashboardFooterLeft">
                            <div className="dashboardFooterButton primary">
                                <div className="dashboardFooterButtonIcon">
                                    <i className={`${icons.film} dashboardFooterButtonIco`}></i>
                                </div>
                                <div className="dashboardFooterButtonLable">
                                    <p className="dashboardFooterButtonLableTxt">watch support videos</p>
                                </div>
                            </div>
                            <div className="dashboardFooterButton greyDark">
                                <div className="dashboardFooterButtonIcon">
                                    <i className={`${icons.bookOpenSolid} dashboardFooterButtonIco`}></i>
                                </div>
                                <div className="dashboardFooterButtonLable">
                                    <p className="dashboardFooterButtonLableTxt">read documentation</p>
                                </div>
                            </div>
                        </div>

                        <div className="dashboardFooterRight">
                            <div className="dashboardFooterCopyright">
                                <p className="dashboardFooterCopyrightTxt">Copyright &copy; 2023. All Rights Reserved.</p>
                            </div>
                            <div className="dashboardFooterCMSv">
                                <p className="dashboardFooterCMSvTxt">CMS v4</p>
                            </div>
                            <div className="dashboardFooterPoweredBy">
                                <div className="dashboardFooterPoweredByLable">
                                    <p className="dashboardFooterPoweredByLableTxt">Powered By:</p>
                                </div>
                                <div className="dashboardFooterPoweredByLogo">
                                    <img src="images/pre-login-ceg-logo.png" className="dashboardFooterPoweredByLogoImg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuperAdminHomePage