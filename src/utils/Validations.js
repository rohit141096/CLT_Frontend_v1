const validatePhoneNumber = async (phone_number) => {
  let pattern = /^[6-9]{1}[0-9]{9}$/
  const check = phone_number.match(pattern)
  if (check) {
    return {
      status: true,
      message: "Success",
    }
  } else {
    return {
      status: false,
      message: "Failed",
    }
  }
}

const validateEmailID = async (email_id) => {
  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const check = email_id.match(pattern)
  if (check) {
    return {
      status: true,
      message: "Success",
    }
  } else {
    return {
      status: false,
      message: "Failed",
    }
  }
}

const validatePassword = async (password) => {
  const uppercaseRegExp = /(?=.*?[A-Z])/
  const lowercaseRegExp = /(?=.*?[a-z])/
  const digitsRegExp = /(?=.*?[0-9])/
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/
  const minLengthRegExp = /.{8,}/
  const passwordLength = password.length
  const uppercasePassword = uppercaseRegExp.test(password)
  const lowercasePassword = lowercaseRegExp.test(password)
  const digitsPassword = digitsRegExp.test(password)
  const specialCharPassword = specialCharRegExp.test(password)
  const minLengthPassword = minLengthRegExp.test(password)
  let errMsg = ""

  const isMinCharValid = minLengthPassword
  const isDigitValid = digitsPassword
  const isSpecialCharValid = specialCharPassword
  const isUpperCaseValid = uppercasePassword
  const isLowerCaseValid = lowercasePassword
  const isEmptyPassword = passwordLength === 0 ? true : false

  return {
    status:
      isMinCharValid &&
      isDigitValid &&
      isSpecialCharValid &&
      isUpperCaseValid &&
      isLowerCaseValid === true
        ? true
        : false,
    message: "Failed",
    isMinCharValid,
    isDigitValid,
    isSpecialCharValid,
    isUpperCaseValid,
    isLowerCaseValid,
    isEmptyPassword,
  }
}

const validateName = async (name) => {
  let pattern = /^[a-zA-Z ]+$/
  const check = name.match(pattern)
  if (check) {
    return {
      status: true,
      message: "Success",
    }
  } else {
    return {
      status: false,
      message: "Failed",
    }
  }
}

const validateFolderName = async (name) => {
  let pattern = /^[a-zA-Z0-9 -]*$/

  const check = name.match(pattern)
  if (check) {
    return {
      status: true,
      message: "Success",
    }
  } else {
    return {
      status: false,
      message: "Failed",
    }
  }
}

const allowOnlyNumbers = (phone) => {
  let pattern = /^\d+$/
  const check = phone.match(pattern)
  if (check) {
    return true
  } else {
    return false
  }
}

export const disableSpecialCharacter = (e) => {
  let pattern = /^[a-zA-Z ]+$/
  const check = e.match(pattern)
  if (check) {
    return true
  } else {
    return false
  }
}

const validations = {
  validateName,
  validateFolderName,
  validateEmailID,
  validatePassword,
  validatePhoneNumber,
  allowOnlyNumbers,
  disableSpecialCharacter,
}

export default validations
