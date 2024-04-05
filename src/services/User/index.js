import axios from "axios"
import { statusCodes, defaults } from "../../utils"

const config = (token) => {
  return {
    headers: {
      Authorization: token,
    },
  }
}

const loginUser = async (payload) => {
  if (!payload.email_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "Email ID is required.",
    })

    return response
  }

  if (!payload.password) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "Password is required.",
    })

    return response
  }

  const data = {
    email_id: payload.email_id.toLowerCase().trimStart(),
    password: payload.password,
    ip_address: payload.ip_address,
    country_code: payload.country_code,
    country_name: payload.country_name,
    state: payload.state,
    city: payload.city,
    pincode: payload.pincode,
    latitude: payload.latitude,
    longitude: payload.longitude,
  }

  try {
    const loginUserReq = await axios.post(`${defaults.API_BASE_URL}user/login`, data)
    if (loginUserReq.status === statusCodes.NOT_FOUND) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.NOT_FOUND,
        message: "User with the given Email ID not found.",
      })

      return response
    } else if (loginUserReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "User successfully logged in.",
        data: loginUserReq?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "User login request failed.",
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.UNAUTHORISED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.UNAUTHORISED,
        message: "Please check your password.",
      })

      return response
    } else if (error.response.status === statusCodes.FORBIDDEN) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.FORBIDDEN,
        message: "User has been temporarily disabled.",
      })

      return response
    } else if (error.response.status === statusCodes.VALIDATION_FAILED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.VALIDATION_FAILED,
        message: "Invalid Inputs",
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "User login request failed.",
      })

      return response
    }
  }
}

const validateUserEmailID = async (payload) => {
  if (!payload.user_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "User ID is required.",
    })

    return response
  }

  if (!payload.otp) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "OTP is required.",
    })

    return response
  }

  if (!payload.token) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "Token is required.",
    })

    return response
  }

  const data = {
    user_id: payload.user_id,
    otp: payload.otp,
    ip_address: payload.ip_address,
    country_code: payload.country_code,
    country_name: payload.country_name,
    state: payload.state,
    city: payload.city,
    pincode: payload.pincode,
    latitude: payload.latitude,
    longitude: payload.longitude,
  }

  try {
    let headers = await config(payload.token)

    const validateUserReq = await axios.post(
      `${defaults.API_BASE_URL}user/validate/email`,
      data,
      headers,
    )

    if (validateUserReq.status === statusCodes.NOT_FOUND) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.NOT_FOUND,
        message: "User not found.",
      })

      return response
    } else if (validateUserReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "Email ID validation successfull.",
        data: validateUserReq?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Email ID validation request failed.",
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.UNAUTHORISED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.UNAUTHORISED,
        message: "Invalid OTP.",
      })

      return response
    } else if (error.response.status === statusCodes.FORBIDDEN) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.FORBIDDEN,
        message: "User has been temporarily disabled.",
      })

      return response
    } else if (error.response.status === statusCodes.TIME_OUT) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.TIME_OUT,
        message: "OTP is expired.",
      })

      return response
    } else if (error.response.status === statusCodes.VALIDATION_FAILED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.VALIDATION_FAILED,
        message: "Invalid Inputs",
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Something went wrong. Try again later.",
      })

      return response
    }
  }
}

const validateUserPhoneNo = async (payload) => {
  if (!payload.user_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "User ID is required.",
    })

    return response
  }

  if (!payload.otp) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "OTP is required.",
    })

    return response
  }

  if (!payload.token) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "Token is required.",
    })

    return response
  }

  const data = {
    user_id: payload.user_id,
    otp: payload.otp,
    ip_address: payload.ip_address,
    country_code: payload.country_code,
    country_name: payload.country_name,
    state: payload.state,
    city: payload.city,
    pincode: payload.pincode,
    latitude: payload.latitude,
    longitude: payload.longitude,
  }

  try {
    let headers = await config(payload.token)

    const validateUserReq = await axios.post(
      `${defaults.API_BASE_URL}user/validate/phone`,
      data,
      headers,
    )

    if (validateUserReq.status === statusCodes.NOT_FOUND) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.NOT_FOUND,
        message: "User not found.",
      })

      return response
    } else if (validateUserReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "Phone No. validation successfull.",
        data: validateUserReq?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Phone No. validation request failed.",
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.UNAUTHORISED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.UNAUTHORISED,
        message: "Invalid OTP.",
      })

      return response
    } else if (error.response.status === statusCodes.FORBIDDEN) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.FORBIDDEN,
        message: "User has been temporarily disabled.",
      })

      return response
    } else if (error.response.status === statusCodes.TIME_OUT) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.TIME_OUT,
        message: "OTP is expired.",
      })

      return response
    } else if (error.response.status === statusCodes.VALIDATION_FAILED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.VALIDATION_FAILED,
        message: "Invalid Inputs",
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Something went wrong. Try again later.",
      })

      return response
    }
  }
}

const getQrCodeToEnable2FA = async (payload) => {
  if (!payload.user_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "User ID is required.",
    })

    return response
  }

  if (!payload.token) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "Token is required.",
    })

    return response
  }

  try {
    let headers = await config(payload.token)

    const data = {
      ip_address: payload.ip_address,
      country_code: payload.country_code,
      country_name: payload.country_name,
      state: payload.state,
      city: payload.city,
      pincode: payload.pincode,
      latitude: payload.latitude,
      longitude: payload.longitude,
    }

    const getQrToEnable2FAReq = await axios.get(
      `${defaults.API_BASE_URL}user/enable/2fa/${payload.user_id}?ip_address=${payload.ip_address}&country_code=${payload.country_code}&country_name=${payload.country_name}&state=${payload.state}&city=${payload.city}&pincode=${payload.pincode}&latitude=${payload.latitude}&longitude=${payload.longitude}`,
      headers,
    )

    if (getQrToEnable2FAReq.status === statusCodes.NOT_FOUND) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.NOT_FOUND,
        message: "User not found.",
      })

      return response
    } else if (getQrToEnable2FAReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "Request successfull.",
        data: getQrToEnable2FAReq?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Get QR code to enable 2FA request failed.",
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.UNAUTHORISED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.UNAUTHORISED,
        message: "You are not permitted to perform this action.",
      })

      return response
    } else if (error.response.status === statusCodes.FORBIDDEN) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.FORBIDDEN,
        message: "User has been temporarily disabled.",
      })

      return response
    } else if (error.response.status === statusCodes.VALIDATION_FAILED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.VALIDATION_FAILED,
        message: "Invalid Inputs",
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Something went wrong. Try again later.",
      })

      return response
    }
  }
}

const validateUser2faOTP = async (payload) => {
  if (!payload.user_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "User ID is required.",
    })

    return response
  }

  if (!payload.otp) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "OTP is required.",
    })

    return response
  }

  if (!payload.token) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "Token is required.",
    })

    return response
  }

  const data = {
    user_id: payload.user_id,
    otp: payload.otp,
    ip_address: payload.ip_address,
    country_code: payload.country_code,
    country_name: payload.country_name,
    city: payload.city,
    state: payload.state,
    pincode: payload.pincode,
    latitude: payload.latitude,
    longitude: payload.longitude,
  }

  try {
    let headers = await config(payload.token)

    const validateUserReq = await axios.post(
      `${defaults.API_BASE_URL}user/validate/2fa`,
      data,
      headers,
    )

    if (validateUserReq.status === statusCodes.NOT_FOUND) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.NOT_FOUND,
        message: "User not found.",
      })

      return response
    } else if (validateUserReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "2FA validation successfull.",
        data: validateUserReq?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "2FA validation request failed.",
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.UNAUTHORISED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.UNAUTHORISED,
        message: "Invalid OTP.",
      })

      return response
    } else if (error.response.status === statusCodes.FORBIDDEN) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.FORBIDDEN,
        message: "User has been temporarily disabled.",
      })

      return response
    } else if (error.response.status === statusCodes.TIME_OUT) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.TIME_OUT,
        message: "OTP is expired.",
      })

      return response
    } else if (error.response.status === statusCodes.VALIDATION_FAILED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.VALIDATION_FAILED,
        message: "Invalid Inputs",
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Something went wrong. Try again later.",
      })

      return response
    }
  }
}

const validateResetPasswordOTP = async (payload) => {
  if (!payload.request_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "Request ID is required.",
    })

    return response
  }
  if (!payload.user_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "User ID is required.",
    })

    return response
  }

  if (!payload.otp) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "OTP is required.",
    })

    return response
  }

  const data = {
    request_id: payload.request_id,
    user_id: payload.user_id,
    otp: payload.otp,
  }

  try {
    const validateOTPReq = await axios.patch(
      `${defaults.API_BASE_URL}user/validate/reset/password`,
      data,
    )

    if (validateOTPReq.status === statusCodes.NOT_FOUND) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.NOT_FOUND,
        message: "Invalid request.",
      })

      return response
    } else if (validateOTPReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "OTP validated successfully.",
        data: validateOTPReq?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "2FA validation request failed.",
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.UNAUTHORISED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.UNAUTHORISED,
        message: "Invalid OTP.",
      })

      return response
    } else if (error.response.status === statusCodes.FORBIDDEN) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.FORBIDDEN,
        message: error.response?.data?.message,
      })

      return response
    } else if (error.response.status === statusCodes.TIME_OUT) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.TIME_OUT,
        message: "OTP is expired.",
      })

      return response
    } else if (error.response.status === statusCodes.VALIDATION_FAILED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.VALIDATION_FAILED,
        message: "Invalid inputs",
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Something went wrong. Try again later.",
      })

      return response
    }
  }
}

const getAllAuthUsersSuperAdmin = async (payload) => {
  if (!payload.token) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "Token is required.",
    })

    return response
  }

  try {
    let headers = await config(payload.token)

    const getUsersReq = await axios.get(
      `${defaults.API_BASE_URL}user/super-admin/auth/all?roles=${
        payload?.roles === undefined ? "ALL" : payload?.roles
      }&created_on=${
        payload?.created_on === undefined ? "RECENT" : payload?.created_on
      }&created_by=${payload?.created_by === undefined ? null : payload?.created_by}`,
      headers,
    )

    if (getUsersReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "Users successfully recieved.",
        data: getUsersReq?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Request failed due to unexpected technical error.",
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.UNAUTHORISED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.UNAUTHORISED,
        message: "Please provide your token.",
      })

      return response
    } else if (error.response.status === statusCodes.FORBIDDEN) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.FORBIDDEN,
        message: "User doesn't have required rights to process this request.",
      })

      return response
    } else if (error.response.status === statusCodes.VALIDATION_FAILED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.VALIDATION_FAILED,
        message: "Invalid Inputs",
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Request failed due to expected technical error.",
      })

      return response
    }
  }
}

const UserServices = {
  loginUser,
  validateUserEmailID,
  validateUserPhoneNo,
  getQrCodeToEnable2FA,
  validateUser2faOTP,
  validateResetPasswordOTP,
  getAllAuthUsersSuperAdmin,
}

export default UserServices
