import React from "react";
import MyListImage from "./MyListImage";
import MyListDetails from "./MyListDetails";

const MyListItem = ({ title }) => {
  return (
    <div className="m-2 2xl:w-64 xl:w-64 lg:w-64 md:w-60 sm:w-60 item relative">
      <MyListImage title={title} />
      <MyListDetails title={title} />
    </div>
  );
};

export default MyListItem;
