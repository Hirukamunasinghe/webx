import React, { useEffect } from "react";
import imageone from '../assets/huddling-page.jpg';
import imagetwo from '../assets/lpage.jpg';
import imagethree from '../assets/properties.png';
import imagefour from '../assets/adv22.jpg';
import agasthi from '../assets/agasthi.png';
import imagefive from '../assets/personalport.png';
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import withIntersectionObserver from "../components/withIntersectionObserver";

const AnimatedDesignProjects = withIntersectionObserver(({ className }) => (
    <div className="mt-[100px]">
    <h1 className="text-4xl lg:text-6xl text-center text-headingColor font-bold mt-[20px]">LATEST PROJECTS</h1>
    <div className="cards flex flex-col items-center pt-[40px] pb-[40px]">
        <div className="descard rounded-md bg-customWhite h-[400px] lg:h-[600px] w-[350px] lg:w-[800px] border-2 border-customPurple grid grid-rows-2 pb-[20px]">
            <div className="imgDiv">
                <img src={agasthi} className="rounded-md h-[190px]  lg:h-[420px] "/>
            </div>
            <div className="textDiv flex flex-col gap-[20px] mt-[-100px] lg:mt-[-0px]">
                <div className="flex justify-center gap-[50px] mt-[20px]">
                    <img className="h-[40px] lg:h-[50px] mt-[160px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                    <img className="h-[40px] lg:h-[50px] mt-[160px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                    <img className="h-[40px] lg:h-[50px] mt-[160px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                    <img className="h-[40px] lg:h-[50px] mt-[160px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain-wordmark.svg" />
          
                </div>
                <div className="text-center">
                    <a href="https://agasthi.lk/"><Button backgroundColor='bg-customPurple' color='text-white' width='w-[250px]'>AGASTHI . LK</Button></a>
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
            <div className="descard rounded-md bg-customWhite h-[420px] lg:h-[600px] w-[350px] lg:w-[800px] border-2 border-customPurple grid grid-rows-2 pb-[20px]">
                <div className="imgDiv">
                    <img src={imagefive} className="rounded-md  lg:h-[400px]"/>
                </div>
                <div className="textDiv flex flex-col gap-[20px] mt-[-100px] lg:mt-[-0px]">
                    <div className="flex justify-center gap-[50px] mt-[20px]">
                        <img className="h-[40px] lg:h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                        <img className="h-[40px] lg:h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                        <img className="h-[40px] lg:h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                        <img className="h-[40px] lg:h-[50px] mt-[150px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                    </div>
                    <div className="text-center">
                        <a href="https://hirukamunasinghe.github.io/portfolio-new/"><Button backgroundColor='bg-customPurple' color='text-white' width='w-[250px]'>PORTFOLIO</Button></a>
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
            <AnimatedPortfolioProjects className="portfolioProjects" />
            <AnimatedFooter className="footer" />
        </div>
    );
}

export default withIntersectionObserver(Projects);
