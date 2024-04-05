import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
  id: "",
  name: "",
  role: "",
  email_id: "",
  access_token: "",
  refresh_token: "",
  avatar: "",
  is_2fa_enabled: false,
  is_validated: false,
  to_be_validated: "",
  is_logged_in: false,
  reset_password_request_id: 0,
  reset_password_request_readable_id: 0,
  reset_password_requested_on: 0,
  reset_password_request_try_after: 0,
  is_reset_password_error: false,
  is_reset_password_error_type: "",
  forgot_password_current_route: "FORGOT_PASSWORD",
  is_idle: false,
  ip_address: "",
  country_code: "",
  country_name: "",
  city: "",
  state: "",
  pincode: "",
  latitude: "",
  longitude: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialValue,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    resetPassword: (state, action) => {
      state.value.id = action.payload.id
      state.value.name = action.payload.name
      state.value.role = action.payload.role
      state.value.email_id = action.payload.email_id
      state.value.reset_password_request_id = action.payload.reset_password_request_id
      state.value.reset_password_request_readable_id =
        action.payload.reset_password_request_readable_id
      state.value.reset_password_requested_on = action.payload.reset_password_requested_on
      state.value.reset_password_request_try_after = action.payload.reset_password_request_try_after
      state.value.is_reset_password_error = action.payload.is_reset_password_error
      state.value.is_reset_password_error_type = action.payload.is_reset_password_error_type
      state.value.forgot_password_current_route = action.payload.forgot_password_current_route
    },
    logout: (state) => {
      state.value = initialValue
    },
    makeIdle: (state) => {
      state.value.is_idle = true
    },
    makeActive: (state) => {
      state.value.is_idle = false
    },
  },
})

export const { login, logout, resetPassword, makeIdle, makeActive } = userSlice.actions

export default userSlice.reducer
