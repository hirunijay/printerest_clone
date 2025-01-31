import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="w-[68%] px-2 h-full">
      <div className="flex flex-row items-center gap-2 bg-themegray-light rounded-3xl h-full px-4 py-1 w-full">
        <FaSearch color="#767676" />
        <input
          placeholder="Search for easy dinners, fashion, etc."
          className="w-full h-full bg-themegray-light placeholder:text-themegray-dark"
        />
      </div>
    </div>
  );
}

export default SearchBar;
