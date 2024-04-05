import toast from "react-hot-toast"

const notifySuccess = (message) =>
  toast.success(message, {
    position: "bottom-center",
    duration: 5000,
  })

const notifyError = (message) =>
  toast.error(message, {
    position: "bottom-center",
    duration: 5000,
  })

const notifyLoading = (message) =>
  toast.loading(message, {
    position: "bottom-center",
    duration: 5000,
  })

const ToastAlert = {
  notifySuccess,
  notifyError,
  notifyLoading,
}

export default ToastAlert
