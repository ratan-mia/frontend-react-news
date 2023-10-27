import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CstmDate from "../../CstmDate";
import placeholder from "../../../assets/images/placeholder-image.jpg";

const BusinessNews = () => {
  const [articles, setArticles] = useState([]);
  const [formattedDate, setFormattedDate] = useState();
  const apiKey = process.env.REACT_APP_NEWS_ORG_API_KEY;
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  useEffect(() => {
    const fetchBusinessNews = () => {
      axios
        .get(`https://newsapi.org/v2/everything?q=business&apiKey=${apiKey}`)
        .then((response) => {
          const { articles } = response.data;
          console.log(response);
          setArticles(articles);
        })
        .catch((error) => {
          console.error("Error fetching top news:", error);
        });
    };

    fetchBusinessNews();
  }, []);

  return (
    <div className="dont-miss-area pd-top-75 pd-bottom-50 go-top">
      <div className="container">
        <div className="section-title">
          <div className="row">
            <div className="col-6">
              <h6 className="title">Business News</h6>
            </div>
            <div className="col-6 text-center text-md-right">
              {/* <Link className="btn-read-more" to="/blog-details">
                See More <i className="la la-arrow-right" />
              </Link> */}
            </div>
          </div>
        </div>
        <div className="row">
          {(articles.length > 8 ? articles.slice(0, 8) : articles).map(
            (article, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="single-post-wrap style-box">
                  <div className="thumb">
                    {article.urlToImage && article.urlToImage.length > 0 ? (
                      <img src={article.urlToImage} alt={article.title} />
                    ) : (
                      // <div className="placeholder-image">No Image Available</div>
                      <img src={placeholder} />
                    )}

                    {/* <img src={article.urlToImage} alt={article.title} /> */}
                  </div>
                  <div className="details">
                    <div className="post-meta-single mb-4 pt-1">
                      <ul>
                        <li>
                          <Link className="tag-base tag-yellow" to="/cat-page">
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
                    {/* Render other article details */}
                    <div className="spw-bottom">
                      <ul>
                        <li>
                          <div className="media">
                            {/* <div className="media-left">
                            <img
                              src={publicUrl + "assets/img/post/1.png"}
                              alt="img"
                            />
                          </div> */}
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
                              <Link  to={article.url} target="_blank">
                                Read More
                              </Link>
                            </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessNews;
