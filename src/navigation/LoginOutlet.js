import React from "react"
import { Outlet } from "react-router-dom"
import PreLoginLayout from "../components/layouts/PreLoginLayout"

const PreLoginOutlet = ({ user }) => {
  return (
    <>
      <PreLoginLayout user={user}>
        <Outlet />
      </PreLoginLayout>
    </>
  )
}

export default PreLoginOutlet
