import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useSearchParams } from "react-router-dom";
import CstmDate from "../CstmDate";
import placeholder from "../../assets/images/placeholder-image.jpg";
import { debounce } from "lodash";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [articles, setArticles] = useState([]);
  const [formattedDate, setFormattedDate] = useState();
  const [search, setSearch] = useState(query);
  const [sortBy, setSortBy] = useState("publishedAt");
  const [language, setLanguage] = useState("en");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const apiKey = process.env.REACT_APP_NEWS_ORG_API_KEY;
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  useEffect(() => {
    const searchArticlesDebounced = debounce(searchArticles, 500);

    searchArticlesDebounced();

    return () => {
      searchArticlesDebounced.cancel();
    };
  }, [query, search, sortBy, language, fromDate, toDate]);

  const searchArticles = () => {
    let url = `https://newsapi.org/v2/everything?q=${search}`;

    if (sortBy) {
      url += `&sortBy=${sortBy}`;
    }

    if (language) {
      url += `&language=${language}`;
    }

    if (fromDate) {
      url += `&from=${fromDate}`;
    }
    if (toDate) {
      url += `&to=${toDate}`;
    }

    if (apiKey) {
      url += `&apiKey=${apiKey}`;
    }

    axios
      .get(url)
      .then((response) => {
        const { articles } = response.data;
        console.log(response);
        console.log("nice");
        setArticles(articles);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className="dont-miss-area pd-top-75 pd-bottom-50 go-top">
      <div className="container">
        <div className="section-title">
          <div className="row">
            <div className="col-6">
              <h6 className="title">The Search Result for - {query}</h6>
            </div>
            <div className="col-6 text-center text-md-right">
              {/* <Link className="btn-read-more" to="/blog-details">
                See More <i className="la la-arrow-right" />
              </Link> */}
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-3">
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="sortBy">Sort By:</label>
            <select
              id="sortBy"
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="publishedAt">Published At</option>
              <option value="relevancy">Relevancy</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="language">Language:</label>
            <select
              id="language"
              className="form-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-3">
            <label htmlFor="fromDate">From Date:</label>
            <input
              type="date"
              id="fromDate"
              className="form-control"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="toDate">To Date:</label>
            <input
              type="date"
              id="toDate"
              className="form-control"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          {articles.length === 0 ? (
            <div className="col-12 text-center">
              <h3>No search results found.</h3>
            </div>
          ) : (
            (articles.length > 8 ? articles.slice(0, 8) : articles).map(
              (article, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className="single-post-wrap style-box">
                    <div className="thumb">
                      {article.urlToImage && article.urlToImage.length > 0 ? (
                        <img src={article.urlToImage} alt={article.title} />
                      ) : (
                        <img src={placeholder} alt={imagealt} />
                      )}
                    </div>
                    <div className="details">
                      <div className="post-meta-single mb-4 pt-1">
                        <ul>
                          <li>
                            <Link
                              className="tag-base tag-yellow"
                              to="/cat-page"
                            >
                              {article.source.name}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h6 className="title">
                        <Link to={article.url} target="_blank">
                          {article.title}
                        </Link>
                      </h6>
                      <p>{article.description}</p>
                      <div className="spw-bottom">
                        <ul>
                          <li>
                            <div className="media">
                              <div className="media-body align-self-center">
                                <p>{article.author}</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <p>
                              <CstmDate date={article.publishedAt} />
                            </p>
                          </li>
                        </ul>
                        <div className="media-body text-right mt-1">
                          <Link to={article.url} target="_blank">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
