import Input from "../../common/Input"
import {UserProfile} from '../../../../public/assets/icon/Authentication/User'
import {Password} from '../../../../public/assets/icon/Authentication/Password'
import Eye from "../Eye"

const Form = ():JSX.Element => {
  return (
    <form className="flex flex-col space-y-4 max-w-[361px] ">
        <Input placeholder="Name" icon={UserProfile} type="text"/>
        <Input placeholder="Name" icon={Password} type="password" icon_2={<Eye/>}/>
    </form>
  )
}

export default Form