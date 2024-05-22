import React from "react";
import Design from '../assets/design.jpg';
import Development from "../assets/webdev.jpg";
import Portfolio from "../assets/portfoliodev.jpg";
import Button from "../components/Button";

const Services = () =>{
    return(
        <div id="services">
            <div className="services-div pt-[50px] bg-sectionBg ">
            <h1 className="text-6xl text-center text-headingColor font-bold pb-[20px]">SERVICES</h1>
            <div className="services grid place-items-center gap-[120px] mt-[50px]">
                <div className="design flex justify-center gap-[200px]">
                    <div className="design-image">
                        <img src={Design} className="h-[500px] rounded-md border-2 border-customPurple"/>
                    </div>
                    <div className="textContent flex flex-col gap-[80px]">
                        <h1 className="text-5xl font-bold text-subColor">WEB DESIGN</h1>
                        <p className="text-customPurple  leading-10">At [Your Company Name], we specialize in creating visually stunning<br/>
                        and user-centric websites that not only look beautiful but also function<br/>
                        seamlessly. Our web design services are tailored to meet the unique<br/>
                        needs of your business,ensuring that your online presence stands out<br/>
                        in a crowded digital landscape. </p>
                        <Button backgroundColor='bg-customPurple' color='text-white'>Our Work</Button>
                    </div>
                </div>
                <div className="develop flex flex-row-reverse justify-center gap-[200px]">
                    <div className="design-image">
                        <img src={Development} className="h-[500px] ml-[50px] rounded-md border-2 border-customPurple"/>
                    </div>
                    <div className="textContent flex flex-col gap-[80px]">
                        <h1 className="text-5xl text-subColor font-bold">WEB DEVELOPMENT</h1>
                        <p className="text-customPurple leading-10">At [Your Company Name], we specialize in creating visually stunning<br/>
                        and user-centric websites that not only look beautiful but also function<br/>
                        seamlessly. Our web design services are tailored to meet the unique<br/>
                        needs of your business,ensuring that your online presence stands out<br/>
                        in a crowded digital landscape. </p>
                        <Button backgroundColor='bg-customPurple' color='text-white'>Our Work</Button>
                    </div>
                </div>
                <div className="portfolio flex justify-center gap-[200px]">
                    <div className="design-image">
                        <img src={Portfolio} className="h-[500px] rounded-md border-2 border-customPurple"/>
                    </div>
                    <div className="textContent flex flex-col gap-[80px]">
                        <h1 className="text-5xl font-bold text-subColor">PORTFOLIO DEVELOPMENT</h1>
                        <p className="text-customPurple leading-10">At [Your Company Name], we specialize in creating visually stunning<br/>
                        and user-centric websites that not only look beautiful but also function<br/>
                        seamlessly. Our web design services are tailored to meet the unique<br/>
                        needs of your business,ensuring that your online presence stands out<br/>
                        in a crowded digital landscape. </p>
                        <Button backgroundColor='bg-customPurple' color='text-white'>Our Work</Button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services;