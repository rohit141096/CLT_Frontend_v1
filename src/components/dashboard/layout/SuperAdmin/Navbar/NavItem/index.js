import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { icons } from '../../../../../../constants';
import NavbarBadge from '../NavItemBadge';

const NavbarActionItem = ({icon, lable, tagline="", goTo="/", isActive=false, isBadge, badgeType, badgeContent, badgeBg, hasSubRoutes=false, subRoutes=[]}) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [showSubRoutes, setShowSubRoutes] = useState(false);

    const parentVariant = {
        hidden:{ opacity: 0, height: 0 },
        visible: {
            opacity: 1, 
            height: 'auto'
        },
        exit: {
            opacity: 0, 
            height: 0,
            transition: { delay: 0.3, duration: 0.3 }
        }
    }

    const containerVariant = {
        hidden: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        },
        visible: {
            transition: {
                delay: 0.5,
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    }

    const childVariant = {
        hidden: {
            opacity: 0,
            x: -10
        },
        visible: {
            opacity: 1,
            x: 0,
        }
    }

    return (
        <div className="dashboardNavBarContentSectionLinkSubLinks">
            <div className={`dashboardNavBarContentSectionLink ${isActive === true ? 'active' : ''}`} onClick={() => { hasSubRoutes === true ? setShowSubRoutes(!showSubRoutes) : navigate(goTo)}}>
                <div className="dashboardNavBarContentSectionLinkIcon">
                    <i className={`${icon} dashboardNavBarContentSectionLinkIco`}></i>
                </div>
                <div className="dashboardNavBarContentSectionLinkLables">
                    <div className="dashboardNavBarContentSectionLinkLableHeading">
                        <p className="dashboardNavBarContentSectionLinkLableHeadingTxt">{lable}</p>
                    </div>
                    {
                        tagline != '' ?
                        <div className="dashboardNavBarContentSectionLinkLableTagline">
                            <p className="dashboardNavBarContentSectionLinkLableTaglineTxt">{tagline}</p>
                        </div>
                        :
                        <></>
                    }
                </div>

                {
                    hasSubRoutes === true
                    ?
                    <>
                        {
                            showSubRoutes === false
                            ?
                            <div className="dashboardNavBarContentSectionLinkSubRouteIcon">
                                <i className={`dashboardNavBarContentSectionLinkSubRouteIco ${icons.rightArrow}`}></i>
                            </div>
                            :
                            <div className="dashboardNavBarContentSectionLinkSubRouteIcon">
                                <i className={`dashboardNavBarContentSectionLinkSubRouteIco ${icons.downArrow}`}></i>
                            </div>
                        }
                    </>
                    :
                    <>
                        {
                            isBadge === true
                            ?
                                <NavbarBadge type={badgeType} bg={badgeBg} lable={badgeContent} />
                            :
                            <></>
                        }
                    </>
                }
            </div>
            
                
            
            {
                hasSubRoutes === true
                ?
                    <>
                        {
                            <AnimatePresence>
                                {showSubRoutes && (
                                    <motion.div className="dashboardNavBarContentSectionSubLinkInner"
                                        variants={parentVariant}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        <motion.div className="dashboardNavBarContentSectionSubLinks" variants={containerVariant} initial="hidden" animate="visible" exit="hidden">
                                            {
                                                subRoutes.map((subRoute, i) => {
                                                    let isActive = location.pathname.includes(subRoute.goTo);
                                                    return (
                                                        <motion.div variants={childVariant} className={`dashboardNavBarContentSectionLink bottomMargin ${isActive === true ? 'active' : ''}`} key={i} onClick={() => navigate(subRoute.goTo)}>
                                                            <div className="dashboardNavBarContentSectionLinkIcon">
                                                                &nbsp;
                                                            </div>
                                                            <div className="dashboardNavBarContentSectionLinkLables">
                                                                <div className="dashboardNavBarContentSectionLinkLableHeading">
                                                                    <p className="dashboardNavBarContentSectionLinkLableHeadingTxt">{subRoute.name}</p>
                                                                </div>
                                                                {
                                                                    subRoute.tagline != '' 
                                                                    ?
                                                                        <div className="dashboardNavBarContentSectionLinkLableTagline">
                                                                            <p className="dashboardNavBarContentSectionLinkLableTaglineTxt">Tagline Comes Here</p>
                                                                        </div>
                                                                    :
                                                                        <></>
                                                                }
                                                            </div>
                                                            {
                                                                subRoute.badgeData.hasBadge === true
                                                                ?
                                                                    <NavbarBadge type={subRoute.badgeData.badgeType} bg={subRoute.badgeData.badgeBg} lable={subRoute.badgeData.lable} />
                                                                :
                                                                <></>
                                                            }
                                                        </motion.div>
                                                    )
                                                })
                                            }
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        }
                    </>
                :
                    <></>
            }
        </div>
        
    )
}

export default NavbarActionItem