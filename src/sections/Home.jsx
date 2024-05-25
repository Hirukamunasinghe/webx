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
    setTimeout(() => {
      setShowText(true);
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="bg-hero-pattern w-full h-[700px] lg:h-[1200px] mt-[-369px] bg-cover bg-no-repeat"></div>
      <div className="flex justify-center mt-[-780px] sm:mt-[-300px]">
        {showText && (
          <h1 className="text-sm lg:text-6xl sm:text-sm text-customWhite font-bold typewriter-text mt-[100px]">
            TRANSFORMING CONCEPTS INTO REALITY
          </h1>
        )}
      </div>
      <div className="mt-[720px] sm:mt-[360px]">
        <Services/>
        <Technologies/>
        <ContactDisplay/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
