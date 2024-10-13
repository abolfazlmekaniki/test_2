import LoginForm from "../LoginForm"

const Login = () => {
  return (
    <main className="flex flex-col w-full max-w-[361px] px-3 justify-around items-center space-y-8">
            <div className="flex flex-col space-y-3 justify-center items-center">
                <h1 className="font-sora_reg text-[28.38px] font-normal ">Log in</h1>
                <h6 className="font-sora_reg text-center  text-[14px] sm:text-base text-secondery_text ">Hey, Enter your details to get log in to your account</h6>
            </div>
            <LoginForm/>
    </main>
  )
}

export default Login