import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [searchInput, setSearchInput] = useState(false);

  return (
    <div
      className={`mr-4 p-1 flex items-center 
      ${searchInput && "border-2 border-gray-500"}
    `}
    >
      <SearchIcon
        className="cursor-pointer"
        onClick={() => setSearchInput(!searchInput)}
      />

      <div>
        <input
          className={`search-input bg-transparent text-sm outline-none pb-1 ml-2  ${
            searchInput ? "2xl:w-60 xl:w-60 lg:w-40 md:w-40 sm:w-28" : "w-0"
          }`}
          placeholder="Title, people, genres"
        ></input>
      </div>
    </div>
  );
};

export default Search;
