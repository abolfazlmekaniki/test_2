// import {Ring} from '../../../../public/assets/icon/Ring'
import { LiaRingSolid } from "react-icons/lia";
import {Heart} from '../../../../public/assets/icon/Heart'
import Device from '../Device'

const Devices = () => {
  return (
    <main className='w-full max-w-[361px] space-y-2 flex flex-col px-4 items-center justify-evenly'>
        <h4 className='font-sora_bold '>Select other devices</h4>
        <Device icon={Heart} text='Cuff XYZ'/>
        <Device icon={<LiaRingSolid className="w-[41px] h-[41px]"/>} text='Smart Ring B'/>
        <Device icon={Heart} text='Cuff XYZ'/>
        <Device icon={Heart} text='Cuff XYZ'/>
    </main>
  )
}

export default Devices