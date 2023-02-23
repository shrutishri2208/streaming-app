import React from "react";
import ListImage from "./ListImage";
import ListDetails from "./ListDetails";

const ListItem = ({ title }) => {
  return (
    <div className={`m-1 w-64 item  relative`}>
      <ListImage title={title} />
      <ListDetails title={title} />
    </div>
  );
};

export default ListItem;
