import React from "react";
import Design from "../assets/design.jpg";
import Development from "../assets/webdev.jpg";
import Portfolio from "../assets/portfoliodev.jpg";
import Button from "../components/Button";
import withIntersectionObserver from "../components/withIntersectionObserver";
import { Link } from "react-router-dom";

const AnimatedDesign = withIntersectionObserver(() => (
  <div className="design flex flex-col lg:flex-row justify-center gap-5 lg:gap-[200px] border-2 rounded-md border-customPurple p-5 lg:p-[50px] w-[350px] md:w-[700px] lg:w-[1800px]">
    <div className="design-image">
      <img
        src={Design}
        className="h-[200px] md:h-[400px] lg:h-[500px] rounded-md"
      />
    </div>
    <div className="textContent flex flex-col gap-5 lg:gap-[80px]">
      <h1 className="text-3xl lg:text-5xl font-bold text-subColor">
        WEB DESIGN
      </h1>
      <p className="text-customPurple text-sm lg:text-md md:text-lg font-bold leading-5 lg:leading-10">
        At WebX, we deliver web design services that fuse captivating aesthetics
        <br />
        with flawless functionality. Our mission is to craft websites that not
        only
        <br />
        captivate attention but also ignite engagement and drive conversions.
        <br />
        With an unwavering focus on your distinctive business needs, we
        ensure unparallel excellence


      </p>
      <Link to="/projects">
        <Button backgroundColor="bg-customPurple" color="text-white">
          Our Work
        </Button>
      </Link>
    </div>
  </div>
));

const AnimatedDevelopment = withIntersectionObserver(() => (
  <div className="develop flex flex-col lg:flex-row-reverse justify-center gap-5 lg:gap-[200px] border-2 rounded-md border-customPurple p-5 lg:p-[50px] w-[350px] md:w-[700px] lg:w-[1800px]">
    <div className="design-image">
      <img
        src={Development}
        className="h-[200px] md:h-[400px] lg:h-[500px] ml-0 lg:ml-[50px] rounded-md"
      />
    </div>
    <div className="textContent flex flex-col gap-5 lg:gap-[80px]">
      <h1 className="text-3xl lg:text-5xl text-subColor font-bold">
        WEB DEVELOPMENT
      </h1>
      <p className="text-customPurple text-sm lg:text-lg md:text-lg font-bold leading-6 lg:leading-10">
        At WebX, we offer web development services that combine innovative
        <br /> technology with user-focused design. Our goal is to build
        websites
        <br /> that not only perform flawlessly but also captivate your
        audience.
        <br />
        Tailored to your unique business goals, we make sure your
        <br /> online presence is robust and impactful
        <br /> in the competitive digital landscape.
      </p>
      <Link to="/projects">
        <Button backgroundColor="bg-customPurple" color="text-white">
          Our Work
        </Button>
      </Link>
    </div>
  </div>
));

const AnimatedPortfolio = withIntersectionObserver(() => (
  <div className="portfolio flex flex-col lg:flex-row justify-center gap-5 lg:gap-[200px] border-2 rounded-md border-customPurple p-5 lg:p-[50px] w-[350px] md:w-[700px] lg:w-[1800px]">
    <div className="design-image">
      <img
        src={Portfolio}
        className="h-[200px] md:h-[400px] lg:h-[500px] rounded-md"
      />
    </div>
    <div className="textContent flex flex-col gap-5 lg:gap-[80px]">
      <h1 className="text-3xl lg:text-5xl font-bold text-subColor">
        PORTFOLIO DEVELOPMENT
      </h1>
      <p className="text-customPurple text-sm lg:text-lg md:text-lg font-bold leading-6 lg:leading-10">
        At WebX, we specialize in crafting visually striking
        <br />
        and user-friendly portfolio websites that not only showcase your work
        but also
        <br />
        function seamlessly. Our portfolio site development services are
        tailored to meet
        <br />
        the unique needs of your brand, ensuring that your online portfolio
        stands out
        <br />
        in a crowded digital landscape.
      </p>
      <Link to="/projects">
        <Button backgroundColor="bg-customPurple" color="text-white">
          Our Work
        </Button>
      </Link>
    </div>
  </div>
));

const Services = () => {
  return (
    <div>
      <div id="services" className="services-div  pt-[70px] bg-sectionBg">
        <h1 className="text-4xl lg:text-6xl text-center text-headingColor font-bold pb-[20px]">
          SERVICES
        </h1>
        <div className="services grid place-items-center gap-10 lg:gap-[120px] mt-[50px]">
          <AnimatedDesign />
          <AnimatedDevelopment />
          <AnimatedPortfolio />
        </div>
      </div>
    </div>
  );
};

export default Services;
