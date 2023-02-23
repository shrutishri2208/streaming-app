import React from "react";

const ListImage = ({ title }) => {
  return (
    <img
      src={title.jawSummary.backgroundImage.url}
      alt="listimage"
      className="rounded-md list-image"
    />
  );
};

export default ListImage;
