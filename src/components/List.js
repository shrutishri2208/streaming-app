import React, { useState } from "react";
import ListItem from "./ListItem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector } from "react-redux";

const List = ({ list }) => {
  const genre = useSelector((state) => state.genre.genre);
  const heading =
    genre === "home"
      ? "home"
      : genre === "trending"
      ? "trending"
      : genre === "movie"
      ? "movies"
      : genre === "show"
      ? "TV Series"
      : "For Kids";

  const showList =
    genre === "home"
      ? list.slice(25, 50)
      : genre === "trending"
      ? list.slice(0, 25)
      : list.filter((listItem) => listItem.summary.type === genre);

  return (
    <div className="mx-24 mt-20">
      <h2 className="capitalize text-xl font-bold -mb-2">{heading}</h2>
      <div>
        <div className="w-full grid grid-cols-5">
          {showList.map((title, index) => {
            return <ListItem key={index} title={title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
