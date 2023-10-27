import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useNewsData = (apiUrl, apiKey) => {
    const [newsData, setNewsData] = useState([]);
  
    useEffect(() => {
      fetchNewsData();
    }, []);
  
    const fetchNewsData = () => {
      axios
        .get(apiUrl, {
          params: {
            'api-key': apiKey,
          },
        })
        .then(response => {
          setNewsData(formatNewsData(response.data.results));
        })
        .catch(error => {
          console.error('Error fetching news data:', error);
        });
    };
  
    const formatNewsData = newsData => {
      return newsData.map(newsItem => ({
        title: newsItem.title,
        byline: newsItem.byline,
        published_date: newsItem.published_date,
        abstract: newsItem.abstract,
        image: newsItem.multimedia[0].url,
      }));
    };
  
    return newsData;
  };

  export default useNewsData;