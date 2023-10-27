import React, { useState } from 'react';
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchPopup = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/search?query=${searchQuery}`);
    navigate({
        pathname: "search",
        search: createSearchParams({
            query: searchQuery
        }).toString()
    });
  };

  return (
    <div className="td-search-popup active" id="td-search-popup">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="searchQuery"
            placeholder="Search....."
            value={searchQuery}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchPopup;
