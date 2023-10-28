import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=India&apiKey=0c04805383b443859531d64ad67f5ab8');
       
            setNews(response.data.articles);
        
        
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);
console.log(news)

const filteredNews = news
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)) // Sort news based on the published date
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
  );
};

export default News;


{/* <div className="container">
  <div className="row">
    {news.slice(0, 20).map((article, index) => (
      <div key={index} className="col-md-3">
        <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
          <img
            src={article.urlToImage}
            className="card-img-top"
            alt="..."
            style={{ maxHeight: '200px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div> */}
