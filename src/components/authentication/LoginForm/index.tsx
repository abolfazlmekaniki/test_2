import Input from "../../common/Input"
import {UserProfile} from '../../../../public/assets/icon/Authentication/User'
import {Password} from '../../../../public/assets/icon/Authentication/Password'
import Eye from "../Eye"
import {useNavigate } from "react-router-dom";
import Button from "../../common/Button"
import { useSuccessLogin } from "../../../services/mutations/useLogin"
import {useContext, useState } from "react"
import { AppContext } from "../../../contexts/store"
import { LoginActionTypes } from "../../../contexts/Login/Login.action.types"
import { ILoginRequest } from "../../../types/api.types"
import toast from "react-hot-toast"


const LoginForm = ():JSX.Element => {
  const login = useSuccessLogin();
  const navigate = useNavigate()
  const {dispatch} = useContext(AppContext);
  const [info,setInfo] = useState<ILoginRequest>({username:"",password:""})
  const handleClick=()=>{
    // e.stopPropagation();
    console.log(info);
    
    if(info.password && info.username){
      login.mutate(info,{
        onSuccess(info){
          setInfo({username:"",password:""})
          dispatch({type:LoginActionTypes.LOGIN,payload:info})
          toast.success("Welcome "+info.data.username);
          navigate("/CreatePatient")
        },
        onError(){
          toast.error("something went wrong")
          
        }
      })
    }
    else{
      
      toast.error("please fill all  the fields")
      setInfo({username:"",password:""})
    }
  }

  return (
    <form className="flex flex-col w-full  h-auto space-y-4 max-w-[361px] ">
        <Input value={info.username} onchange={(e:any)=>setInfo({...info,username:e.target.value})} placeholder="Name" icon={UserProfile} type="text"/>
        <Input value={info.password} onchange={(e:any)=>setInfo({...info,password:e.target.value})} placeholder="Password" icon={Password} type="password" icon_2={<Eye/>}/>
        <div className="flex space-x-1 px-2 justify-between items-center">
            <div className="flex space-x-1 px-2 items-center">
                <input type="checkbox" defaultChecked className="checkbox w-[18px] h-[18px]" />
                <span className="label-text font-sora_lig text-[12.44px] font-normal">Remember me</span> 
            
            </div>
            <a href="/" className="ml-10 font-sora_med text-secondery_text text-[12.44px] font-normal">Forgot Password</a>
        </div>
        <Button onclick={handleClick} value="Log in"/>
    </form>
  )
}

export default LoginForm