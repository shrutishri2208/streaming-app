import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useSelector } from "react-redux";

const DetailsImage = ({ state }) => {
  const myList = useSelector((state) => state.myList);

  return (
    <div className="relative">
      <div>
        <img
          src={state.jawSummary.backgroundImage.url}
          className="rounded-md"
          alt="detailsimage"
        />
      </div>
      <div className="absolute bottom-10 left-10 flex gap-8 items-center">
        <div className="flex items-center scale-125 bg-white text-black px-4 py-0.5 rounded-md cursor-pointer">
          <PlayArrowIcon className="scale-125 mr-1 " />
          <button className="text-lg font-semibold">Play</button>
        </div>
        <div className="flex gap-6">
          <button>
            <ThumbUpAltIcon className="scale-150 thumbs-info border-2 rounded-full" />
          </button>
          <button>
            <ThumbDownAltIcon className="scale-150 thumbs-info border-2 rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsImage;
