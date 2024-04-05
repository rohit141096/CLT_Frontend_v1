import React, { useEffect, useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import {
  LoginPage,
  ForgotPasswordPage,
  ChangePasswordPage,
  ForgotPasswordNeedsApprovalPage,
  VerifyForgotPasswordOTPPage,
  ForgotPasswordOTPExpiredPage,
  PasswordChangeSuccessPage,
  ScanToEnable2FAPage,
  VerifyEnable2FAOTPPage,
  Verify2FAOTPPage,
  RegisterSuperAdminPage,
  ValidateEmailIDPage,
  ValidatePhoneNumberPage,
  ForgotPasswordReqAlreadyExistsPage,
  ForgotPasswordRecentlyRejectedPage,
  SuperAdminHomePage,
  AdminHomePage,
  ResetPasswordRequestWithdrawnPage,
} from "../pages"
import PreLoginOutlet from "./LoginOutlet"
import { defaults, verifyToken } from "../utils"
import DefaultOutlet from "./DefaultOutlet"
import DashboardOutlet from "./DashboardOutlet"

const AppRouter = ({ user, socket, socketActivity }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [isValidated, setIsValidated] = useState(false)
  const [toBeValidated, setToBeValidated] = useState("")
  const [is2FAEnabled, setIs2FAEnabled] = useState(false)

  const isSuperAdmin = defaults.ROLES.SUPER_ADMIN === user.role
  const isAdmin = defaults.ROLES.ADMIN === user.role

  useEffect(() => {
    checkIsLoggedIn()
  }, [user])

  const checkIsLoggedIn = async () => {
    if (user.is_logged_in === true) {
      const checkToken = await verifyToken(user.access_token)
      setIsLoggedIn(checkToken.status)
      setIsValidated(user.is_validated)
      setToBeValidated(user.to_be_validated)
      setIs2FAEnabled(user.is_2fa_enabled)
    } else {
      setIsLoggedIn(false)
      setIsValidated(user.is_validated)
      setToBeValidated(user.to_be_validated)
      setIs2FAEnabled(user.is_2fa_enabled)
    }
  }

  return (
    <>
      {isLoggedIn != null ? (
        <Routes>
          {isLoggedIn === false ? (
            <Route path='/' element={<PreLoginOutlet user={user} />}>
              <Route index element={<LoginPage />} />
              <Route
                path='forgot-password'
                element={
                  user.forgot_password_current_route === "FORGOT_PASSWORD" ? (
                    <ForgotPasswordPage user={user} />
                  ) : user.forgot_password_current_route === "CHANGE_PASSWORD" ? (
                    <ChangePasswordPage user={user} />
                  ) : user.forgot_password_current_route === "ALREADY_EXIST" ? (
                    <ForgotPasswordReqAlreadyExistsPage user={user} />
                  ) : user.forgot_password_current_route === "VALIDATE_OTP" ? (
                    <VerifyForgotPasswordOTPPage user={user} />
                  ) : user.forgot_password_current_route === "REQUEST_WITHDRAWN" ? (
                    <ResetPasswordRequestWithdrawnPage user={user} />
                  ) : user.forgot_password_current_route === "TRY_LATER" ? (
                    <ForgotPasswordRecentlyRejectedPage user={user} />
                  ) : user.forgot_password_current_route === "REQUIRES_APPROVAL" ? (
                    <ForgotPasswordNeedsApprovalPage user={user} />
                  ) : (
                    <ForgotPasswordPage user={user} />
                  )
                }
              />
              {/* <Route path="password-reset-expired-otp" element={<ForgotPasswordOTPExpiredPage />} />
                                <Route path="password-change-success" element={<PasswordChangeSuccessPage />} /> */}
              <Route path='register' element={<RegisterSuperAdminPage />} />
            </Route>
          ) : isLoggedIn === true && isValidated === false ? (
            toBeValidated === "email" ? (
              <Route path='/' element={<PreLoginOutlet user={user} />}>
                <Route index element={<ValidateEmailIDPage user={user} />} />
              </Route>
            ) : toBeValidated === "phone" ? (
              <Route path='/' element={<PreLoginOutlet user={user} />}>
                <Route index element={<ValidatePhoneNumberPage user={user} />} />
              </Route>
            ) : toBeValidated === "2fa" ? (
              is2FAEnabled === true ? (
                <Route path='/' element={<PreLoginOutlet user={user} />}>
                  <Route index element={<Verify2FAOTPPage user={user} />} />
                  <Route path='/enable-2fa' element={<ScanToEnable2FAPage user={user} />} />
                </Route>
              ) : (
                <Route path='/' element={<PreLoginOutlet user={user} />}>
                  <Route index element={<ScanToEnable2FAPage user={user} />} />
                  <Route
                    path='/verify-enable-2fa-otp'
                    element={<VerifyEnable2FAOTPPage user={user} />}
                  />
                </Route>
              )
            ) : (
              <></>
            )
          ) : isLoggedIn === true && isValidated === true ? (
            <>
              <Route path='/' element={<Navigate to={"/dashboard/owner"} />} />
              <Route
                path='/dashboard'
                element={
                  <DashboardOutlet user={user} socket={socket} socketActivity={socketActivity} />
                }
              >
                <Route index element={<Navigate to={"/dashboard/owner"} />} />
                <Route
                  path={"owner"}
                  element={
                    isSuperAdmin ? (
                      <SuperAdminHomePage
                        user={user}
                        socket={socket}
                        socketActivity={socketActivity}
                      />
                    ) : isAdmin ? (
                      <AdminHomePage />
                    ) : (
                      <Navigate to='/404' />
                    )
                  }
                />
              </Route>
            </>
          ) : (
            <></>
          )}
          {/* <Route path="/404" element={<div>404</div>} /> */}
          <Route
            path='*'
            element={
              <Navigate
                to={isLoggedIn === true && isValidated === true ? "/dashboard/owner" : "/"}
              />
            }
          />
        </Routes>
      ) : (
        <></>
      )}
    </>
  )
}

export default AppRouter
