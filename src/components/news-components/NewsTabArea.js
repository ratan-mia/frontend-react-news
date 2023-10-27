import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import placeholder from "../../assets/images/placeholder-image.jpg";
import advertisement from "../../assets/images/advertisement-placeholder.png";

const NewsArea = () => {
  const apiData = [
    {
      id: 1,
      apiUrl: "https://api.nytimes.com/svc/topstories/v2/arts.json",
      navItemName: "Arts",
    },
    {
      id: 2,
      apiUrl: "https://api.nytimes.com/svc/topstories/v2/science.json",
      navItemName: "Science",
    },
    {
      id: 3,
      apiUrl: "https://api.nytimes.com/svc/topstories/v2/home.json",
      navItemName: "Home",
    },

    {
      id: 4,
      apiUrl: " https://api.nytimes.com/svc/topstories/v2/us.json",
      navItemName: "US",
    },

    {
      id: 5,
      apiUrl: " https://api.nytimes.com/svc/topstories/v2/world.json",
      navItemName: "World",
    },
  ];

  const apiKey = process.env.REACT_APP_NYT_API_KEY; // Assuming the API key is the same for all APIs
  const [activeTab, setActiveTab] = useState(1);
  const [newsData, setNewsData] = useState([]);
  let publicUrl = process.env.PUBLIC_URL+'/'
  let imagealt = 'image'

  useEffect(() => {
    const fetchData = async () => {
      const activeApi = apiData.find((item) => item.id === activeTab);
      if (activeApi) {
        try {
          const response = await axios.get(activeApi.apiUrl, {
            params: { "api-key": apiKey },
          });
          const data = response.data.results.filter(news => news.title && news.abstract)
          setNewsData(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [activeTab, apiKey]);

  return (
    <div className="news-area pd-bottom-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 pd-top-80 go-top">
            <div className="how-news">
              <div className="section-title style-two mb-3">
                <div className="nxp-tab-inner nxp-tab-post style-two">
                  <ul className="nav nav-tabs" id="ex1" role="tablist">
                    {apiData.map(({ id, navItemName }) => (
                      <li className="nav-item" role="presentation" key={id}>
                        <a
                          className={`nav-link${
                            id === activeTab ? " active" : ""
                          }`}
                          id={`ex1-tab-${id}`}
                          onClick={() => setActiveTab(id)}
                          role="tab"
                          aria-selected={id === activeTab}
                        >
                          {navItemName}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="tab-content nxp-tab-content-2" id="ex1-content">
                {apiData.map(({ id }) => (
                  <div
                    className={`tab-pane fade${
                      id === activeTab ? " show active" : ""
                    }`}
                    id={`ex1-tabs-${id}`}
                    role="tabpanel"
                    key={id}
                  >
                    {id === activeTab &&
                      (newsData.length > 6
                        ? newsData.slice(0, 6)
                        : newsData
                      ).map((newsItem, index) => (
                        <div
                          className="single-post-list-wrap style-two"
                          key={index}
                        >
                          <div className="media">
                            <div className="media-left">
                              {newsItem.multimedia &&
                              newsItem.multimedia.length > 0 ? (
                                <img
                                  src={newsItem.multimedia[0].url}
                                  alt={newsItem.multimedia[0].caption}
                                  style={{ height: "200px", width: "276px" }}
                                />
                              ) : (
                                // <div className="placeholder-image">No Image Available</div>
                                <img
                                  src={placeholder}
                                  style={{ height: "200px", width: "276px" }}
                                />
                              )}
                            </div>
                            <div className="media-body align-self-center">
                              <div className="details">
                                <h6 className="title">
                                  <Link to={newsItem.url} target="_blank">
                                    {newsItem.title}
                                  </Link>
                                </h6>
                                <div className="post-meta-single">
                                  <ul>
                                    <li><em>{newsItem.byline}</em></li>
                                    <li>
                                      {new Date(newsItem.published_date).toLocaleDateString('en-US', {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit"
                                      })}
                                  </li>
                                  </ul>
                                </div>
                                <p>{newsItem.abstract}</p>
                                <Link className="btn btn-outline-primary" to={newsItem.url} target="_blank">
                                    Read More
                                  </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4 pd-top-80">
            <div className="category-sitebar">
              <div className="widget widget-add">
                <img
                  className="w-100"
                  src={advertisement}
                  alt="advertisement placeholder"
                />
              </div>
              <div className="widget">
                <form className="single-newsletter-inner bg-black">
                  <h5>Newsletter</h5>
                  <p>Stay Updated on all that's new add noteworthy</p>
                  <div className="single-input-inner">
                    <input type="text" placeholder="Enter Your Email" />
                  </div>
                  <a className="btn btn-white w-100" href="#">
                    Subscribe Now
                  </a>
                </form>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArea;
