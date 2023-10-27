import React from "react";
import Navbar from "../../components/layout-components/navbar";
import Footer from "../../components/layout-components/footer";
import SearchResult from "../../components/news-components/SearchResult";

function SearchResultPage() {
  return (
    <>
      <Navbar />
      <SearchResult />
      <Footer />
    </>
  );
}

export default SearchResultPage;
