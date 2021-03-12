import React from "react";

import "./SearchBar.css";

const SearchBar = ({ onSearchChange, placeholder }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
