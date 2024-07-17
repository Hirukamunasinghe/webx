import React, { useEffect, useState } from "react";
import '../index.css'
import Services from "./Services";
import Technologies from "./Technologies";
import ContactDisplay from "./ContactDisplay";
import Footer from "./Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="bg-hero-pattern w-full h-[290px] lg:h-[1000px] md:h-[580px] lg:mt-[-300px] bg-cover bg-no-repeat"></div>
      <div className="flex justify-center mt-[-270px] md:mt-[-480px] lg:mt-[-670px] sm:mt-[-300px]">
        <div className={`text-sm md:text-2xl lg:text-5xl text-left lg:text-center lg:pt-[0px] text-customWhite font-bold typewriter-text transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          TRANSFORMING CONCEPTS INTO REALITY
        </div>
      </div>
      <div className="md:mt-[420px] lg:mt-[600px] mt-[230px]">
        <Services/>
        <Technologies/>
        <ContactDisplay/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
