import { ChangeEvent, ReactElement } from "react"

interface props{
    placeholder:"Name"|"Password"|"Family"|"Birthday Date",
    icon?:JSX.Element,
    type?:"text"|"password",
    icon_2?:ReactElement,
    onchange?:(e:ChangeEvent)=>void,
    value:string
}

const Input:React.FC<props> = ({placeholder,icon,type="text",icon_2,onchange,value}) => {

  return (
    <label className="input w-full max-w-[361px] bg-white border-none font-sora_lig input-md rounded-3xl input-bordered flex items-center gap-2 ">
        {icon}
        <input value={value} onChange={(e)=>onchange!(e)} type={type} className="grow" placeholder={placeholder} />
        {icon_2}
    </label>
  )
}

export default Input