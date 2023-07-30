import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div className='bg-white py-4 border-b-neutral-950 border-b-[2px]'>
      <header className='container flex justify-between items-center mx-auto px-2'>
        <div className='flex gap-4 justify-center items-center '>
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
          <nav className='hidden md:block'>
            <ul className='flex gap-2 items-center'> 
              <li className=' font-semibold text-lg hover:text-black text-gray-700'><Link href="/about" >About</Link></li>
              <li className=' font-semibold text-lg hover:text-black text-gray-700'><Link href="/contact" >Contact</Link></li>
              <li className=' font-semibold text-lg hover:text-black text-gray-700 btn'><Link href="/follow" >Follow</Link></li>
            </ul>
          </nav>
        </div>
        <div className=' flex gap-2'>
          <button className='btn sec'>Sign In</button>
          <button className='btn prim'>Get Stated</button>
        </div>
      </header>
    </div>
  )
}

export default Header