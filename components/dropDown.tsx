"use client"
import Link from 'next/link'
import Image from 'next/image'
import  {useState}  from 'react'
function DropDown() {
  const [state, setState] = useState(false);
  const handleClick =()=>{
    setState(!state)
  }
  return (
    <div className="md:hidden">
    <div className="icon" onClick={handleClick}></div>
    <nav className={ `${ state== true? "active" :""} inline-flex md:hidden p-4 rounded-md menu  flex-col items-center justify-between gap-5`}>
      <ul className='flex items-center flex-col justify-center gap-3'>   
        <li className=' font-semibold text-lg hover:text-black text-gray-700'><Link href="/about" >About</Link></li>
        <li className=' font-semibold text-lg hover:text-black text-gray-700'><Link href="/contact" >Contact</Link></li>
        <li className=' font-semibold text-lg hover:text-black text-gray-700 btn'><Link href="/follow" >Follow</Link></li>
      </ul>
      <div className="">
        <Link href="/">
          <Image
            src="/logo.png"
            alt='logo image'
            loading='lazy'
            width={200}
            height={60}
            className='object-contain '
            >            
          </Image>
        </Link>
      </div>
    </nav>
  </div>
  )
}

export default DropDown
