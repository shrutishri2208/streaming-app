import React from "react";
import ListImage from "./ListImage";
import ListDetails from "./ListDetails";

const ListItem = ({ title }) => {
  return (
    <div
      className={`m-2 2xl:w-64 xl:w-64 lg:w-64 md:w-60 sm:w-60 item relative`}
    >
      <ListImage title={title} />
      <ListDetails title={title} />
    </div>
  );
};

export default ListItem;
