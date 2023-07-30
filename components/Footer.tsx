import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className=' bg-yellow-400 py-4 border-b-neutral-950 border-b-[2px]'>
      <footer className='container flex justify-center items-center flex-col mx-auto px-2 text-base '>
        <div className='flex gap-4 justify-center items-center pb-4 '>
          <Link href="/">
            <Image
              src="/logo.png"
              alt='logo image'
              loading='lazy'
              width={200}
              height={60}
              className='object-contain rounded-lg '
              >            
            </Image>
          </Link>
          <nav className='hidden md:block'>
            <ul className='flex gap-2 items-center'> 
              <li className=' font-semibold  hover:text-black text-gray-700'><Link href="/about" >About</Link></li>
              <li className=' font-semibold  hover:text-black text-gray-700'><Link href="/contact" >Contact</Link></li>
              <li className=' font-semibold  hover:text-black text-gray-700 btn'><Link href="/follow" >Follow</Link></li>
            </ul>
          </nav>
        </div>
        <div className="font-bold text-gray-700 text-sm">Created at 7/30/2023 </div>
        <div className="font-bold text-gray-700 text-sm">Copy Rights SHEBLL </div>
      </footer>
    </div>
  )
}

export default Footer
