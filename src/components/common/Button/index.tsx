
interface props{
    value:string
}

const Button:React.FC<props> = ({value}) => {
  return (
    <button className="btn font-sora_med max-w-[361px] rounded-3xl bg-btn_yellow hover:bg-btn_orange">{value}</button>
  )
}

export default Button