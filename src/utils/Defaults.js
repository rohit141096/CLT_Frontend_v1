import globals from "./Config"

const API_BASE_URL = globals.API_BASE_URL
const LOGGER = process.env.NODE_ENV === "development"
const ROLES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
}

const ServiceResponse = ({ status = false, status_code = 200, message = "", data = "" }) => {
  return {
    status: status, //Boolean - true or false           (Mandatory)
    status_code: status_code, //Number  - Response Status Code    (Mandatory)
    message: message, //String  - Custom Messages         (Optional)
    data: data, //Any     - Data To Showcase        (Optional)
  }
}

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const defaults = {
  API_BASE_URL,
  LOGGER,
  ROLES,
  ServiceResponse,
  capitalize,
}

export default defaults
