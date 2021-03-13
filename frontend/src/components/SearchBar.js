import React from "react";

import "./SearchBar.css";

const SearchBar = ({ onSearchChange, placeholder }) => {
  const searchBar = document.querySelector(".search");

  const handleClick = () => {
    searchBar.classList.toggle("inactive");
  };

  return (
    <div className="search">
      <input
        // style={{ width: displayClass }}
        className="search__input"
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />

      <button className="search__button" onClick={handleClick}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
