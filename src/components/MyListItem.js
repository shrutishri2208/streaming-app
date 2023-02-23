import React from "react";
import MyListImage from "./MyListImage";
import MyListDetails from "./MyListDetails";

const MyListItem = ({ title }) => {
  return (
    <div className={` m-1 w-64 item relative`}>
      <MyListImage title={title} />
      <MyListDetails title={title} />
    </div>
  );
};

export default MyListItem;
