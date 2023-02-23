import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Genres = () => {
  const [isBrowse, setIsBrowse] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setIsBrowse(false);
  }, [pathname]);
  return (
    <div className="h-screen bg-black p-8 top-12 left-0 fixed">
      <div className="flex flex-col text-left text-xl mt-10">
        <button className="p-4 hover:bg-gray-800 hover:bg-opacity-50">
          Home
        </button>
        <button className="p-4 hover:bg-gray-800 hover:bg-opacity-50">
          TV Shows
        </button>
        <button className="p-4 hover:bg-gray-800 hover:bg-opacity-50">
          Movies
        </button>
        <button className="p-4 hover:bg-gray-800 hover:bg-opacity-50">
          New & Popular
        </button>
        <button className="p-4 hover:bg-gray-800 hover:bg-opacity-50">
          My List
        </button>
        <button className="p-4 hover:bg-gray-800 hover:bg-opacity-50">
          Browse by Languages
        </button>
      </div>
      {/* <div className="flex flex-col text-sm justify-start">
        <Link to="/">
          <button className="text-center">Home</button>
        </Link>
        <button className="text-center">TV Shows</button>
        <button>Movies</button>
        <button>New & Popular</button>
        <Link to="/myList">
          <button>My List</button>
        </Link>
        <button>Browse by Languages</button>
      </div> */}

      {/* <div className=" md-genre-container text-sm relative">
        <div className="cursor-pointer">
          <button onClick={() => setIsBrowse(!isBrowse)}>Browse</button>
          <ArrowDropDownIcon
            onClick={() => setIsBrowse(!isBrowse)}
            className="cursor-pointer profile-arrow"
          />
        </div>

        {isBrowse && (
          <div className="bg-black bg-opacity-90 absolute top-11 -left-24 flex-row w-full border-t-2">
            <Link to="/">
              <button className="block m-auto p-4">Home</button>
            </Link>

            <button className="block m-auto p-4">Movies</button>
            <button className="block m-auto p-4">New & Popular</button>
            <button className="block m-auto p-4">TV Shows</button>
            <Link to="/myList">
              <button className="block m-auto p-4">My List</button>
            </Link>

            <button className="block m-auto p-4">Browse by Language</button>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Genres;
