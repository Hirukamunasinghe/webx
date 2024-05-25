import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wave from '../assets/wave.png'
import '../index.css'
import Button from "../components/Button";
import Footer from "./Footer";
import withIntersectionObserver from "../components/withIntersectionObserver";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";



const About =() =>{
    return(
        <div>
            <div className="aboutDiv">
                <Navbar/>
                <div className="flex flex-col items-center mt-[50px]">
                    {/* heading div */}
                    <div className="headingintro flex gap-[10px]">
                    <h1 className="text-7xl text-subColor font-bold">HELLO!</h1>
                    <img src={wave} className="h-[75px]"/>
                    </div>
                    {/* intro div */}
                    <div className="introdiv border-2  rounded-md border-customPurple h-[480px] lg:h-[450px] mt-[40px]">
                        <p className="text-left lg:text-center  p-[50px] text-md lg:text-3xl lg:leading-loose text-customPurple" >
                        <span className="font-bold">Welcome to WebX</span>, where innovation meets expertise.<br/> 
                        We specialize in crafting exceptional web solutions tailored to meet your unique needs.<br/>
                        Our services encompass Website Design, Website Development and Portfolio Site Development<br/>
                        We believe that a powerful online presence is crucial for success in today’s digital world.<br/>
                        Let WebX transform your vision into a dynamic and engaging online reality.
                        </p>
                        <div className="btn flex justify-center">
                            <Link to="/contact">
                            <Button backgroundColor="bg-white" color="text-black">GET IN TOUCH</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-[56px]">
                <Footer/>
                </div>
            </div>
        </div>
    )
}

export default withIntersectionObserver(About);