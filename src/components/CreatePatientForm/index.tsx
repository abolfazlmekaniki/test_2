import {Cake} from '../../../public/assets/icon/Cake'
import {Calender} from '../../../public/assets/icon/Calender'
import Button from "../common/Button"
import Input from "../common/Input"
import Sex from '../Sex'

const CreatePatientForm = ():JSX.Element => {
  return (
    <form className="flex w-full flex-col relative h-full space-y-4 max-w-[361px] ">
        <Input placeholder="Name"  type="text"/>
        <Input placeholder="Family"  type="text" />
        <Input placeholder="Birthday Date" type="text" icon={Cake} icon_2={Calender} />
        <Sex/>
        <Button attributes="absolute bottom-10"  value="Create"/>
    </form>
  )
}

export default CreatePatientForm