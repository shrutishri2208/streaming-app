import React, { useState } from "react";
import ListItem from "./ListItem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const List = ({ list }) => {
  const [transformValue, setTransformValue] = useState(0);
  // const showList = list.filter((listItem) => listItem.summary.type === "show");

  return (
    <div className="mx-24 mt-20">
      <div className="">
        <div
          className="w-full grid grid-cols-5"
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
