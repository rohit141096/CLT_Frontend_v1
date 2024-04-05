import React from 'react';
import { icons } from '../../../../../constants';
import SidebarHeader from './SidebarHeader';
import SidebarList from './SidebarList';
import SidebarListItem from './SidebarList/SidebarListItem';

const SuperAdminLayoutSidebar = () => {
    return (
        <div className="dashboardRightSidebar">
            <SidebarHeader 
                icon={icons.graphHigh}
            />
            <SidebarList>
                <SidebarListItem 
                    logo={'/images/state-emblem-icon.png'}
                    department=''
                    count={1}
                    countType='warning'
                    goTo={'/'}
                />
                <SidebarListItem 
                    logo={'/images/bbmp-icon.png'}
                    department=''
                    count={2}
                    countType='success'
                    goTo={'/'}
                />
                <SidebarListItem 
                    logo={'/images/metro-icon.png'}
                    department=''
                    count={3}
                    countType='error'
                    goTo={'/'}
                />
                <SidebarListItem 
                    logo={'/images/ksrtc-icon.png'}
                    department=''
                    count={4}
                    countType='primary'
                    goTo={'/'}
                />
                <SidebarListItem 
                    logo={'/images/mysore-palace-icon.png'}
                    department=''
                    count={5}
                    countType='dark'
                    goTo={'/'}
                />
                <SidebarListItem 
                    logo={'/images/state-emblem-icon.png'}
                    department=''
                    count={6}
                    countType='warning'
                    goTo={'/'}
                />
                <SidebarListItem 
                    logo={'/images/bbmp-icon.png'}
                    department=''
                    count={7}
                    countType='success'
                    goTo={'/'}
                />
                <SidebarListItem 
                    logo={'/images/metro-icon.png'}
                    department=''
                    count={8}
                    countType='error'
                    goTo={'/'}
                />
                <SidebarListItem 
                    logo={'/images/ksrtc-icon.png'}
                    department=''
                    count={9}
                    countType='primary'
                    goTo={'/'}
                />
                <SidebarListItem 
                    logo={'/images/mysore-palace-icon.png'}
                    department=''
                    count={10}
                    countType='dark'
                    goTo={'/'}
                />
            </SidebarList>
        </div>
    )
}

export default SuperAdminLayoutSidebar