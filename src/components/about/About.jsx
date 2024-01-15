import React, { useState } from "react";
import poorya from "../../assets/Poorya.jpg";
import firstProject from "../../assets/first.JPG";
import secondProject from "../../assets/second.JPG";
import thirdProject from "../../assets/third.JPG";
import {
  FaReact,
  FaGitAlt,
  FaCss3,
  FaHtml5,
  FaJs,
  FaGithub,
} from "react-icons/fa6";
import {
  BsTelegram,
  BsWhatsapp,
  BsGithub,
  BsFacebook,
  BsGoogle,
} from "react-icons/bs";

let i = 0;

const About = () => {
  const [rote , setRote] = useState(i);
  return (
    <div className="pt-[6rem] flex flex-col justify-evenly items-center lg:pt-[8rem] 2xl:pt-[16rem]">
      <div className="flex flex-col md:flex-row md:justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src={poorya}
            alt="author"
            className="w-[70%] xl:w-[450px] 2xl:w-[700px] border-[2px] border-sky rounded-[20px] shadow-md"
          />
          <div className="flex justify-start ml-[1rem] items-center mt-[2rem] ">
            <p className="text-[30px] text-sky font-link">E. Poorya Khoshbin</p>
          </div>
        </div>

        <div className="xl:ml-[6rem]">

          <div className="mt-[2rem] flex flex-col justify-center items-center">
            <p className="text-[20px] xl:text-[40px] text-sky font-link">Abilities</p>
          </div>

          <div className={`w-[290px] bg-sky h-[290px] rounded-full flex justify-center items-center relative mt-[1rem]`}>
            <div
              className="w-[190px] h-[190px] bg-bg rounded-full flex justify-center items-center z-10 
      text-sky font-link text-[45px]"
            >
              React
              <FaReact />
            </div>

            <div
              className="w-[145px] h-[145px] bg-blue-500 absolute top-0 right-0 rounded-tr-full
      flex justify-center items-center font-link text-[25px] "
            >
              <p className="rotate-45 flex justify-center items-center mb-[1.4rem] ml-[1.4rem]">
                <p className="">Css</p>
                <FaCss3 className="rotate-[10deg] mt-[0.6rem]" />
              </p>
            </div>

            <div
              className="w-[145px] h-[145px] bg-yellow-500 absolute bottom-0 right-0 rounded-br-full
      flex justify-center items-center font-link text-[25px]"
            >
              <p className="rotate-[-45deg] flex justify-center items-center mt-[1rem] ml-[1rem]">
                <p className="rotate-[13deg] mb-[0.5rem]">Javas</p>
                <p className="rotate-[-5deg]">cript</p>
                <FaJs className="rotate-[-10deg] mb-[0.3rem]" />
              </p>
            </div>

            <div
              className="w-[145px] h-[145px] bg-orange-600 absolute top-0 left-0 rounded-tl-full
      flex justify-center items-center font-link text-[25px] "
            >
              <p className="rotate-[-45deg] flex justify-center items-center mb-[1.4rem] mr-[1.4rem]">
                <p className="rotate-[-7deg]">HTML</p>
                <FaHtml5 className="rotate-[10deg]" />
              </p>
            </div>

            <div
              className="w-[145px] h-[145px] bg-red-700 absolute bottom-0 left-0 rounded-bl-full
      flex justify-center items-center font-link text-[25px]"
            >
              <p className="rotate-[45deg] flex justify-center items-center relative">
                <p className="rotate-[20deg]">Git</p>
                <FaGitAlt className="rotate-[30deg] mt-[1.2rem]" />
                <p className="rotate-[-3deg] mt-[1.7rem]">&Git</p>
                <p className="rotate-[-13deg] mt-[1rem]">hub</p>
                <FaGithub className="rotate-[-25deg] mb-[0.5rem]" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-full text-sky mt-[2rem] lg:w-[30%] text-[20px] 
      xl:text-[30px] 2xl:text-[40px] 2xl:mt-[7rem]">
        <a
          href="https://www.pooryakhoshbin@gmail.com"
          className="hover:text-white"
        >
          <BsGoogle />
        </a>
        <a
          href="https://t.me/MohammedPooryaKhoshbin"
          className="hover:text-white"
        >
          <BsTelegram />
        </a>
        <a href="#" className="hover:text-white">
          <BsWhatsapp />
        </a>
        <a href="#" className="hover:text-white">
          <BsFacebook />
        </a>
        <a
          href="https://github.com/PooryaKhoshbin1999"
          className="hover:text-white"
        >
          <BsGithub />
        </a>
      </div>

      <div className="mt-[2rem] flex justify-center items-center flex-col 2xl:mt-[5rem]">
        <p className="text-[30px] text-sky font-link">Our Projects</p>
       <div className="md:flex md:flex-row md:flex-wrap md:justify-evenly md:items-center 2xl:mt-[5rem]">
       <a
       href="https://PooryaKhoshbin1999.github.io/gpt3_jsm"
       className="mt-[2rem] md:mt-[rem] md:w-[45%]"
     >
       <img src={secondProject} alt="link" className="rounded-[25px] shadow-md"/>
     </a>

     <a
       href="https://PooryaKhoshbin1999.github.io/gerich-restaurant"
       className="mt-[1rem] md:w-[45%] md:mt-[2rem]"
     >
       <img src={firstProject} alt="link" className="rounded-[25px] shadow-md"/>
     </a>

     <a
       href="https://PooryaKhoshbin1999.github.io/modern_bank_app"
       className="mt-[1rem] md:w-[45%] md:mt-[2rem]"
     >
       <img src={thirdProject} alt="link" className="rounded-[25px] shadow-md" />
     </a>
       </div>
      </div>
    </div>
  );
};

export default About;
