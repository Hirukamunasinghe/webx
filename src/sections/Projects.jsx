import React, { useEffect } from "react";
import imageone from '../assets/huddling-page.jpg';
import imagetwo from '../assets/lpage.jpg';
import imagethree from '../assets/properties.png';
import imagefour from '../assets/adv22.jpg';
import imagefive from '../assets/personalport.png';
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import withIntersectionObserver from "../components/withIntersectionObserver";

const AnimatedDesignProjects = withIntersectionObserver(({ className }) => (
    <div className={className}>
        <h1 className="text-4xl lg:text-6xl text-center text-headingColor font-bold mt-[20px]">DESIGNS</h1>
        <div className="cards grid grid-cols-1 gap-[20px] lg:grid-cols-2 lg:gap-[0px] place-items-center mt-[50px]">
            <div className="descard rounded-md bg-customWhite h-[600px] w-[350px] lg:w-[600px] border-2 border-customPurple grid grid-rows-2">
                <div className="imgDiv">
                    <img src={imageone} className="rounded-md"/>
                </div>
                <div className="textDiv flex flex-col gap-[20px] justify-center items-center">
                    <div className="flex justify-center gap-[50px]">
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"/>
                    </div>
                    <div className="text-center">
                        <Button backgroundColor='bg-customPurple' color='text-white' width='w-[250px]'>HUDDLE LANDING PAGE</Button>
                    </div>
                </div>
            </div>
            <div className="descard rounded-md bg-customWhite h-[600px] w-[350px] lg:w-[600px] border-2 border-customPurple grid grid-rows-2">
                <div className="imgDiv">
                    <img src={imagetwo} className="rounded-md"/>
                </div>
                <div className="textDiv flex flex-col gap-[20px] justify-center items-center">
                    <div className="flex justify-center gap-[50px]">
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"/>
                    </div>
                    <div className="text-center">
                        <Button backgroundColor='bg-customPurple' color='text-white' width='w-[250px]'>CLIPBOARD LANDING PAGE</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
));

const AnimatedDevProjects = withIntersectionObserver(({ className }) => (
    <div className="mt-[100px]">
        <h1 className=" text-4xl lg:text-6xl text-center text-headingColor font-bold mt-[20px]">WEB APPS</h1>
        <div className="cards grid place-items-center grid-cols-1 gap-[20px] lg:grid-cols-2 lg:gap-[0px] mt-[50px]">
            <div className="descard rounded-md bg-customWhite h-[600px] w-[350px] lg:w-[600px] border-2 border-customPurple grid grid-rows-2">
                <div className="imgDiv">
                    <img src={imagethree} className="rounded-md h-[400px]"/>
                </div>
                <div className="textDiv flex flex-col gap-[20px]">
                    <div className="flex justify-center gap-[50px] mt-[20px]">
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                    </div>
                    <div className="text-center">
                        <Button backgroundColor='bg-customPurple' color='text-white' width='w-[250px]'>PROPERTIES WEBSITE</Button>
                    </div>
                </div>
            </div>
            <div className="descard rounded-md bg-customWhite h-[600px] w-[350px] lg:w-[600px] border-2 border-customPurple grid grid-rows-2">
                <div className="imgDiv">
                    <img src={imagefour} className="rounded-md"/>
                </div>
                <div className="textDiv flex flex-col gap-[20px]">
                    <div className="flex justify-center gap-[50px] mt-[20px]">
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                        <img className="h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                    </div>
                    <div className="text-center">
                        <Button backgroundColor='bg-customPurple' color='text-white' width='w-[250px]'>ADVICE GENERATOR</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
));

const AnimatedPortfolioProjects = withIntersectionObserver(({ className }) => (
    <div className="mt-[100px]">
        <h1 className="text-4xl lg:text-6xl text-center text-headingColor font-bold mt-[20px]">PORTFOLIO SITES</h1>
        <div className="cards flex flex-col items-center pt-[40px] pb-[40px]">
            <div className="descard rounded-md bg-customWhite h-[600px] w-[350px] lg:w-[800px] border-2 border-customPurple grid grid-rows-2 pb-[20px]">
                <div className="imgDiv">
                    <img src={imagefive} className="rounded-md"/>
                </div>
                <div className="textDiv flex flex-col gap-[20px]">
                    <div className="flex justify-center gap-[50px] mt-[20px]">
                        <img className="h-[40px] lg:h-[60px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                        <img className="h-[40px] lg:h-[60px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                        <img className="h-[40px] lg:h-[60px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                        <img className="h-[40px] lg:h-[60px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                    </div>
                    <div className="text-center">
                        <Button backgroundColor='bg-customPurple' color='text-white' width='w-[250px]'>PORTFOLIO</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
));

const AnimatedFooter = withIntersectionObserver(({ className }) => (
    <div className={className}>
        <Footer />
    </div>
));

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
    }, []);

    return (
        <div className="bg-sectionBg">
            <Navbar />
            <AnimatedDesignProjects className="designProjects" />
            <AnimatedDevProjects className="devProjects" />
            <AnimatedPortfolioProjects className="portfolioProjects" />
            <AnimatedFooter className="footer" />
        </div>
    );
}

export default withIntersectionObserver(Projects);
