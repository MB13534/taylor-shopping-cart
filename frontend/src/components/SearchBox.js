import React from "react";

import "./SearchBar.css";

const SearchBox = ({ onSearchChange, placeholder }) => {
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

export default SearchBox;
