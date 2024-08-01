import React from "react";
import contactlogo from "../assets/contonelogo.jpg";
import Button from "../components/Button";
import withIntersectionObserver from "../components/withIntersectionObserver";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

const ContactDisplay = () =>{
    return (
        <div>
            <div className="bg-sectionBg pb-[20px]">
            <h1 className="text-4xl lg:text-5xl text-center text-headingColor font-bold pt-[100px] pb-[20px]">GET IN TOUCH</h1>
            <div className="flex flex-col text-center gap-[50px] mt-[20px] border-2 border-customPurple w-[320px] md:w-[700px] lg:w-[1000px] m-auto rounded-lg p-[10px]">
                <h1 className="text-headingColor text-4xl pt-[20px]">REACH OUT TO US!</h1>
                <p className="text-customPurple  leading-10  text-xl">Your Success Begins with a Conversation.<br/> Our Team is eager to hear your ideas and explore how<br/> We Can Help You Achieve Your Goals.<br/> Don't Hesitate to Get in Touch Today!"</p>
                <div className="flex justify-center">
                <Link to="/contact">
                <Button backgroundColor='bg-customPurple' color='text-white'>START PROJECT</Button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default withIntersectionObserver(ContactDisplay);