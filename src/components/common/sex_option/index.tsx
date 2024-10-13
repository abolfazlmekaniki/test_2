import {Man} from '../../../../public/assets/icon/Man'
import {Woman} from '../../../../public/assets/icon/Woman'
interface props{
    sex:"Male"|"Female",
    active?:boolean
}

const SexOption:React.FC<props> = ({sex,active=false}) => {
    const content = sex=="Male"?
    (<>
      {Man}
      <h4>Male</h4>  
    </>
    ):(<>
        {Woman}
        <h4>Female</h4>  
    </>)
  return (
    <div className={` cursor-pointer w-full ${active?"bg-sex":"bg-white"} flex flex-col justify-center space-y-1 items-center max-w-[171px] rounded-lg h-[102px]`}>
        {content}
    </div>
  )
}

export default SexOption