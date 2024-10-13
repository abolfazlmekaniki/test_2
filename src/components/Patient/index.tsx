import CreatePatientForm from "../CreatePatientForm"

const Patient = () => {
  return (
    <main className="flex flex-col px-3 h-full justify-start  items-center space-y-8">
    <div className="flex flex-col space-y-3 justify-start items-center">
        <h1 className="font-sora_reg text-[28.8px] ">Create Patient</h1>
        <h6 className="font-sora_reg text-secondery_text text-center text-[14px] sm:text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </h6>
    </div>
    <CreatePatientForm/>
</main>
  )
}

export default Patient