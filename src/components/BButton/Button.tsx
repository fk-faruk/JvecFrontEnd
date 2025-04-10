import React from "react";


type AboutButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
  };


const BButton: React.FC<AboutButtonProps> = ({text,
    onClick,
    className = "",
    type = "button",}) => {
    return (
        <>
        <button
              type={type}
      onClick={onClick}
      className={`text-white gradient-button
        ${className}`}
    >
        <span className="flex flex-row gap-2">
      {text}
      </span>
    </button>
        </>
    )
}




export default BButton