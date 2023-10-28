import React, { useState, useEffect } from 'react';
import './Navbar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [UPSC, setUPSC] = useState([]);
  const navigate = useNavigate();
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=UPSC&apiKey=0c04805383b443859531d64ad67f5ab8'
        );
        setUPSC(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = UPSC.filter((article) => article.urlToImage);

  const politics = () => {
    navigate('/politics');
  };
  const upsc = () => {
    navigate('/upsc');
  };
  const sports = () => {
    navigate('/sports');
  };
  const finance = () => {
    navigate('/finance');
  };
  const logoClick = () => {
    navigate('/');
  };
  const Technology = () => {
    navigate('/technology');
  };
  const International = () => {
    navigate('/global');
  };
  
const handleClick = ()=>{
  if(!query){
    return
  }
  else{
    navigate(`/search?query=${query}`)
  }
  
}

  return (
    <div>
      <div className="main-nav">
        <div className="logo">
          <h3 onClick={logoClick} style={{cursor:"pointer"}}>News App</h3>
        </div>
        <div className="list-element">
          <ul>
            <li onClick={upsc}>UPSC</li>
            <li onClick={finance}>FINANCE</li>
            <li onClick={sports}>SPORTS</li>
            <li onClick={politics}>HEALTH</li>
            <li onClick={Technology}>TECHNOLOGY</li>
            <li onClick={International}>GLOBAL</li>
          </ul>
        </div>
        <div className="search-box">
          <input type="text" placeholder="e.g sports" onChange={(e)=>setQuery(e.target.value)} />
          <button onClick={handleClick}>search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
