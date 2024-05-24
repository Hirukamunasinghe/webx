import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import '../index.css'
import Button from "../components/Button";

const Contact = () =>{
    return(
        <div className="bg-sectionBg">
            <Navbar/>
            <div className="contactDiv flex justify-center  ">
                <div className="card">
                <div className="h-[650px] w-[1000px] bg-hero-contact border-2 mt-[25px] flex flex-col gap-[10px] pl-[10px] pt-[20px]">
                    <h1 className="text-4xl text-headingColor">CONTACT US</h1>
                    <h1 className="text-3xl text-subColor font-bold">REACH OUT FOR A NEW PROJECT!</h1>
                    <form className="form text-white flex flex-col gap-[25px] " action="https://formsubmit.co/munasinghehiruka@gmail.com" method="POST">
                        <input className="bg-customPurple w-[450px] h-[60px] rounded-sm pl-[10px] placeholder-white" type="text" name="name" id="name" placeholder="Name" required data-validation-required-message="Please enter your name."></input>
                        <input className="bg-customPurple w-[450px] h-[60px] rounded-sm pl-[10px] placeholder-white" type="email" name="email" id="email" placeholder="Email" required data-validation-required-message="Please enter your email."></input>
                        <input className="bg-customPurple w-[450px] h-[60px] rounded-sm pl-[10px] placeholder-white" type="phone" name="name" id="phone" placeholder="Phone" data-validation-required-message="Please enter your phone number."></input>
                        <input className="bg-customPurple w-[450px] h-[180px] pl-[10px] rounded-sm pb-[120px]  placeholder-white" type="text" id="text" name="message" placeholder="Message" data-validation-required-message="Please enter your message."></input>
                        <button type="submit" className="h-12 rounded-md font-bold hover:text-white hover:bg-purple-500 transition duration-2000 ease-in-out bg-customPurple w-48">Send</button>
                    </form>
                </div>
                </div>
            </div>
            <div className="mt-[40px]">
            <Footer/>
            </div>
        </div>
    )
}

export default Contact;