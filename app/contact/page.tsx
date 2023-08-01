"use client"

import { useEffect, useState } from "react"

function Contact() {
  const [mousePointer, setMousePointer] = useState({x:0,y:0})
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(true);
  }, [])
  
  const handle =(e: any): void=>{
    setMousePointer({x:e.clientX , y:e.clientY})
    
  }
  return (
    <div className='min-h-[80vh] flex flex-col justify-between '>
      <div  onMouseMove={(e)=>handle(e)} className='flex justify-center flex-1 w-fit mx-auto'>
        <h1 className='text-[7.3vw] font-bold cursor-pointer hover:text-blue-600 transition-all'> FACEBOOK</h1>
        <div style={{top:mousePointer.y ,left:mousePointer.x ,position:"absolute" }} className={`${state == true ? "active": ""} target`}>F</div>
      </div>
      <div  className='flex justify-center flex-1'>
        <h1 className='text-[7.3vw] font-bold cursor-pointer hover:text-orange-400 transition-all'> INSTAGRAM</h1>
      </div>
      <div  className='flex justify-center flex-1'>
        <h1 className='text-[7.3vw] font-bold cursor-pointer hover:text-red-700 transition-all'> YOUTUBE</h1>
      </div>
      <div  className='flex justify-center flex-1'>
        <h1 className='text-[7.3vw] font-bold cursor-pointer hover:text-sky-400 transition-all'> TWITTER</h1>
      </div>
    </div>
  )
}

export default Contact
