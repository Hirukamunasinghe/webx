import React from "react";

// Passing children, backgroundColor, width, and color as props to the button component
const Button = ({ children, backgroundColor, width, color, border }) => {
    // Default bg color
    const defaultBackgroundColor = "bg-customWhite";
    const buttonBackgroundColor = backgroundColor ? backgroundColor : defaultBackgroundColor;

    // Default width
    const defaultWidth = "w-48";
    const buttonWidth = width ? width : defaultWidth;

    // Default Color
    const defaultColor = "text-black";
    const buttonColor = color ? color : defaultColor;

    //border
    const defaultBorder = "border-2 border-customPurple";
    const borderColor = border ? border : defaultBorder;

    return (
        <button className={`h-12 rounded-md font-bold ${buttonBackgroundColor} ${buttonWidth} ${buttonColor} ${borderColor} hover:text-white hover:bg-purple-500 transition duration-2000 ease-in-out`}>
            {children}
        </button>
    );
};

export default Button;
