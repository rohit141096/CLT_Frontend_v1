import React, { useEffect } from "react"
import SuperAdminLayoutNavBar from "./Navbar"
import ContentSidebarFooter from "./ContentSidebarFooter"
import ContentContainer from "./ContentContainer"
import SuperAdminLayoutHeader from "./Header"
import SuperAdminLayoutSidebar from "./Sidebar"
import SuperAdminLayoutFooter from "./Footer"

const SuperAdminLayout = ({ user, socket, socketActivity, children }) => {
  // const joinSuperAdminRoom = () => {
  //     socket.emit("join", "owner-super-admin");
  //     socket.emit("join", user.id);

  //     socketActivity.emit("join", "owner-super-admin");
  //     socketActivity.emit("join", user.id);
  // }

  // useEffect(() => {
  //     joinSuperAdminRoom();
  // }, []);

  return (
    <div className='dashboardPage'>
      <SuperAdminLayoutNavBar user={user} />
      <ContentSidebarFooter>
        <ContentContainer>
          <SuperAdminLayoutHeader user={user} socket={socket} />
          {children}
        </ContentContainer>
        <SuperAdminLayoutSidebar />
        <SuperAdminLayoutFooter />
      </ContentSidebarFooter>
    </div>
  )
}

export default SuperAdminLayout
