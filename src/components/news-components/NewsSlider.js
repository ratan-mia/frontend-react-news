import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const NewsSlider = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_NYT_API_KEY;
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
   
        setTopStories(data.results?.slice(0, 5));
      })
      .catch((error) => {
        console.error('Error fetching stories:', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="most-view-news bg-black pd-top-75 pd-bottom-80">
      <div className="container">
        <div className="section-title style-white pb-3 text-center"></div>
        <Slider {...settings}>
          {topStories.map((story, index) => (
            <div className="item" key={index}>
              <div className="single-most-view-inner">
                <div className="single-post-wrap style-overlay">
                  <div className="thumb m-1">
                    {story.multimedia && story.multimedia.length > 0 && (
                      <img
                        src={story.multimedia[0].url}
                        alt={story.multimedia[0].caption}
                        style={{ height: '500px', width: 'auto' }}
                      />
                    )}
                  </div>
                  <div className="details">
                    <div className="post-meta-single">
                      <Link className="tag-base tag-blue" to="/cat-page">
                        {story.section}
                      </Link>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">{story.title}</Link>
                    </h6>
                    <div className="post-meta-single mb-0">
                      <ul>
                        <li>By {story.byline}</li>
                        <li>{story.published_date}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewsSlider;
