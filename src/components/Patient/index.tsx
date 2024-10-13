import CreatePatientForm from "../CreatePatientForm"

const Patient = () => {
  return (
    <main className="flex flex-col px-6 h-full pt-10 justify-around items-center space-y-8">
    <div className="flex flex-col space-y-3 justify-center items-center">
        <h1 className="font-sora_reg text-2xl sm:text-3xl ">Create Patient</h1>
        <h6 className="font-sora_lig text-center text-sm sm:text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </h6>
    </div>
    <CreatePatientForm/>
</main>
  )
}

export default Patient