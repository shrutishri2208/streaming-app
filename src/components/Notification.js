import React from "react";

const Notification = ({ id, heading, text, image, date }) => {
  return (
    <div className="flex border-2 p-4 border-t-0 notifications">
      <img src={image} alt="" className="mr-4 rounded-md h-16 w-24" />
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default Notification;
