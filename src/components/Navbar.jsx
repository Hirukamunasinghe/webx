//imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./Button";
import Logo from '../assets/webxspherelogo.png';
import Toggle from '../assets/toggle.png';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    setToggleActive(!toggleActive);
  };

  return (
    <nav className="flex relative justify-between items-center h-[80px] bg-customPurple text-customWhite px-4 z-10 w-full">
      <div className="ml-[-15px] lg:ml-[0px]">
        <img src={Logo} className="h-[150px] ml-[-10px] md:h-[150px] lg:h-[170px] pt-[20px]" alt="Logo" />
      </div>
      <div className="flex items-center">
        {windowWidth >= 769 ? (
          <ul className="flex gap-[50px] lg:ml-[80px] font-bold">
            <a href='/webx/#services'>
              <li className="hover:text-purple-700 transition duration-200 ease-in-out text-lg">SERVICES</li>
            </a>
            <Link to='/about'>
              <li className="hover:text-purple-700  transition duration-200 ease-in-out text-lg">ABOUT US</li>
            </Link>
            <a href="/webx/#tech">
              <li className="hover:text-purple-700 transition duration-200 ease-in-out text-lg">TECHNOLOGIES</li>
            </a>
            <Link to='/projects'>
            <li className="hover:text-purple-700 transition duration-200 ease-in-out text-lg">PROJECTS</li>
            </Link>
          </ul>
        ) : (
          <div className="flex items-center">
            <img 
              className='h-[25px] cursor-pointer' 
              onClick={toggleLinks} 
              src={Toggle} 
              alt='Toggle' 
              width={30} 
              height={30}
            />
            {showLinks && (
              <ul className='flex flex-col items-center gap-6 absolute left-0 top-[80px] w-full bg-customPurple py-4'>
                <a href='/webx/#services'>
                  <li className="hover:text-purple-700 transition duration-200 ease-in-out text-lg">SERVICES</li>
                </a>
                <Link to='/about'>
                  <li className="hover:text-purple-700 transition duration-200 ease-in-out text-lg">ABOUT US</li>
                </Link>
                <a href="/webx/#tech">
                  <li className="hover:text-purple-700 transition duration-200 ease-in-out text-lg">TECHNOLOGIES</li>
                </a>
                <Link to="/projects">
                  <li className="hover:text-purple-700 transition duration-200 ease-in-out text-lg">PROJECTS</li>
                </Link>
                <Link to='/contact'>
                  <Button color='text-black'>REACH US</Button>
                </Link>
              </ul>
            )}
          </div>
        )}
      </div>
      {windowWidth >= 769 && (
        <div className="mr-4">
          <Link to='/contact'>
            <Button color='text-black'>REACH US</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
