import React, { useState } from 'react';
import SearchResult from './SearchResult';

const SearchPopup = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('searchQuery');
    setSearchQuery(query);
  };

  return (
    <div className="td-search-popup active" id="td-search-popup">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-group">
          <input type="text" className="form-control" name="searchQuery" placeholder="Search....." />
        </div>
        <button type="submit" className="submit-btn"><i className="fa fa-search"></i></button>
      </form>
      {searchQuery && <SearchResult searchQuery={searchQuery} />}
    </div>
  );
};

export default SearchPopup;
