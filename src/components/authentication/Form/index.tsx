import Input from "../../common/Input"
import {UserProfile} from '../../../../public/assets/icon/Authentication/User'
import {Password} from '../../../../public/assets/icon/Authentication/Password'
import Eye from "../Eye"
import Button from "../../common/Button"

const LoginForm = ():JSX.Element => {
  return (
    <form className="flex flex-col  space-y-4 max-w-[361px] ">
        <Input placeholder="Name" icon={UserProfile} type="text"/>
        <Input placeholder="Password" icon={Password} type="password" icon_2={<Eye/>}/>
        <div className="flex space-x-1 px-2 justify-between items-center">
            <div className="flex space-x-1 px-2 items-center">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="label-text font-sora_lig text-xs sm:text-base">Remember me</span> 
            
            </div>
            <a href="/" className="ml-10 font-sora_med text-xs sm:text-base">Forgot Password</a>
        </div>
        <Button value="Log in"/>
    </form>
  )
}

export default LoginForm