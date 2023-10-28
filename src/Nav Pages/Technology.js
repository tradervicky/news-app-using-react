import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Common.css'

function Technology() {
    const [news, setNews] = useState([]);

    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0c04805383b443859531d64ad67f5ab8');
          
              setNews(response.data.articles);
          
          
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      };
  
      fetchNews();
    }, []);
  console.log(news)
  
  const filteredNews = news
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)) 
    .filter((article) => article.urlToImage);
    return (
      <div className="main-card">
          {filteredNews.map((article, index) => (
      <div className='news-container'>
          <div className="image-container">
              <img src={article.urlToImage} alt="image" />
          </div>
          <div className="heading">
              <h4>{article.title}</h4>
          </div>
          <div className="desc">
              <p>{article.description}</p>
          </div>
          <p style={{color:"gray"}} className="date">Published at : {new Date(article.publishedAt).toDateString()}</p>
          <a href={article.url}>read more</a>
        
      </div>  ))}
      </div>
  )
}

export default Technology