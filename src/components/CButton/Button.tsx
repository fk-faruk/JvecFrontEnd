import React from "react"

import "./Button.css"

type GradientButtonProps = {
    text: string;
    icon?: boolean; 
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
  };


const Button: React.FC<GradientButtonProps> = ({text,
    onClick,
    icon,
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

        {icon ? <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
  <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
</svg> : '' }
        

        {/* <Icon icon="mdi:telephone" width="24" height="24" /> */}
      {text}
      </span>
    </button>
        </>
    )
}


export default Button