import React from "react";

const MyListImage = ({ title }) => {
  return (
    <img
      src={title.jawSummary.backgroundImage.url}
      alt="mylistimage"
      className="rounded-md list-image"
    />
  );
};

export default MyListImage;
