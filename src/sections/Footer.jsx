import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import { faFacebookSquare } from "@fortawesome/fontawesome-free-brands";
import { faYoutube } from "@fortawesome/fontawesome-free-brands";
import { faTwitter } from "@fortawesome/fontawesome-free-brands";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import withIntersectionObserver from "../components/withIntersectionObserver";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () =>{
    return (
        <footer className="lg:relative bottom-[0px] md:relative w-full">
            <div className="bg-customPurple h-[175px]">
                <div className="icons flex justify-center gap-[50px]  pt-[20px] pb-[20px] ">
                    <a href=""><FontAwesomeIcon icon={faInstagram} className="h-[30px] text-yellow-200"/></a>
                    <a href=""><FontAwesomeIcon icon={faFacebookSquare} className="h-[30px] text-blue-700"/></a>
                    <a href=""><FontAwesomeIcon icon={faYoutube} className="h-[30px] text-red-500"/></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter} className="h-[30px] text-blue-500"/></a>
                </div>
                <div className="flex justify-center">
                <p className="flex gap-[10px]  pb-[20px]  text-white"><FontAwesomeIcon className="pt-[2px]" icon={faPhone}/> | (+94) 76 219 3001</p>
                </div>
                <p className="text-customWhite  text-center">Copyright <FontAwesomeIcon icon={faCopyright}/> 2024 All Rights Reserved<br/> Site by Hiruka Munasinghe</p>
            </div>
        </footer>
    )
}

export default withIntersectionObserver(Footer);