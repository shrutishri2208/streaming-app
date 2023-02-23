import React, { useState } from "react";
import ListItem from "./ListItem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const List = ({ list, heading }) => {
  const [transformValue, setTransformValue] = useState(0);

  const nextBtn = () => {
    let newTransformValue = transformValue - window.innerWidth;
    if (newTransformValue < -(window.innerWidth * 2)) {
      newTransformValue = 0;
    }
    setTransformValue(newTransformValue);
  };
  const prevBtn = () => {
    let newTransformValue = transformValue + window.innerWidth;
    if (newTransformValue > 0) {
      newTransformValue = -(window.innerWidth * 2);
    }
    setTransformValue(newTransformValue);
  };

  return (
    <div className="mb-8">
      <div className="font-bold mb-2 px-12 text-xl">{heading}</div>

      <div className="relative flex items-center ">
        <button className="prev-btn absolute px-8 h-full" onClick={prevBtn}>
          <ArrowBackIosIcon className="arrow" />
        </button>
        <button
          className="next-btn absolute px-8 right-0 h-full"
          onClick={nextBtn}
        >
          <ArrowForwardIosIcon className="arrow" />
        </button>
        <div
          className="list-container flex px-12  "
          style={{
            transform: `translateX(${transformValue}px)`,
            transition: "transform 1s",
          }}
        >
          {list.map((title, index) => {
            return <ListItem key={index} title={title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
