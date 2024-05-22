import React, { useEffect } from "react";
import "../index.css"; // Import CSS file for styling

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
      <div className="tech-div bg-sectionBg pt-[100px]">
        <h1 className="text-6xl text-center text-headingColor font-bold pb-[20px]">
          TECHNOLOGIES
        </h1>
        <div className="logos grid grid-cols-4 place-items-center gap-[60px] mt-[50px]">
          <img
            className="programming-logo h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="HTML"
          />
          <img
            className="programming-logo h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="CSS"
          />
          <img
            className="programming-logo h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            className="programming-logo h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
          />
          <img
            className="programming-logo h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS"
          />
          <img
            className="programming-logo h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="Python"
          />
          <img
            className="programming-logo h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="Java"
          />
          <img
            className="programming-logo h-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
