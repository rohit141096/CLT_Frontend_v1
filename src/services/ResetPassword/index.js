import axios from "axios"
import { statusCodes, defaults } from "../../utils"

// const config = (token) => {
//     return (
//         {
//             headers: {
//                 'Authorization': token
//             }
//         }
//     )
// }

const resetPasswordRequest = async (payload) => {
  if (!payload.email_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "Email ID is required.",
    })

    return response
  }

  const data = {
    email_id: payload.email_id,
  }

  try {
    const resetPasswordReq = await axios.post(
      `${defaults.API_BASE_URL}reset-password/request`,
      data,
    )
    if (resetPasswordReq.status === statusCodes.NOT_FOUND) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.NOT_FOUND,
        message: "User with the given Email ID not found.",
      })

      return response
    } else if (resetPasswordReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "Reset Password Request Prcocessed Successfully.",
        data: resetPasswordReq?.data?.data,
      })

      return response
    } else if (resetPasswordReq.status === statusCodes.ACCEPTED) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.ACCEPTED,
        message: "User Already Has An Open Request For Reset Password.",
        data: resetPasswordReq?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Reset Password Request failed.",
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.FORBIDDEN) {
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
    } else if (error.response.status === statusCodes.TIME_OUT) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.TIME_OUT,
        message: "Try Again Later.",
        data: error.response?.data?.data,
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

const changePasswordRequest = async (payload) => {
  if (!payload.user_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "User ID is required.",
    })

    return response
  }

  if (!payload.new_password) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "New password is required.",
    })

    return response
  }

  if (!payload.repeat_password) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "Repeat password is required.",
    })

    return response
  }

  const data = {
    new_password: payload.new_password,
    repeat_password: payload.repeat_password,
  }

  try {
    const resetPasswordReq = await axios.patch(
      `${defaults.API_BASE_URL}reset-password/change/${payload.user_id}`,
      data,
    )
    if (resetPasswordReq.status === statusCodes.NOT_FOUND) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.NOT_FOUND,
        message: "User with the given Email ID not found.",
      })

      return response
    } else if (resetPasswordReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "Reset Password Request Prcocessed Successfully.",
        data: resetPasswordReq?.data?.data,
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.FORBIDDEN) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.FORBIDDEN,
        message: error.response.data.message,
      })

      return response
    } else if (error.response.status === statusCodes.VALIDATION_FAILED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.VALIDATION_FAILED,
        message: "Invalid Inputs",
      })

      return response
    } else if (error.response.status === statusCodes.UNAUTHORISED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.TIME_OUT,
        message:
          "Please validate the request through OTP before attempting to change the password.",
        data: error.response?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Reset password request failed.",
      })

      return response
    }
  }
}

const withdrawResetPasswordRequest = async (payload) => {
  if (!payload.request_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "User ID is required.",
    })

    return response
  }

  try {
    const withdrawPasswordReq = await axios.patch(
      `${defaults.API_BASE_URL}reset-password/withdraw/${payload.request_id}`,
    )
    if (withdrawPasswordReq.status === statusCodes.NOT_FOUND) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.NOT_FOUND,
        message: "Invalid Request.",
      })

      return response
    } else if (withdrawPasswordReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "Request Withdrawn Successfully.",
        data: withdrawPasswordReq?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Request Withdrawal failed.",
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.UNAUTHORISED) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.UNAUTHORISED,
        message: "You do not have required permissions to perform this action.",
      })

      return response
    } else if (error.response.status === statusCodes.FORBIDDEN) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.FORBIDDEN,
        message: error.response?.data?.message,
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
        message: "Request Withdrawal failed.",
      })

      return response
    }
  }
}

const getThisResetPasswordRequest = async (payload) => {
  if (!payload.request_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "User ID is required.",
    })

    return response
  }

  try {
    const getThisResetPasswordReq = await axios.get(
      `${defaults.API_BASE_URL}reset-password/${payload.request_id}`,
    )

    if (getThisResetPasswordReq.status === statusCodes.NOT_FOUND) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.NOT_FOUND,
        message: "User not found.",
      })

      return response
    } else if (getThisResetPasswordReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "Request successfull.",
        data: getThisResetPasswordReq?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Get reset password request failed.",
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.VALIDATION_FAILED) {
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

const resendValidateResetPasswordOTP = async (payload) => {
  if (!payload.request_id) {
    const response = defaults.ServiceResponse({
      status: false,
      status_code: statusCodes.VALIDATION_FAILED,
      message: "User ID is required.",
    })

    return response
  }

  try {
    const resendValidatePasswordOTPReq = await axios.patch(
      `${defaults.API_BASE_URL}reset-password/resend/otp/${payload.request_id}`,
    )
    if (resendValidatePasswordOTPReq.status === statusCodes.NOT_FOUND) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.NOT_FOUND,
        message: "Invalid Request.",
      })

      return response
    } else if (resendValidatePasswordOTPReq.status === statusCodes.SUCCESS) {
      const response = defaults.ServiceResponse({
        status: true,
        status_code: statusCodes.SUCCESS,
        message: "OTP Resent Successfully.",
        data: resendValidatePasswordOTPReq?.data?.data,
      })

      return response
    } else {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.BAD_REQUEST,
        message: "Request Withdrawal failed.",
      })

      return response
    }
  } catch (error) {
    if (error.response.status === statusCodes.FORBIDDEN) {
      const response = defaults.ServiceResponse({
        status: false,
        status_code: statusCodes.FORBIDDEN,
        message: error.response?.data?.message,
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
        message: "Resend OTP request failed.",
      })

      return response
    }
  }
}

const ResetPasswordServices = {
  getThisResetPasswordRequest,
  resetPasswordRequest,
  changePasswordRequest,
  withdrawResetPasswordRequest,
  resendValidateResetPasswordOTP,
}

export default ResetPasswordServices
