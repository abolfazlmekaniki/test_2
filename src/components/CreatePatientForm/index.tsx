import {Cake} from '../../../public/assets/icon/Cake'
import {Calender} from '../../../public/assets/icon/Calender'
import Button from "../common/Button"
import Input from "../common/Input"
import Sex from '../Sex'

const CreatePatientForm = ():JSX.Element => {
  return (
    <form className="flex w-full flex-col p-1 h-full   space-y-4 max-w-[361px] ">
        <Input value='' placeholder="Name"  type="text"/>
        <Input value='' placeholder="Family"  type="text" />
        <Input value='' placeholder="Birthday Date" type="text" icon={Cake} icon_2={Calender} />
        <Sex/>
        <Button onclick={()=>console.log("hi")} attributes="absolute bottom-8 self-center"  value="Create"/>
    </form>
  )
}

export default CreatePatientForm