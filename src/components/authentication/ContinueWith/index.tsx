import {Google} from '../../../../public/assets/icon/Authentication/Google'
import {FaceBook} from '../../../../public/assets/icon/Authentication/Facebook'
import {Apple} from '../../../../public/assets/icon/Authentication/Apple'
const ContinueWith = () => {
  return (
    <main className="flex flex-col justify-center space-y-7 items-center">
        <div className="flex justify-center items-center space-x-3">

             <a href='/'  className="w-12 bg-white h-12 rounded-full flex items-center justify-center">{Google}</a>   
             <a href='/' className="w-12  bg-white h-12 rounded-full flex items-center justify-center">{Apple}</a> 
             <a href='/' className="w-12  bg-white h-12 rounded-full flex items-center justify-center">{FaceBook}</a> 
        </div>
        <h2 className='text-xs sm:text-base'>Don't have an account ? <a href="/" className='font-sora_semibold text-[14px]'>Sign up</a></h2>
    </main>
  )
}

export default ContinueWith