import axios from "axios"
import ContinueWith from "../../../components/authentication/ContinueWith"
import Login from "../../../components/authentication/Login"
import Layout from "../../../layouts/Main"
import { Axios } from "../../../config/axios"

const LoginPage = () => {
  // Axios.get("/users").then(res=>console.log(res.data)
  // )
  return (
    <Layout children1={<Login/>} children2={<ContinueWith/>} text="Or continue with" />
  )
}

export default LoginPage