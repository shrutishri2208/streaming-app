import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../redux/genre/genreActions";

const Search = () => {
  const dispatch = useDispatch();
  const genre = useSelector((state) => state.genre.genre);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setGenre(search));
  };

  return (
    <div
      className={`mb-4 p-1 flex items-center border-2 border-gray-400
    `}
    >
      <SearchIcon />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            className={`search-input bg-transparent text-sm outline-none pb-1 ml-2 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full  `}
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
