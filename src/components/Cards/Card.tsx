import React from "react";

import { Card } from "flowbite-react";

import "./Card.css";

type cardProps = {
  text: string;
  paraText: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Tcard: React.FC<cardProps> = ({
  text,
  onClick,
  icon,
  paraText,
  className = "",
}) => {
  return (
    <>
      <Card
        onClick={onClick}
        className={`text-white  bgColor
        ${className}`}
      >
        <div className="flex flex-row justify-center">
          <img src={icon} alt="" className="cardStyle" />
        </div>

        <span className="flex flex-row text-2xl font-bold">{text}</span>
        <div className="font-light text-left ">
            {paraText}
        </div>
        {/* <span className='flex flex-row'>{paraText}</span> */}
      </Card>
    </>
  );
};

export default Tcard;
