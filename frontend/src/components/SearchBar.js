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
      <button className="search__button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
