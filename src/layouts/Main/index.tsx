import { ReactElement, ReactNode } from "react"

interface props{
    children1?:ReactElement,
    children2?:ReactNode,
    text?:string,
    hr?:boolean
}
const Layout:React.FC<props> = ({children1,children2,text="or",hr=true}) => {
  return (
        <main className="bg-gradient-to-b  min-h-screen py-14 flex flex-col  space-y-10 overflow-x-hidden justify-start items-center w-screen  bg-bg_pink drop-shadow-2xl">
            {children1}
            {hr && <div className="flex space-x-2 justify-between items-center">
                <div className="w-20 h-[1px] bg-hr_bg_color"></div>
                <h2 className="font-sora_semibold">{text}</h2>
                <div className="w-20 h-[1px] bg-hr_bg_color"></div>
            </div>}
            {children2}
        </main>    
  )
}

export default Layout