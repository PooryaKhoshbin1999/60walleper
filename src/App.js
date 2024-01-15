import { useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";


function App() {
  const [name , setName] = useState('');
  const [message , setMessage] = useState(false);
  
  return (
    <div className="font-common  bg-bg w-full bg-fixed">
      <div className=" mx-small md:mx-medium lg:mx-large xl:mx-xlarge">
        <Header naming={name} setNaming={setName} message={message} setMessage={setMessage} />
        <Content naming={name} setNaming={setName} message={message} setMessage={setMessage} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
