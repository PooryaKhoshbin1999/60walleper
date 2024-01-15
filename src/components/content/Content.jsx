import React , {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Cars from "../../pages/Cars";
import Animal from "../../pages/Animal";
import Specific from "../../pages/Specific";
import Animation from "../../pages/Animation";
import ImageContainer from "../imageContainer/ImageContainer";
import Error from '../error/Error';
import About from "../about/About";

const Content = ({naming , setNaming , message , setMessage }) => {
  const [image , setImage] = useState('');
  const [display , setDisplay] = useState(false);
  
  
  return (
    <div className=" bg-bg bg-local w-full">
    <div>
      <ImageContainer  image={image} setImage={setImage} display={display} setDisplay={setDisplay}/>
    </div>
    <div>
      <Error message={message} setMessage={setMessage} />
    </div>
    <Routes>
    <Route path="/" element={<Home naming={naming} setNaming={setNaming} image={image} 
    setImage={setImage} display={display} setDisplay={setDisplay} message={message} setMessage={setMessage}/>} />
    <Route path="/cars" element={<Cars  naming={naming} setNaming={setNaming} image={image}
     setImage={setImage} display={display} setDisplay={setDisplay}/>} />
    <Route path="/animation" element={<Animation  naming={naming} setNaming={setNaming} image={image}
     setImage={setImage} display={display} setDisplay={setDisplay}/>} />
    <Route path="/animal" element={<Animal  naming={naming} setNaming={setNaming} image={image}
     setImage={setImage} display={display} setDisplay={setDisplay}/>} />
    <Route path="/specific" element={<Specific naming={naming} setNaming={setNaming} image={image}
     setImage={setImage} display={display} setDisplay={setDisplay}/>} />
     <Route path="/about" element={<About />} />
  </Routes>
    </div>
   
  );
};

export default Content;
