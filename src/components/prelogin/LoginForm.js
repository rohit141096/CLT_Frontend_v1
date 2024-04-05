import React, { useState, useEffect, useRef, forwardRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { decodeToken } from "react-jwt"
import { login } from "../../reducers/User"
import PasswordInput from "../../components/core/form/PasswordInput"
import PreLoginFormAcknowledgement from "../../components/form/PreLoginFormAcknowledgement"
import PreLoginFormAction from "../../components/form/PreLoginFormAction"
import Button from "../../components/core/form/Button"
import TextInputRT from "../core/form/TextInputRT"
import { icons } from "../../constants"
import { motion } from "framer-motion"
import { GeneralServices, UserServices } from "../../services"
import { ToastAlert, defaults, statusCodes, validations } from "../../utils"
import globals from "../../utils/Config"

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [hasEmailIcon, setHasEmailIcon] = useState(false)
  const [emailIcon, setEmailIcon] = useState("")
  const [emailIconPosition, setEmailIconPosition] = useState("right")
  const [emailIconType, setEmailIconType] = useState("")
  const [hasEmailMessage, setHasEmailMessage] = useState(false)
  const [emailMessage, setEmailMessage] = useState("")
  const [emailMessageType, setEmailMessageType] = useState("")

  const passwordRef = useRef()
  const [hasPasswordIcon, setHasPasswordIcon] = useState(false)
  const [passwordIcon, setPasswordIcon] = useState("")
  const [passwordIconPosition, setPasswordIconPosition] = useState("left")
  const [passwordIconType, setPasswordIconType] = useState("")
  const [hasPasswordMessage, setHasPasswordMessage] = useState(false)
  const [passwordMessage, setPasswordMessage] = useState("")
  const [passwordMessageType, setPasswordMessageType] = useState("")

  const rememberRef = useRef()

  const [submitLoading, setSubmitLoading] = useState(false)
  const [submitDisabled, setSubmitDisabled] = useState(false)

  const [buttonBg, setButtonBg] = useState("primary")
  const [buttonHasIcon, setButtonHasIcon] = useState(false)
  const [buttonIconPosition, setButtonIconPosition] = useState("left")
  const [buttonLable, setButtonLable] = useState("Submit")
  const [buttonIco, setButtonIco] = useState(icons.tick)

  const [ipAddress, setIpAddress] = useState(0)
  const [countryCode, setCountryCode] = useState(0)
  const [countryName, setCountryName] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [pincode, setPincode] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const handleGetUserIpReq = async () => {
    const userIpAddressReq = await GeneralServices.getUserIpAddress()
    if (userIpAddressReq.status === false) {
      ToastAlert.notifyError(userIpAddressReq.message)
    } else {
      setIpAddress(userIpAddressReq.data.IPv4)
      setCountryCode(userIpAddressReq.data.country_code)
      setCountryName(userIpAddressReq.data.country_name)
      setCity(userIpAddressReq.data.city === null ? "" : userIpAddressReq.data.city)
      setState(userIpAddressReq.data.state === null ? "" : userIpAddressReq.data.state)
      setPincode(userIpAddressReq.data.postal === null ? "" : userIpAddressReq.data.postal)
      setLatitude(userIpAddressReq.data.latitude)
      setLongitude(userIpAddressReq.data.longitude)
    }
  }

  useEffect(() => {
    handleGetUserIpReq()
  }, [])

  const handleLoginSubmission = async (e) => {
    e.preventDefault()
    setSubmitLoading(true)

    let password = passwordRef.current.value

    const isEmailIDValid = await validations.validateEmailID(email)
    let isPasswordValid = true

    if (isEmailIDValid.status === false) {
      setHasEmailIcon(true)
      setEmailIcon(icons.wrongCircle)
      setEmailIconType("error")
      setHasEmailMessage(true)
      setEmailMessage("Invalid Email ID")
      setEmailMessageType("error")
    } else {
      setHasEmailIcon(true)
      setEmailIcon(icons.tickCircle)
      setEmailIconType("success")
      setHasEmailMessage(false)
      setEmailMessage("")
      setEmailMessageType("")
    }

    if (password === "") {
      isPasswordValid = false
      setHasPasswordMessage(true)
      setPasswordMessage("Invalid Password")
      setPasswordMessageType("error")
    } else {
      isPasswordValid = true
      setHasPasswordMessage(false)
      setPasswordMessage("")
      setPasswordMessageType("")
    }

    if (isEmailIDValid.status === false || isPasswordValid === false) {
      setSubmitLoading(false)
      return
    } else {
      const loginUserReq = await UserServices.loginUser({
        email_id: email,
        password: password,
        ip_address: ipAddress,
        country_code: countryCode,
        country_name: countryName,
        state: state,
        city: city,
        pincode: pincode,
        latitude: latitude,
        longitude: longitude,
      })

      if (loginUserReq.status === false) {
        ToastAlert.notifyError(loginUserReq.message)
        setSubmitLoading(false)
        setHasEmailIcon(false)
        setEmailIcon("")
        setEmailIconType("")
      } else {
        const tokenDetails = decodeToken(loginUserReq.data.access_token, globals.JWT_SECRET)
        if (
          tokenDetails.role === defaults.ROLES.SUPER_ADMIN ||
          tokenDetails.role === defaults.ROLES.ADMIN
        ) {
          setSubmitLoading(false)
          setSubmitDisabled(true)
          setButtonBg("success")
          setButtonHasIcon(true)
          setButtonLable("Success")

          dispatch(
            login({
              id: loginUserReq.data.user_id,
              name: loginUserReq.data.name,
              role: tokenDetails.role,
              email_id: loginUserReq.data.email_id,
              access_token: loginUserReq.data.access_token,
              refresh_token: loginUserReq.data.refresh_token,
              avatar: "",
              is_2fa_enabled: tokenDetails.is_2fa_enabled,
              is_validated: tokenDetails.is_validated,
              to_be_validated: tokenDetails.to_be_validated,
              is_logged_in: true,
              ip_address: ipAddress,
              country_code: countryCode,
              country_name: countryName,
              city: city,
              state: state,
              pincode: pincode,
              latitude: latitude,
              longitude: longitude,
            }),
          )

          if (tokenDetails.is_validated === true) {
            ToastAlert.notifySuccess("Welcome! You are successfully logged in.")
          } else {
            return
          }
        } else {
          return
        }
      }
    }
  }

  return (
    <div className='preLoginFormContainer'>
      <form onSubmit={(e) => handleLoginSubmission(e)} noValidate>
        <div className='cmsForm'>
          <TextInputRT
            hasLable={true}
            lable='Email ID'
            isMandatory={true}
            hasIcon={hasEmailIcon}
            icon={emailIcon}
            iconPosition={emailIconPosition}
            iconType={emailIconType}
            hasMessage={hasEmailMessage}
            message={emailMessage}
            messageType={emailMessageType}
          >
            <input
              type='email'
              className='cmsFormStepInputText'
              placeholder={"Enter Email ID"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </TextInputRT>
          <PasswordInput
            ref={passwordRef}
            placeholder='Enter Password'
            hasLable={true}
            lable='Password'
            isMandatory={true}
            hasMessage={hasPasswordMessage}
            message={passwordMessage}
            messageType={passwordMessageType}
          />
          <PreLoginFormAcknowledgement
            ref={rememberRef}
            lable={`remember me`}
            hasAction={true}
            actionLable={`forgot password`}
            actionHandler={() => navigate(`/forgot-password`)}
          />
          <PreLoginFormAction>
            <Button
              type='submit'
              bgType='fill'
              width='full'
              bg={buttonBg}
              borderRadius='short'
              hasIcon={buttonHasIcon}
              iconPosition={buttonIconPosition}
              icon={buttonIco}
              disabled={submitDisabled}
              isLoading={submitLoading}
            >
              {buttonLable}
            </Button>
          </PreLoginFormAction>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
