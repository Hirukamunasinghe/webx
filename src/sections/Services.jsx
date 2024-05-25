import React from "react";
import Design from '../assets/design.jpg';
import Development from "../assets/webdev.jpg";
import Portfolio from "../assets/portfoliodev.jpg";
import Button from "../components/Button";
import withIntersectionObserver from "../components/withIntersectionObserver";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const AnimatedDesign = withIntersectionObserver(() => (
    <div className="design flex flex-col lg:flex-row justify-center gap-5 lg:gap-[200px] border-2 border-customPurple p-5 lg:p-[50px] w-[350px] md:w-[700px] lg:w-[1800px]">
        <div className="design-image">
            <img src={Design} className="h-[200px] md:h-[400px]  lg:h-[500px] rounded-md"/>
        </div>
        <div className="textContent flex flex-col gap-5 lg:gap-[80px]">
            <h1 className="text-3xl lg:text-5xl font-bold text-subColor">WEB DESIGN</h1>
            <p className="text-customPurple leading-6 lg:leading-10">At [Your Company Name], we specialize in creating visually stunning<br/>
            and user-centric websites that not only look beautiful but also function<br/>
            seamlessly. Our web design services are tailored to meet the unique<br/>
            needs of your business, ensuring that your online presence stands out<br/>
            in a crowded digital landscape. </p>
            <Link to="/projects">
            <Button backgroundColor='bg-customPurple' color='text-white'>Our Work</Button>
            </Link>
        </div>
    </div>
));

const AnimatedDevelopment = withIntersectionObserver(() => (
    <div className="develop flex flex-col lg:flex-row-reverse justify-center gap-5 lg:gap-[200px] border-2 rounded-md border-customPurple p-5 lg:p-[50px] w-[350px] md:w-[700px] lg:w-[1800px]">
        <div className="design-image">
            <img src={Development} className="h-[200px] md:h-[400px] lg:h-[500px] ml-0 lg:ml-[50px] rounded-md"/>
        </div>
        <div className="textContent flex flex-col gap-5 lg:gap-[80px]">
            <h1 className="text-3xl lg:text-5xl text-subColor font-bold">WEB DEVELOPMENT</h1>
            <p className="text-customPurple leading-6 lg:leading-10">At [Your Company Name], we specialize in creating visually stunning<br/>
            and user-centric websites that not only look beautiful but also function<br/>
            seamlessly. Our web design services are tailored to meet the unique<br/>
            needs of your business, ensuring that your online presence stands out<br/>
            in a crowded digital landscape. </p>
            <Link to="/projects">
            <Button backgroundColor='bg-customPurple' color='text-white'>Our Work</Button>
            </Link>
        </div>
    </div>
));

const AnimatedPortfolio = withIntersectionObserver(() => (
    <div className="portfolio flex flex-col lg:flex-row justify-center gap-5 lg:gap-[200px] border-2 rounded-md border-customPurple p-5 lg:p-[50px] w-[350px] md:w-[700px] lg:w-[1800px]">
        <div className="design-image">
            <img src={Portfolio} className="h-[200px] md:h-[400px] lg:h-[500px] rounded-md"/>
        </div>
        <div className="textContent flex flex-col gap-5 lg:gap-[80px]">
            <h1 className="text-3xl lg:text-5xl font-bold text-subColor">PORTFOLIO DEVELOPMENT</h1>
            <p className="text-customPurple leading-6 lg:leading-10">At [Your Company Name], we specialize in creating visually stunning<br/>
            and user-centric websites that not only look beautiful but also function<br/>
            seamlessly. Our web design services are tailored to meet the unique<br/>
            needs of your business, ensuring that your online presence stands out<br/>
            in a crowded digital landscape. </p>
            <Link to="/projects">
            <Button backgroundColor='bg-customPurple' color='text-white'>Our Work</Button>
            </Link>
        </div>
    </div>
));

const Services = () => {
    return (
        <div id="services">
            <div className="services-div pt-[50px] bg-sectionBg ">
                <h1 className="text-4xl lg:text-6xl text-center text-headingColor font-bold pb-[20px]">SERVICES</h1>
                <div className="services grid place-items-center gap-10 lg:gap-[120px] mt-[50px]">
                    <AnimatedDesign />
                    <AnimatedDevelopment />
                    <AnimatedPortfolio />
                </div>
            </div>
        </div>
    );
}

export default withIntersectionObserver(Services);
