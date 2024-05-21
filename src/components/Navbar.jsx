import React from "react";
import Button from "./Button";


const Navbar =() =>{
    return(
        <nav className="flex relative justify-between h-[80px] bg-customPurple text-customWhite pt-[30px] z-10 w-full">
            <div className="logo-div">
                <h1 className="text-4xl mt-[-9px] ml-[60px]">WEBX</h1>
            </div>
            <div className="listDiv">
                <ul className="flex gap-[50px] font-bold ml-[140px]">
                    <a href=""><li className="hover:text-purple-700 transition duration-2000 ease-in-out text-lg">SERVICES</li></a>
                    <a href=""><li className="hover:text-purple-700 transition duration-2000 ease-in-out text-lg">ABOUT US</li></a>
                    <a href=""><li className="hover:text-purple-700 transition duration-2000 ease-in-out text-lg">TECHNOLOGIES</li></a>
                    <a href=""><li className="hover:text-purple-700 transition duration-2000 ease-in-out text-lg">CAREERS</li></a>
                </ul>
            </div>
            <div className="btnDiv mr-[60px] mt-[-12px]">
                <Button color='text-black'>Reach Us</Button>
            </div>
        </nav>
    )

}

export default Navbar;