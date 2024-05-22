import React from "react";
import Design from '../assets/design.jpg';
import Development from "../assets/webdev.jpg";
import Portfolio from "../assets/portfoliodev.jpg";
import Button from "../components/Button";
import withIntersectionObserver from "../components/withIntersectionObserver";

const AnimatedDesign = withIntersectionObserver(() => (
    <div className="design flex justify-center gap-[200px] border-2 border-customPurple p-[50px] w-[1800px]">
        <div className="design-image">
            <img src={Design} className="h-[500px] rounded-md "/>
        </div>
        <div className="textContent flex flex-col gap-[80px]">
            <h1 className="text-5xl font-bold text-subColor">WEB DESIGN</h1>
            <p className="text-customPurple  leading-10">At [Your Company Name], we specialize in creating visually stunning<br/>
            and user-centric websites that not only look beautiful but also function<br/>
            seamlessly. Our web design services are tailored to meet the unique<br/>
            needs of your business, ensuring that your online presence stands out<br/>
            in a crowded digital landscape. </p>
            <Button backgroundColor='bg-customPurple' color='text-white'>Our Work</Button>
        </div>
    </div>
));

const AnimatedDevelopment = withIntersectionObserver(() => (
    <div className="develop flex flex-row-reverse justify-center gap-[200px] border-2 rounded-md border-customPurple p-[50px] w-[1800px]">
        <div className="design-image">
            <img src={Development} className="h-[500px] ml-[50px] rounded-md "/>
        </div>
        <div className="textContent flex flex-col gap-[80px]">
            <h1 className="text-5xl text-subColor font-bold">WEB DEVELOPMENT</h1>
            <p className="text-customPurple leading-10">At [Your Company Name], we specialize in creating visually stunning<br/>
            and user-centric websites that not only look beautiful but also function<br/>
            seamlessly. Our web design services are tailored to meet the unique<br/>
            needs of your business, ensuring that your online presence stands out<br/>
            in a crowded digital landscape. </p>
            <Button backgroundColor='bg-customPurple' color='text-white'>Our Work</Button>
        </div>
    </div>
));

const AnimatedPortfolio = withIntersectionObserver(() => (
    <div className="portfolio flex justify-center gap-[200px] border-2 rounded-md border-customPurple p-[50px] w-[1800px]">
        <div className="design-image">
            <img src={Portfolio} className="h-[500px] rounded-md"/>
        </div>
        <div className="textContent flex flex-col gap-[80px]">
            <h1 className="text-5xl font-bold text-subColor">PORTFOLIO DEVELOPMENT</h1>
            <p className="text-customPurple leading-10">At [Your Company Name], we specialize in creating visually stunning<br/>
            and user-centric websites that not only look beautiful but also function<br/>
            seamlessly. Our web design services are tailored to meet the unique<br/>
            needs of your business, ensuring that your online presence stands out<br/>
            in a crowded digital landscape. </p>
            <Button backgroundColor='bg-customPurple' color='text-white'>Our Work</Button>
        </div>
    </div>
));

const Services = () => {
    return (
        <div id="services">
            <div className="services-div pt-[50px] bg-sectionBg ">
                <h1 className="text-6xl text-center text-headingColor font-bold pb-[20px]">SERVICES</h1>
                <div className="services grid place-items-center gap-[120px] mt-[50px]">
                    <AnimatedDesign />
                    <AnimatedDevelopment />
                    <AnimatedPortfolio />
                </div>
            </div>
        </div>
    );
}

export default withIntersectionObserver(Services);
