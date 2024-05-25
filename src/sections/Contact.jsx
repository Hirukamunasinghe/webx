import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import '../index.css';
import Button from "../components/Button";
import withIntersectionObserver from "../components/withIntersectionObserver";

const Contact = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="bg-sectionBg">
            <Navbar />
            <div className="contactDiv">
                <div className="card flex justify-center">
                    <div className="h-[650px] w-[350px] lg:w-[1000px] bg-hero-contact bg-cover bg-no-repeat border-2 mt-[25px] lg:flex flex-col items-center lg:items-start  gap-[10px] pl-[10px] pt-[20px]">
                        <h1 className="text-4xl text-headingColor text-center lg:text-left">CONTACT US</h1>
                        <h1 className="text-3xl text-subColor font-bold text-center lg:text-left">REACH OUT FOR A NEW PROJECT!</h1>
                        <form className="form text-white flex flex-col items-center lg:items-start mt-[20px] gap-[25px]" action="https://formsubmit.co/munasinghehiruka@gmail.com" method="POST">
                            <input className="bg-customPurple w-[300px] lg:w-[450px] h-[60px] rounded-sm pl-[10px] placeholder-white" type="text" name="name" id="name" placeholder="Name" required data-validation-required-message="Please enter your name." />
                            <input className="bg-customPurple w-[300px] lg:w-[450px] h-[60px] rounded-sm pl-[10px] placeholder-white" type="email" name="email" id="email" placeholder="Email" required data-validation-required-message="Please enter your email." />
                            <input className="bg-customPurple w-[300px] lg:w-[450px] h-[60px] rounded-sm pl-[10px] placeholder-white" type="phone" name="phone" id="phone" placeholder="Phone" data-validation-required-message="Please enter your phone number." />
                            <input className="bg-customPurple w-[300px] lg:w-[450px] h-[150px] lg:h-[180px] pl-[10px] rounded-sm pb-[120px] placeholder-white" type="text" id="text" name="message" placeholder="Message" data-validation-required-message="Please enter your message." />
                            <button type="submit" className="h-12 rounded-md font-bold hover:text-white hover:bg-purple-500 transition duration-2000 ease-in-out bg-customPurple w-48">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-[40px]">
                <Footer />
            </div>
        </div>
    );
}

export default withIntersectionObserver(Contact);
