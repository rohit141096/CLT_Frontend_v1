import AppRouter from "./navigation/AppRouter"
import { Toaster } from "react-hot-toast"
import { useSelector } from "react-redux"
import CheckInternetStatus from "./components/core/containers/CheckInternetStatus"

const App = () => {
  const user = useSelector((state) => state.user.value)

  return (
    <>
      <AppRouter user={user} />
      <Toaster />
      <CheckInternetStatus />
    </>
  )
}

export default App
