import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wave from "../assets/wave.png";
import "../index.css";
import Button from "../components/Button";
import Footer from "./Footer";
import withIntersectionObserver from "../components/withIntersectionObserver";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="aboutDiv">
        <Navbar />
        <div className="flex flex-col items-center mt-[50px]">
          {/* heading div2 */}
          {/* heading div */}
          <div className="headingintro flex gap-[10px]">
            <h1 className="text-7xl text-subColor font-bold">HELLO!</h1>
            <img src={wave} className="h-[75px]" />
          </div>
          {/* story card div */}
          <div className="introdiv border-2 p-[10px] mt-[20px] md:mt-[30px] lg:mt-[30px] mb-[10px] lg:mb-[0px] md:mb-[0px] lg:p-[20px] rounded-md border-customPurple w-[350px] lg:w-[1400px] md:w-[700px] md:h-[1000px] h-full lg:h-[650px]">
            <div className="storymainDiv flex flex-col items-center  lg:flex-row lg:justify-between mt-[50px] lg:ml-[20px]">
            {/* bg image */}
              <div className=" lg:mt-[20px] mt-[-60px] md:w-[700px] md:h-[500px] rounded-md bg-about-logo bg-cover bg-no-repeat w-[350px] lg:w-[450px] lg:h-[400px] h-[350px]"></div>
            {/* text  */}
              <div className="outro flex flex-col gap-[20px] pt-[20px] lg:ml-[100px]">
                <h1 className="text-2xl md:text-3xl font-bold lg:text-4xl text-purple-800 text-left">
                  WE ARE WEB DEVELOPERS
                </h1>
                <p className="text-sm lg:text-lg  leading-10 lg:leading-10 text-headingColor font-bold">
                  WEBX, established in 2024 by Hiruka Munasinghe and Abhiru
                  Wickramarachchi.
                  <br />
                  Alongside our core services in design and development, we have
                  pioneered
                  <br />
                  the creation of Portfolio Sites. These platforms serve as
                  invaluable tools
                  <br />
                  for university undergraduates and students aspiring to enter
                  the IT industry, <br />
                  offering them a competitive edge by enabling the professional
                  presentation
                  <br />
                  of their profiles. By showcasing their work in a polished
                  manner, we empower
                  <br />
                  individuals to enhance their prospects and confidence when
                  pursuing career
                  <br />
                  opportunities in software engineering and web development.
                </p>
                <div className="text-center lg:text-left">
                <Link to="/contact">
                  <Button backgroundColor="bg-white" color="text-black">
                    GET IN TOUCH
                  </Button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
      <Footer/>
      </div>
    </div>
  );
};

export default withIntersectionObserver(About);
