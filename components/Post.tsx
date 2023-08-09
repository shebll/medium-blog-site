"use client"

import { Post } from '@/types/post';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import {useForm , SubmitHandler} from "react-hook-form"
import { useRef } from 'react';

type props ={
  post:Post ;
}
interface inputForm {
  _id:string,
  name:string,
  email:string,
  comment:string,
}
function Post({post} :props) {
  // console.log(post.comments)

  const popupRef =useRef<HTMLDivElement>(null)
  const {register,handleSubmit,formState:{errors}}=useForm<inputForm>()


  const onSubmit:SubmitHandler<inputForm> = async(data)=>{
    await fetch("/api/createComment",{
      method:"POST",
      body:JSON.stringify(data)
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    if(popupRef.current) {
      // will be type HTMLDivElement NOT HTMLDivElement | null
      const popupRefDOM = popupRef.current; 
      (popupRefDOM.classList.toggle("active"))
    }
  }
  return (
    <div className="max-w-[800px] mx-auto py-[60px]">
      <div className="">
        <Image src={post.image} alt="post image" width={1000} height={100} />
      </div>
      <div className=" border-yellow-600 border-b-2">
        <h1 className='font-bold text-4xl text-center p-4 pt-10 uppercase'>{post.title}..</h1>
        <p  className='font-semibold text-1xl p-4 pt-2 text-gray-400'>{post.description}...</p>
        <div className="p-4 flex gap-4 items-center justify-between">
          <Image src={post.author.authorImage} alt="author image" height={60} width={60} className='rounded-full'/>
          <h2 className='font-bold text-lg text-gray-600'>Blog by {post.author.name}</h2>
        </div>
        <div className="p-8">
          <PortableText 
            value={post.body}
          />
          
        </div>
      </div>
      <div className="p-4 py-6">
        <p className='text-yellow-600'>Enjoy the article</p>
        <p className='uppercase font-bold text-gray-800 text-4xl'>Leave a comment below !</p>
      </div>
      <form action="POST" className='flex flex-col gap-4 p-4 ' onSubmit={handleSubmit(onSubmit)}>
        <input {...register("_id" ,{required :true})} type="hidden" name="_id" value={post._id} />
        <label htmlFor="" className='flex flex-col gap-4 w-full '>
          <span className='text-2xl font-semibold text-gray-700'>Name: </span>
          <input  {...register("name" ,{required :true})} type="text" name="name" id="name" placeholder='Ahmed Shebbl' className='block w-full shadow border rounded py-2 px-3 form-input outline-none ring-yellow-600 focus:ring' />
        </label>
        <label htmlFor="" className='flex flex-col gap-4 w-full '>
          <span  className='text-2xl font-semibold text-gray-700'>email: </span>
          <input  {...register("email" ,{required :true})} type="email" name="email" id="email" placeholder='a.shebbl@example.com'className='block w-full shadow border rounded py-2 px-3 form-input outline-none ring-yellow-600 focus:ring' />
        </label>
        <label htmlFor="" className='flex flex-col gap-4 w-full '>
          <span className='text-2xl font-semibold text-gray-700'>Comment: </span>
          <textarea  {...register("comment" ,{required :true})} name="comment" id="comment" placeholder='Comment....' rows={8} className='block w-full shadow border rounded py-2 px-3 form-textarea outline-none ring-yellow-600 focus:ring ' />
        </label>
        <div className="flex flex-col gap-4">
          {errors.name && (<p className='text-red-600'>-The name input is required</p>) }
          {errors.email && (<p className='text-red-600'>-The email input is required</p>) }
          {errors.comment && (<p className='text-red-600'>-The comment input is required</p>) }
        </div>
        <input type="submit" value="submit" className='cursor-pointer bg-yellow-400 p-4 rounded-lg font-semibold text-lg text-gray-600 uppercase' />
      </form>
      <div className="shadow-lg rounded-lg m-4 p-8 z-0 h-[180px]">
        <h1 className='font-bold uppercase text-4xl text-orange-500 py-3'>Comments</h1>
        <hr className='bg-gray-500 h-[1.7px]' />
        {post.comments.map(comment =>(
            <div  key={comment._id} className='flex gap-4 py-4'>
              <h1 className='font-semibold text-lg text-slate-800'>{comment.name} :</h1>
              <p className='text-gray-500'>{comment.comment}</p> 
            </div>
          ))}
        <div ref={popupRef} className="popup shadow-lg rounded-lg p-8 flex flex-col text-center gap-6 items-center justify-center w-[500px]">
          <h1 className='text-slate-800 text-3xl font-bold'>Thank You !</h1>
          <p className='text-gray-500 mb-4 max-w-[90%]'>Your Comment Will Be Shown When The Blogger Approve It Thanks!</p>
          <button onClick={()=> {
            if(popupRef.current) {
              // will be type HTMLDivElement NOT HTMLDivElement | null
              const popupRefDOM = popupRef.current; 
              (popupRefDOM.classList.toggle("active"))
            }
          }} 
            className='cursor-pointer bg-yellow-400 p-4 rounded-lg font-semibold text-lg text-white  hover:bg-yellow-500 transition-all hover:shadow-2xl w-full'>OK</button>
        </div>
      </div>

  </div>
  )
}

export default Post
