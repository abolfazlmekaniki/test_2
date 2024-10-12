import { ReactElement, ReactNode } from "react"

interface props{
    children1?:ReactElement,
    children2?:ReactNode,
    text?:string
}
const Layout:React.FC<props> = ({children1,children2,text="or"}) => {
  return (
        <main className="bg-gradient-to-b flex flex-col justify-evenly items-center w-screen h-screen overflow-hidden from-bg_pink to-transparent">
            {children1}
            <div className="flex space-x-2 justify-between items-center">
                <div className="w-28 h-[1px] bg-black"></div>
                <h2 className="font-sora_bold">{text}</h2>
                <div className="w-28 h-[1px] bg-black"></div>
            </div>
            {children2}
        </main>    
  )
}

export default Layout