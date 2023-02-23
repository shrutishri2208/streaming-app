import React from "react";
import { useLocation } from "react-router-dom";
import DetailsImage from "./DetailsImage";
import DetailsInfo from "./DetailsInfo";

const Details = () => {
  const { state } = useLocation();
  return (
    <div className="m-20 xl:flex gap-8">
      <DetailsImage state={state} />
      <DetailsInfo state={state} />
    </div>
  );
};

export default Details;
