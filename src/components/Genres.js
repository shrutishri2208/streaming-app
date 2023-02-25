import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";
import { setGenre } from "../redux/genre/genreActions";

const Genres = ({ isMenu, setIsMenu }) => {
  const genre = useSelector((state) => state.genre.genre);
  const dispatch = useDispatch();
  return (
    <div
      className={`p-8 bottom-0 top-14 left-0 fixed genre-container ${
        isMenu ? "genre-container-display" : "genre-container-close"
      }`}
    >
      <div className="flex flex-col text-left text-xl mt-10">
        <Search />
        <Link to="/">
          <button
            className="w-full p-4 hover:bg-gray-800 hover:bg-opacity-50"
            onClick={() => {
              dispatch(setGenre("home"));
              setIsMenu(false);
            }}
          >
            Home
          </button>
        </Link>
        <Link to="/">
          <button
            className="w-full p-4 hover:bg-gray-800 hover:bg-opacity-50"
            onClick={() => {
              dispatch(setGenre("trending"));
              setIsMenu(false);
            }}
          >
            Trending
          </button>
        </Link>
        <Link to="/myList">
          <button className="w-full p-4 hover:bg-gray-800 hover:bg-opacity-50 text-center">
            My List
          </button>
        </Link>
        <Link to="/">
          <button
            className="w-full p-4 hover:bg-gray-800 hover:bg-opacity-50"
            onClick={() => {
              dispatch(setGenre("movie"));
              setIsMenu(false);
            }}
          >
            Movies
          </button>
        </Link>
        <Link to="/">
          <button
            className="w-full p-4 hover:bg-gray-800 hover:bg-opacity-50"
            onClick={() => {
              dispatch(setGenre("show"));
              setIsMenu(false);
            }}
          >
            TV Series
          </button>
        </Link>
        <Link to="/">
          <button
            className="w-full p-4 hover:bg-gray-800 hover:bg-opacity-50"
            onClick={() => {
              dispatch(setGenre("kids"));
              setIsMenu(false);
            }}
          >
            For Kids
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Genres;
