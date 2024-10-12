import Devices from '../../components/common/Devices'
import DeviceDetection from '../../components/DeviceDetection'
import Layout from '../../layouts/Main'

const FindingDevice = () => {
  return (
    <Layout children1={<DeviceDetection/>} children2={<Devices/>}/>
  )
}

export default FindingDevice