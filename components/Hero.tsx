import Link from 'next/link'
import Image from 'next/image'


function Hero() {
  // let x= ""
  // const vedioData = fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=SU8CIjgyKmI&key=AIzaSyCke5qO8Si9nFcn5_fk4t6MW2rJVjMZZNU").then((res)=>{
  //   return res.json()
  // }).then((data)=>{
  //   console.log(data.items[0].id)
  //   x=data.items[0].id 
  // })
  return (
    <main className=' p-4 bg-yellow-400 border-b-2 border-black '>
      <div className='container mx-auto flex flex-col-reverse xl:flex-row justify-around items-center '>
        <div className=' flex flex-col gap-5  '>
          <h1 className='text-6xl  max-w-xl font-serif leading-[70px]'><span className='underline'>MEDIUM</span> is a place to write ,read and connect.</h1>
          <p className='text-gray-700'>it`s easy and free to post and share your thinking on any topics you need, and connect with millions of readers.</p>
        </div>
        <div className="">  
        <iframe id="player" type="text/html" width="840" height="490"
          src="https://www.youtube.com/embed/asFa8_2EeVM"
          frameborder="0"></iframe>       
        </div>
        {/* <Image src="/hero.png" width={800} height={100} alt='hero section image' loading='lazy' className='object-contain'/> */}
      </div>
    </main>
  )
}

export default Hero
