import React, { useState } from "react";
import ListItem from "./ListItem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector } from "react-redux";

const List = ({ list }) => {
  const genre = useSelector((state) => state.genre.genre);
  console.log();

  const heading =
    genre === "home"
      ? "home"
      : genre === "trending"
      ? "trending"
      : genre === "movie"
      ? "movies"
      : genre === "show"
      ? "TV Series"
      : genre === "kids"
      ? "For Kids (12+)"
      : `Results for '${genre}'`;

  const showList =
    genre === "home"
      ? list.slice(25, 50)
      : genre === "trending"
      ? list.slice(0, 25)
      : genre === "kids"
      ? list.filter(
          (listItem) => listItem.jawSummary.maturity.rating.value === "12"
        )
      : genre === "show" || genre === "movie"
      ? list.filter((listItem) => listItem.summary.type === genre)
      : list.filter((listItem) =>
          listItem.jawSummary.title.toLowerCase().includes(genre.toLowerCase())
        );

  return (
    <div className="mt-20 2xl:mx-24 xl:mx-24 lg:mx-24">
      <h2 className="capitalize text-xl font-bold mb-2 ml-9">{heading}</h2>
      <div>
        <div className="w-full grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
          {showList.map((title, index) => {
            return <ListItem key={index} title={title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
