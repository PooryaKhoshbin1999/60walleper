import React, { useState } from "react";
import {
  MdOutline60Fps,
  MdSearch,
  MdHome,
  MdOutlinePlaylistAddCheck,
  MdOutlinePlaylistRemove,
} from "react-icons/md";
import { photos } from "../../constant";
import { Link } from "react-router-dom";

const Header = ({ naming, setNaming , message , setMessage }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [item , setItem] = useState('')
  return (
    <div
      className="flex justify-between items-center text-sky py-[1rem] fixed right-0 top-0
    left-0 bg-bg px-[20px] md:px-[65px] lg:px-[85px] rounded-b-[35px] md:rounded-b-[50px] 
    lg:rounded-b-[75px] xl:rounded-b-[100px] border-b-[2px] border-b-sky z-[10] shadow-md"
    >
      <div className="flex items-center">
        <MdOutline60Fps className="text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[95px]" />
        <p className="text-[25px] lg:text-[35px] xl:text-[40px] 2xl:text-[80px] font-logo">
          Wallepers
        </p>
      </div>

      <div className="md:flex justify-between items-center hidden w-[300px] 2xl:w-[600px]">
        <MdSearch onClick={handleSearch}
          className="w-[10%] p-1 rounded-[3px] text-[37px] cursor-pointer 2xl:text-[75px]
      hover:border-[2px] border-sky text-sky"
        />
        <input
          type="search"
          placeholder="Search an image"
          onChange={(e) => {
            setItem(e.target.value.toLocaleLowerCase());
          }}
          className="py-[5px] px-[10px] 2xl:py-[15px] 2xl:px-[25px] 2xl:text-[30px] w-[88%] bg-bg border-[2px] border-sky rounded-[5px] 
      font-sans text-sky outline-none "
        />
      </div>

      <div className="text-[30px] lg:hidden">
        {menuStatus ? (
          <MdOutlinePlaylistRemove onClick={() => setMenuStatus(false)} />
        ) : (
          <MdOutlinePlaylistAddCheck onClick={() => setMenuStatus(true)} />
        )}
      </div>

      <div className="hidden lg:flex justify-evenly items-center font-link text-[18px] 2xl:text-[35px]">
        <Link to="/" className="mr-[7px] xl:mr-[15px] 2xl:mr-[25px]">
          <MdHome className="" />
        </Link>
        <Link to="/cars" className="mr-[7px] xl:mr-[15px] 2xl:mr-[25px]">
          Cars
        </Link>
        <Link to="/animation" className="mr-[7px] xl:mr-[15px] 2xl:mr-[25px]">
          Animations
        </Link>
        <Link to="/animal" className="mr-[7px] xl:mr-[15px] 2xl:mr-[25px]">
          Animals
        </Link>
        <Link to="/specific" className="">
          Specific
        </Link>
      </div>

      <div
        className={`flex lg:hidden flex-col absolute bg-bg text-sky top-[72px] right-0
   w-full md:w-[300px] h-[87vh] md:h-[60vh] justify-start items-center font-link p-[40px] 
   ${
     menuStatus ? "flex" : "hidden"
   } transition-all md:rounded-[20px] md:border-b-[2px] md:border-l-[2px] border-sky `}
      >
        <Link to="/" className="mb-[30px]">
          <MdHome className="" />
        </Link>
        <Link to="/cars" className="mb-[30px]">
          Cars
        </Link>
        <Link to="/animation" className="mb-[30px]">
          Animations
        </Link>
        <Link to="/animal" className="mb-[30px]">
          Animals
        </Link>
        <Link to="/specific" className="mb-[30px]">
          Specific
        </Link>
        <div className="flex justify-between items-center md:hidden">
          <MdSearch className="mr-[10px] text-[32px] hover:border-[2px] border-sky p-1
           rounded-[3px] " onClick={()=>{ setNaming(item) }} />
          <input
            type="search"  onChange={(e) => { setItem(e.target.value.toLocaleLowerCase()) }}
            className="py-[3px] px-[9px] rounded-[5px] bg-bg 
     text-sky border-sky border-[2px] font-sans outline-none"
            placeholder="Search an image"
          />
        </div>
      </div>
    </div>
  );

  function handleSearch () {
    let match = 0;
    for(let i = 0 ; i < photos.length ; i++){
      if(photos[i].name == item){
        match++;
      }
    }
    if(match == 0){
      setMessage(true)
    }
    setNaming(item)
  }
};

export default Header;
