interface props{
    value:string,
    attributes?:string,
    onclick:()=>void
}

const Button:React.FC<props> = ({value,attributes,onclick}) => {
  return (
    <button type="button" onClick={onclick} className={` ${attributes} btn w-full border-none font-sora_semibold max-w-[361px] rounded-3xl bg-btn_yellow hover:bg-btn_orange `}>{value}</button>
  )
}

export default Button