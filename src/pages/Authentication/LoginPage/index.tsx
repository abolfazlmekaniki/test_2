import ContinueWith from "../../../components/authentication/ContinueWith"
import Login from "../../../components/authentication/Login"
import Layout from "../../../layouts/Main"


const LoginPage = () => {
  
  return (
    <Layout children1={<Login/>} children2={<ContinueWith/>} text="Or continue with" />
  )
}

export default LoginPage