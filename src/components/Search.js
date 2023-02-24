import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div
      className={`mt-5 p-1 flex items-center border-2 border-gray-400
    `}
    >
      <SearchIcon />
      <div>
        <input
          className={`search-input bg-transparent text-sm outline-none pb-1 ml-2 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full  `}
          placeholder="Search..."
        ></input>
      </div>
    </div>
  );
};

export default Search;
