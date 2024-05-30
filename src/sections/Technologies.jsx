import React, { useEffect } from "react";
import "../index.css"; // Import CSS file for styling
import withIntersectionObserver from "../components/withIntersectionObserver";

const Technologies = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate images to the right
      const images = document.querySelectorAll(".programming-logo");
      images.forEach((image) => {
        image.style.transform = `rotate(90deg)`;
      });
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div id="tech">
      <div  className="tech-div bg-sectionBg pt-[100px] pb-[15px]">
        <h1 className="text-4xl lg:text-6xl text-center text-headingColor font-bold pb-[20px]">
          TECHNOLOGIES
        </h1>
        <div className="logos grid grid-cols-3 lg:grid-cols-4 place-items-center gap-[50px] lg:gap-[80px] mt-[50px]">
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="HTML"
          />
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="CSS"
          />
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
          />
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS"
          />
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="Python"
          />
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="Java"
          />
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
          />
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            alt="Figma"
          />
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg"
            alt="Wordpress"
          />
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg"
            alt="Firebase"
          />
          <img
            className="programming-logo h-[50px] lg:h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg"
            alt="XD"
          />
        </div>
      </div>
    </div>
  );
};

export default withIntersectionObserver(Technologies);
