import React from "react";

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
      </button>
    </>
  );
};

export default TButton;
