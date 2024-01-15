import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

const Error = ({message , setMessage}) => {
  return (
    <div className={`fixed z-10 bg-bg w-[280px] dm:w-[350px] 
    md:h-[200px] md:top-[20%] md:left-[35%] border-[2px] border-sky py-[4rem] px-[1rem] xl:w-[440px] 2xl:w-[700px] 2xl:h-[400px]
    rounded-[20px] ${message ? 'block' : 'hidden'} shadow-md`}>
        <BsArrowLeft className='absolute top-[15px] left-[15px] text-[25px]  rounded-[5px] cursor-pointer 2xl:text-[45px]
        text-bg bg-sky hover:bg-red-700 transition-all' onClick={()=>{setMessage(false)}}/>
      <p className='text-red-700 text-[25px] xl:text-[30px] 2xl:text-[50px] 2xl:mt-[5rem] font-link'>
      Error : the image not found</p>
    </div>
  )
}

export default Error
