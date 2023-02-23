import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/myList/myListActions";
import CloseIcon from "@mui/icons-material/Close";

const ListDetails = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <div className="absolute p-2 top-0 h-full w-full rounded-md list-details">
      <p className="text-base text-center font-bold">
        {title.jawSummary.episodeTitle || title.jawSummary.title}
      </p>

      <div className="flex items-center justify-between px-4 my-2">
        <div className="flex  justify-between gap-2 my-1">
          <div className="flex items-center">
            <button>
              <ThumbUpAltIcon className=" scale-110 thumbs-info border-2 rounded-full" />
            </button>
          </div>
          <div className="flex items-center ">
            <button>
              <ThumbDownAltIcon className="scale-110 thumbs-info border-2 rounded-full" />
            </button>
          </div>
          <div className="flex items-center add-to-list-btn">
            <button
              onClick={() => {
                dispatch(deleteItem(title.summary.id));
              }}
            >
              <CloseIcon className=" scale-110 thumbs-info border-2 rounded-full" />
            </button>
          </div>
        </div>
        <Link to={`/details`} state={title}>
          <button>
            <InfoIcon className="scale-110 hover:scale-125" />
          </button>
        </Link>
      </div>

      <div className="extra-details flex justify-between my-2">
        <div className="text-green-500 font-bold">92% MATCH</div>
        <div className="border-2 px-1">
          {title.jawSummary.maturity.rating.value}
        </div>
        <div>{title.jawSummary.numSeasonsLabel || "2h 10m"}</div>
        <div className="border-2 px-1">{title.jawSummary.delivery.quality}</div>
      </div>
      <div className="tags flex my-1 text-sm">
        {title.jawSummary.tags.map((tag, index) => {
          return (
            <p key={index} className="">
              {tag.name}
              {index < title.jawSummary.tags.length - 1 && (
                <span className="m-1 text-gray-500">•</span>
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ListDetails;
