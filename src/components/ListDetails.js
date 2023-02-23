import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/myList/myListActions";

const ListDetails = ({ title }) => {
  const dispatch = useDispatch();
  const myListId = useSelector((state) => state.myListId);

  return (
    <div className="absolute top-0 h-full w-full rounded-md list-details flex items-center justify-center ">
      <div className="relative top-0 sm:scale-50 md:scale-75 lg:scale-105 xl:scale-105">
        <p className="text-center font-bold xl:my-2 lg:text-xs xl:text-sm 2xl:text-base">
          {title.jawSummary.episodeTitle || title.jawSummary.title}
        </p>

        <div className="flex items-center justify-between md:scale-75 lg:scale-90">
          <div className="flex justify-between gap-2">
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
            {!myListId.includes(title.summary.id) ? (
              <div className="flex items-center hover:opacity-100 add-to-list-btn">
                <button
                  onClick={() => {
                    dispatch(addItem(title));
                  }}
                >
                  <AddIcon className=" scale-110 thumbs-info border-2 rounded-full" />
                </button>
              </div>
            ) : (
              <div className="flex items-center add-to-list-btn">
                <button>
                  <DoneIcon className=" scale-110 thumbs-info border-2 rounded-full" />
                </button>
              </div>
            )}
          </div>
          <Link to={`/details`} state={title}>
            <button>
              <InfoIcon className="scale-110 hover:scale-125" />
            </button>
          </Link>
        </div>

        <div className="extra-details flex gap-4 justify-between md:scale-75 md:text-xs lg:scale-90 lg:my-1 xl:text-xs items-center">
          <div className="text-green-500 font-bold">92% MATCH</div>
          <div className="border-2 px-1">
            {title.jawSummary.maturity.rating.value.slice(-2)}
          </div>
          <div>{title.jawSummary.numSeasonsLabel || "2h 10m"}</div>
          <div className="border-2 px-1">
            {title.jawSummary.delivery.quality}
          </div>
        </div>
        <div className="tags flex text-sm md:scale-75 lg:scale-90 lg:text-xs">
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
    </div>
  );
};

export default ListDetails;
