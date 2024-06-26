import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#ffba5a",
  grey: "#a9a9a9",
};

function Star({ size = "12" }) {
  const stars = Array(5).fill(0);
  const [currentValue, setcurrentValue] = useState(5);
  const [hoverValue, sethoverValue] = useState(undefined);

  const handleClick = (value) => {
    setcurrentValue(value);
  };

  const handleMouseOver = (value) => {
    sethoverValue(value);
  };

  const handleMouseLeave = () => {
    sethoverValue(undefined);
  };

  return (
    <div className="flex py-2">
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={size}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={
              (hoverValue || currentValue) > index ? colors.orange : colors.grey
            }
          />
        );
      })}
    </div>
  );
}

export default Star;
