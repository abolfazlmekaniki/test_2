import { useState } from 'react'
import SexOption from '../common/sex_option'

const Sex = () => {
  
  const [active,_] = useState<{Male:boolean,Female:boolean}>({Male:false,Female:false})
  
  

  return (
    <div className='w-full max-w-[361px] flex items-center justify-center space-x-4'>
        <SexOption active={true} sex='Male'/>
        <SexOption active={active.Female} sex='Female'/>
    </div>
  )
}

export default Sex