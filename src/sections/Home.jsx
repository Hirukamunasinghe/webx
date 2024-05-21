import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import '../index.css'

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-hero-pattern w-full h-[1200px]  mt-[-369px] bg-cover bg-no-repeat"></div>
      <div className="flex justify-center mt-[-780px]">
        {showText && (
          <h1 className="text-6xl text-customWhite font-bold typewriter-text">
            TRANSFORMING CONCEPTS INTO REALITY
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;