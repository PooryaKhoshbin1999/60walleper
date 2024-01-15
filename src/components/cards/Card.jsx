import React from "react";
import { BsDownload, BsClipboardCheck } from "react-icons/bs";

const Card = ({ catg, name, source, image, setImage, display, setDisplay ,Cname }) => {
  const name1 = source.split("/").pop();
  const index = name1.indexOf('.');
 const name2 = name1.slice(0 , index+1);
  const file_url = `http://localhost:3000/${name2}`;

  const downloadFileAtURL = (url) => {
    console.log(name2);
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();

        const a = fileName.indexOf(".");
        const fileName1 = fileName.slice(0, a);
        const rightFileName = `${fileName1}.jpg`;

        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", rightFileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div
      className="flex flex-col justify-start items-center w-full my-[1rem] h-[370px] bg-bg border-sky border-l-[2px]
   border-r-[2px] shadow-md rounded-[15px] md:w-[40%] lg:w-[30%] 2xl:my-[3rem] 2xl:w-[23%] hover:scale-105 transition-all"
    >
      <img
        src={source}
        alt="hello"
        onDoubleClick={() => {
          setImage(source);
          setDisplay(true);
        }}
        className="w-full rounded-t-[13px] h-[280px] border-b-[2px] border-sky object-cover 
      lg:opacity-70  hover:opacity-100 transition-all cursor-pointer"
      />
      <div className="flex justify-between items-center w-full px-[10px] xl:px-[30px] 2xl:px-[50px] mt-[1rem]">
        <a href={`${Cname}.jpg`} download={Cname}
          className="flex justify-start items-center p-[10px] border-[2px] border-sky rounded-[10px] text-sky
         cursor-pointer hover:bg-sky hover:text-bg transition-all"
         
        >
          <BsDownload />
          <p className="ml-[5px]">Download</p>
        </a>
        <div className="flex justify-end items-center p-[10px] border-t-[2px] border-b-[2px] border-sky rounded-[10px] text-sky">
          <BsClipboardCheck />
          <p className="ml-[5px]">{catg}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
