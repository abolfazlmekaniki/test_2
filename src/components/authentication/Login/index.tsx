import LoginForm from "../LoginForm"

const Login = () => {
  return (
    <main className="flex flex-col px-6 justify-around items-center space-y-8">
            <div className="flex flex-col space-y-3 justify-center items-center">
                <h1 className="font-sora_reg text-2xl sm:text-3xl ">Log in</h1>
                <h6 className="font-sora_lig text-center  text-sm sm:text-base ">Hey, Enter your details to get log in to your account</h6>
            </div>
            <LoginForm/>
    </main>
  )
}

export default Login