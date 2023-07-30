import Link from 'next/link'
import Image from 'next/image'

function Hero() {
  return (
    <main className=' p-4 bg-yellow-400 border-b-2 border-black '>
      <div className='container mx-auto flex flex-col-reverse xl:flex-row justify-around items-center '>
        <div className=' flex flex-col gap-5  '>
          <h1 className='text-6xl  max-w-xl font-serif leading-[70px]'><span className='underline'>MEDIUM</span> is a place to write ,read and connect.</h1>
          <p className='text-gray-700'>it`s easy and free to post and share your thinking on any topics you need, and connect with millions of readers.</p>
        </div>
        <Image src="/hero.png" width={800} height={100} alt='hero section image' loading='lazy' className='object-contain'/>
      </div>
    </main>
  )
}

export default Hero
