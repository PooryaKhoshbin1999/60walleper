import React from "react";
import { photos } from "../constant";
import Card from "../components/cards/Card";
import Information from "../components/information/Information";

const Home = ({ naming, setNaming , image , setImage , display , setDisplay , message , setMessage}) => {
  let i = 0;
  const filterdArray = photos.filter((photo) => {
    let item = null;
    
      if (photo.name === naming) {
        item = photo;
      } 
      

    return item;
  });

  function WhichArray() {
    if (filterdArray.length === 0) {
      return photos;
    } else {
      return filterdArray;
    }
  }

  return (
    <div>
      <div className=" pt-[60px] md:pt-[80px] xl:pt-[100px] 2xl:pt-[170px]">
          <Information />
      </div>
      <div
        className="flex flex-wrap justify-evenly items-center w-full">
        {WhichArray().map((photo) => (
          <Card catg={photo.category} name={photo.name} source={photo.src} image={image} 
          setImage={setImage} display={display} setDisplay={setDisplay} Cname={photo.cname} />
        ))}
      </div>
    </div>
  );
};

export default Home;
