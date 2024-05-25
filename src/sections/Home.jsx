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
      <div className="bg-hero-pattern w-full h-[295px] md:h-[500px] lg:h-[1200px] lg:mt-[-369px] bg-cover bg-no-repeat"></div>
      <div className="flex justify-center mt-[-270px] md:mt-[-400px] lg:mt-[-780px] sm:mt-[-300px]">
        <div className={`text-sm md:text-xl lg:text-6xl text-left lg:text-center lg:pt-[0px] text-customWhite font-bold typewriter-text transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          TRANSFORMING CONCEPTS INTO REALITY
        </div>
      </div>
      <div className="mt-[240px] lg:mt-[720px] sm:mt-[360px]">
        <Services/>
        <Technologies/>
        <ContactDisplay/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
