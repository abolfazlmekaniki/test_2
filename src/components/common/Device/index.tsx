import { ReactNode } from 'react';
import { GoChevronRight } from "react-icons/go";

interface props{
  icon:ReactNode,
  text:string
}
const Device:React.FC<props> = ({icon,text}) => {
  return (
    <div className="w-full max-w-[361px] px-4 h-20 rounded-lg flex items-center justify-start bg-white">
      {icon}
      <div className='flex flex-col ml-3 justify-center space-y-1 items-start'>
        <h4 className='font-sora_lig text-xs sm:text-sm'>{text}</h4>
        <h6 className='font-sora_lig text-xs'>Saved</h6>
      </div>
      <a href="/" className='w-5 ml-auto bg-gray h-5 rounded-full flex items-center justify-center'>
        <GoChevronRight/>
      </a>
    </div>
  )
}

export default Device