import Button from "../common/Button"

const TurnOnBluetooth = () => {
  return (
    <main className="w-full flex flex-col px-4 max-w-[361px] justify-center items-center space-y-2">
        <img className="mb-5" src="../../../public/assets/images/iPhone 15 Pro.png" alt="iPhone 15 pro image " />
        <h3 className="font-sora_bold">Turn on Bluetooth</h3>
        <h4>Start searching for devices</h4>
        <Button value="Trun on now" />
    </main>
  )
}

export default TurnOnBluetooth