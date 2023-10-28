import React from "react";
import Navbar from "../../components/layout-components/Navbar";
import Footer from "../../components/layout-components/footer";
import SearchResult from "../../components/news-components/SearchResult";

function Search() {
  return (
    <>
      <Navbar />
      <SearchResult />
      <Footer />
    </>
  );
}

export default Search;
