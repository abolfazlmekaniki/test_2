import { useState } from "react"
import { FaRegEyeSlash } from "react-icons/fa";
import {EyeIcon} from '../../../../public/assets/icon/Authentication/Eye'
const Eye = () => {
    const [show,setShow] = useState<boolean>(false);

    return (
        <button type="button" onClick={()=>{setShow(!show)}}>{show?<FaRegEyeSlash className="text-xl"/>:EyeIcon}</button>
    )
}

export default Eye