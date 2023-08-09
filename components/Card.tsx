import { Post } from '@/types/post'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type props = {
  post :Post
}
function Card({post}: props) {
  return (
      <Link href={`posts/${post.slug}`} className='card'>      
        <div className="image">
          <Image src={post.image} width={600} height={320} alt='post image' className='object-contain'/>
        </div>
        <div className="info flex gap-8 px-3 justify-between items-center pb-3">
          <div className="">
            <h1 className='font-semibold text-lg'>{post.title}</h1>
            <p  className='text-gray-500' >{post.description}</p>
          </div>
          <div className="flex flex-col gap-2 p-4 justify-between items-center">
            <Image src={post.author.authorImage} width={60} height={60} alt='author image' className='rounded-full' />
            <h1 className='uppercase font-bold'>{post.author.name}</h1>
          </div>
        </div>
      </Link>
  )
}

export default Card
