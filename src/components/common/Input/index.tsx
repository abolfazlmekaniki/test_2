import { ReactElement } from "react"

interface props{
    placeholder:"Name"|"Password",
    icon?:JSX.Element,
    type?:"text"|"password",
    icon_2?:ReactElement
}

const Input:React.FC<props> = ({placeholder,icon,type="text",icon_2}) => {
  return (
    <label className="input input-md input-bordered flex items-center gap-2 ">
        {icon}
        <input type={type} className="grow" placeholder={placeholder} />
        {icon_2}
    </label>
  )
}

export default Input