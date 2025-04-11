import React from "react";
import { RxCursorArrow } from "react-icons/rx";

import "./TButton.css"

type TransparentButtonProps = {
  text: string;
  icon?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const TButton: React.FC<TransparentButtonProps> = ({
  text,
  icon,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`text-white 
        ${className}`}
      >
        {text}
        {icon ?
        <div className=" flex flex-row justify-center">
          <RxCursorArrow color="blue"/>
        </div> : ''
        }
      </button>
    </>
  );
};

export default TButton;
