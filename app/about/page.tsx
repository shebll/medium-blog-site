import React from 'react'

function About() {
  return (
    <div className='min-h-[80vh]'>
      <div className="text-center py-8 flex justify-center items-center flex-col border-b-[2px] border-b-slate-950">
        <h1 className='text-[7.3vw] font-bold'>Fuel great thinking.</h1>
        <p className='pb-4'>Become a Medium member to enjoy unlimited access and <br />
        directly support the writers you read most.</p>
        <p className='btn '> UP</p>
      </div>
      <div className='flex flex-col lg:flex-row  justify-between items-center px-4 '>
        <div className=' p-4'>
          <h1 className=' text-[4.3vw] font-medium'>Get unlimited access to every story .</h1>
          <p className='pb-4'>Become a Medium member to enjoy unlimited access and <br />
          directly support the writers you read most.</p>
        </div>
        <div className=' border-t-[2px] border-t-slate-950  lg:border-l-[2px] lg:border-l-slate-950 lg:border-t-[0px] p-4'>
          <h1 className='text-[4.3vw] font-medium'>Support the voices you want to hear more from.</h1>
          <p className='pb-4'>Become a Medium member to enjoy unlimited access and <br />
          directly support the writers you read most.</p>
        </div>
      </div>
    </div>
  )
}

export default About
