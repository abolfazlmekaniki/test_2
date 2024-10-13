import Patient from '../../components/Patient'
import Layout from '../../layouts/Main'

const CreatePatient = () => {
  return (
    <Layout children1={<Patient/>} hr={false}/>
  )
}

export default CreatePatient