import React from 'react'
import Layout from '../../layouts/Main'
import TurnOnBluetooth from '../../components/TurnOnBluetooth'
import Devices from '../../components/common/Devices'

const ConnectDevice = () => {
  return (
    <Layout children1={<TurnOnBluetooth/>} children2={<Devices/>}/>
  )
}

export default ConnectDevice