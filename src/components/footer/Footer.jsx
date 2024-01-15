import React from 'react'
import { MdOutline60Fps } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { BsGoogle , BsTelegram , BsWhatsapp , BsFacebook , BsGithub , BsCCircleFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='pb-[2rem] lg:py-[3rem] mt-[2rem]'>
    <div className='border-t-[2px] border-b-[2px] border-b-sky  border-t-sky rounded-b-[10px]
    rounded-t-[10px] flex flex-col justify-start items-center text-sky shadow-sm
    lg:flex-row lg:justify-between lg:flex-wrap lg:items-center lg:px-[3rem] '>

   <div className='flex lg:flex-row justify-between items-center w-full flex-col'>
   <div className="flex items-center mt-[1rem]">
   <MdOutline60Fps className="text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[95px]" />
   <p className="text-[25px] lg:text-[35px] xl:text-[40px] 2xl:text-[80px] font-logo">
     Wallepers
   </p>
 </div>

 <div className='mt-[1rem] flex flex-col justify-start items-center lg:text-[20px] 2xl:text-[50px] 
 2xl:leading-[65px] lg:items-start font-link leading-7 '>
 <Link to="/about" className='hover:underline'>About Author</Link>
 <p>address : Herat Afghanistan</p>
 <p>author : E.Mohammad Poorya Khoshbin</p>
 </div>
   </div>

  <div className='flex lg:flex-row justify-between w-full items-center pb-[1rem] flex-col'>
  <div className='flex justify-evenly items-center w-full mt-[2rem] lg:w-[30%] text-[20px] 2xl:text-[40px]'>
  <a href="https://www.pooryakhoshbin@gmail.com" className='hover:text-white'>< BsGoogle /></a>
  <a href="https://t.me/MohammedPooryaKhoshbin" className='hover:text-white'>< BsTelegram /></a>
  <a href="#" className='hover:text-white'>< BsWhatsapp /></a>
  <a href="#" className='hover:text-white'>< BsFacebook /></a>
  <a href="https://github.com/PooryaKhoshbin1999" className='hover:text-white'>< BsGithub /></a>
</div>

<div className='flex justify-evenly items-center mt-[2rem] mb-[1rem] font-link lg:justify-start 
lg:pt-[1rem] lg:pr-[5.3rem] 2xl:mr-[18rem] 2xl:text-[30px]'>
  <BsCCircleFill className='mr-[5px] ' /><p>All rights reserved by 60Wallepers</p>
</div>
  </div>

    </div>
    </div>
  )
}

export default Footer
