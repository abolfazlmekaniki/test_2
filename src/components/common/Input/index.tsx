import { ChangeEvent, ReactElement, useContext } from "react"
import { AppContext } from "../../../contexts/store"
import { LoginActionTypes } from "../../../contexts/Login/Login.action.types";

interface props{
    placeholder:"Name"|"Password"|"Family"|"Birthday Date",
    icon?:JSX.Element,
    type?:"text"|"password",
    icon_2?:ReactElement,
    onchange:(e:ChangeEvent)=>void,
    value:string
}

const Input:React.FC<props> = ({placeholder,icon,type="text",icon_2,onchange,value}) => {

  return (
    <label className="input font-sora_lig input-md rounded-3xl input-bordered flex items-center gap-2 ">
        {icon}
        <input value={value} onChange={(e)=>onchange(e)} type={type} className="grow" placeholder={placeholder} />
        {icon_2}
    </label>
  )
}

export default Input