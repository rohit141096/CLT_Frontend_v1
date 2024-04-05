import React, { useRef } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import { useIdleTimer } from "react-idle-timer"
import { logout, makeActive, makeIdle } from "../reducers/User"
import { useDispatch } from "react-redux"
import SuperAdminLayout from "../components/dashboard/layout/SuperAdmin"
import AdminLayout from "../components/layouts/AdminLayout"
import CreatorLayout from "../components/layouts/CreatorLayout"
import ModeratorLayout from "../components/layouts/ModeratorLayout"
import ApproverLayout from "../components/layouts/ApproverLayout"
import { defaults } from "../utils"
import globals from "../utils/Config"

const DashboardOutlet = ({ user, socket, socketActivity }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const idleTimerRef = useRef(null)
  const onIdle = () => {
    dispatch(makeIdle())
  }

  const idleTimer = useIdleTimer({
    crossTab: true,
    ref: idleTimerRef,
    onIdle: onIdle,
    timeout: globals.MAX_IDLE_TIME * 1000 * 60,
  })

  const logoutHandler = () => {
    dispatch(logout())
    navigate("/")
  }

  const keepSignedIn = () => {
    dispatch(makeActive())
  }

  const isSuperAdmin = defaults.ROLES.SUPER_ADMIN === user.role
  const isAdmin = defaults.ROLES.ADMIN === user.role
  const isCreator = defaults.ROLES.CREATOR === user.role
  const isModerator = defaults.ROLES.MODERATOR === user.role
  const isApprover = defaults.ROLES.APPROVER === user.role

  return (
    <>
      <div idletimer={idleTimer}>
        {user.is_idle ? (
          <>
            <button onClick={logoutHandler}>Logout</button>
            <button onClick={keepSignedIn}>Keep Signed In</button>
          </>
        ) : (
          <>
            {isSuperAdmin ? (
              <>
                <SuperAdminLayout user={user} socket={socket} socketActivity={socketActivity}>
                  <Outlet />
                </SuperAdminLayout>
              </>
            ) : isAdmin ? (
              <>
                <AdminLayout user={user}>
                  <Outlet />
                </AdminLayout>
              </>
            ) : isCreator ? (
              <>
                <CreatorLayout user={user}>
                  <Outlet />
                </CreatorLayout>
              </>
            ) : isModerator ? (
              <>
                <ModeratorLayout user={user}>
                  <Outlet />
                </ModeratorLayout>
              </>
            ) : isApprover ? (
              <>
                <ApproverLayout user={user}>
                  <Outlet />
                </ApproverLayout>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default DashboardOutlet
