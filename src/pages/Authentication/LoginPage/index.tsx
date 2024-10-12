import Login from "../../../components/authentication/Login"
import Layout from "../../../layouts/Main"

const LoginPage = () => {
  return (
    <Layout children1={<Login/>} children2={<>hi</>} />
  )
}

export default LoginPage