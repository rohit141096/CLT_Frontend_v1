import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderLeftMenu from './HeaderLeftMenu'
import HeaderMenuItem from './HeaderMenuItem'
import HeaderRightContent from './HeaderRightContent'
import HeaderRightMenu from './HeaderRightMenu'
import HeaderUserDetails from './UserDetails'
import { icons } from '../../../../../constants'
import TooltipWrapper from '../../../../core/tooltip'
import TooltipContent from '../../../../core/tooltip/content'
import TooltipList from '../../../../core/tooltip/list'
import TooltipListItem from '../../../../core/tooltip/list/item'

const SuperAdminLayoutHeader = ({user, socket}) => {

    const navigate = useNavigate();

    const [isLatest, setIsLatest] = useState(true);

    const [showUserOptions, setShowUserOptions] = useState(false);
    const [showAddOptions, setShowAddOptions] = useState(false);

    // useEffect(() => {
    //     socket.on("new_request", () => {
    //         setIsLatest(false);
    //     });
    // }, [socket]);

    return (
        <div className="dashboardHeader">
            <HeaderLeftMenu>
                <TooltipWrapper>
                    <HeaderMenuItem icon={icons.addBordered} action={()=> setShowAddOptions(showAddOptions ? false : true) } />
                    <TooltipContent 
                        showContent={showAddOptions} 
                        width="small" 
                        position="bottomLeft" 
                        bg="lightBg" 
                        border="curvedBorder" 
                        shadow="defaultShadow"
                        action={()=> setShowAddOptions(showAddOptions ? false : true)}
                    >
                        <TooltipList>
                            <TooltipListItem hasIcon={true} icon={icons.govtBuilding} lable="website" action={() => console.log('settings')} />
                            <TooltipListItem hasIcon={true} icon={icons.panorama} lable="banner" action={() => console.log('logout')} />
                        </TooltipList>
                    </TooltipContent>
                </TooltipWrapper>
                <HeaderMenuItem icon={icons.imageVideo} action={() => navigate(`/general/file-manager`)} />
                <HeaderMenuItem icon={icons.fileLines} />
            </HeaderLeftMenu>
            <HeaderRightContent>
                <HeaderRightMenu>
                    <HeaderMenuItem icon={icons.star} />
                    <HeaderMenuItem icon={icons.search} isShort={true} />
                    <HeaderMenuItem icon={icons.bell} isLatest={isLatest} />
                </HeaderRightMenu>
                <TooltipWrapper>
                    <HeaderUserDetails 
                        avatar={"/images/default-avatar.jpg"}
                        name={user.name}
                        role="super admin"
                        action={()=> setShowUserOptions(showUserOptions ? false : true) }
                    />
                    <TooltipContent 
                        showContent={showUserOptions} 
                        width="small" 
                        position="bottomRight" 
                        bg="lightBg" 
                        border="curvedBorder" 
                        shadow="defaultShadow"
                        action={()=> setShowUserOptions(showUserOptions ? false : true)}
                    >
                        <TooltipList>
                            <TooltipListItem hasIcon={true} icon={icons.settingsGear} lable="settings" action={() => console.log('settings')} />
                            <TooltipListItem hasIcon={true} icon={icons.signOut} lable="logout" action={() => console.log('logout')} />
                        </TooltipList>
                    </TooltipContent>
                </TooltipWrapper>
                
            </HeaderRightContent>
        </div>
    )
}

export default SuperAdminLayoutHeader