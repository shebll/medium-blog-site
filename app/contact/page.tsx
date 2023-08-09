"use client"
import { useEffect, useState } from "react"
import {MotionProps, Variants, motion} from "framer-motion"
function Contact() {
  const [mousePointer, setMousePointer] = useState({x:0,y:0})
  const [style, setStyle] =useState("default")
  const variants :Variants = {
    default:{
      x: mousePointer.x -20,
      y:mousePointer.y-20
    },
    text:{
      height:150,
      width:150,
      x: mousePointer.x -50,
      y:mousePointer.y-50 ,
      backgroundColor:"black" ,
      mixBlendMode: "difference"
    }
  }

  function  textEnter() :void{
    setStyle("text")
  }
  function textLeave():void{
    setStyle("default")

  }

  useEffect(() => {    
    function mouseFunction (e:any){
      setMousePointer({x : e.clientX , y : e.clientY})
    }
    window.addEventListener("mousemove",mouseFunction);
    return ()=>{
      window.removeEventListener("mousemove",mouseFunction);
    }
  }, [])
  
  return (
    <div className='min-h-[80vh] flex flex-col justify-between cursor-none'>
      <motion.div variants={variants} animate={style}  className="curser"></motion.div>      
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='flex justify-center flex-1 w-fit mx-auto items-center'>
        <h1 className='text-[7.3vw] font-bold  hover:text-blue-600 transition-all'> FACEBOOK</h1>
      </div>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='flex justify-center flex-1 w-fit mx-auto items-center'>
        <h1 className='text-[7.3vw] font-bold  hover:text-orange-400 transition-all'> INSTAGRAM</h1>
      </div>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave}  className='flex justify-center flex-1 w-fit mx-auto items-center'>
        <h1 className='text-[7.3vw] font-bold  hover:text-red-700 transition-all'> YOUTUBE</h1>
      </div>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave}  className='flex justify-center flex-1 w-fit mx-auto items-center'>
        <h1 className='text-[7.3vw] font-bold  hover:text-sky-400 transition-all'> TWITTER</h1>
      </div>
    </div>
  )
}

export default Contact
