import React, { useState } from 'react'
import { BsX } from 'react-icons/bs'

const ImageContainer = ({image , setImage , display , setDisplay}) => {
    
  return (
    <div className={`fixed mt-[0.5rem] px-[15rem] py-[0.5rem] bg-bg z-20 border-[2px] border-sky rounded-[30px] 
     lg:${ display ? 'flex' : 'hidden'} transition-all shadow-md hidden `}>
        <BsX  className='absolute top-[10px] left-[10px] text-[40px] text-sky cursor-pointer hover:text-red-800 transition-all'
        onClick={()=>{setDisplay(false)}} />
      <img src={image} alt="" className="w-[600px] rounded-[30px] "  />
    </div>
  )
}

export default ImageContainer
