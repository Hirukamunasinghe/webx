import React from "react";
import Button from "./Button";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Logo from '../assets/webxlogo.png'



const Navbar =() =>{
    return(
        <nav className="flex relative justify-between h-[80px] bg-customPurple text-customWhite pt-[30px] z-10 w-full">
            <div className="logo-div">
                <img src={Logo} className="h-[170px] mt-[-65px]"/>
            </div>
            <div className="listDiv">
                <ul className="flex gap-[50px] font-bold ml-[140px]">
                    <a href="#services"><li className="hover:text-purple-700 transition duration-2000 ease-in-out text-lg">SERVICES</li></a>
                    <Link to='/about'>
                    <a href=""><li className="hover:text-purple-700 transition duration-2000 ease-in-out text-lg">ABOUT US</li></a>
                    </Link>
                    <a href="#tech"><li className="hover:text-purple-700 transition duration-2000 ease-in-out text-lg">TECHNOLOGIES</li></a>
                    <a href=""><li className="hover:text-purple-700 transition duration-2000 ease-in-out text-lg">CAREERS</li></a>
                </ul>
            </div>
            <div className="btnDiv mr-[60px] mt-[-12px]">
                <Link to='/contact'>
                <Button color='text-black'>REACH US</Button>
                </Link>
            </div>
        </nav>
    )

}

export default Navbar;