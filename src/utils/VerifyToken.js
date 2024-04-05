import { isExpired, decodeToken, useJwt } from "react-jwt"
import globals from "./Config"

const data = {
  status: false,
  token: "",
}

const verifyToken = function (token) {
  if (!token) {
    data.status = false
    return data
  }
  let decodedToken
  try {
    decodedToken = decodeToken(token, globals.JWT_SECRET)
    const isMyTokenExpired = isExpired(token, globals.JWT_SECRET)

    data.status = isMyTokenExpired ? false : true
    data.token = decodedToken
    return data
  } catch (err) {
    data.status = false
    return data
  }
}

export default verifyToken
