import React from 'react';
import Banner from './images/banner.jpg';
import './Home.css';


const Home = () => {
  return (
    <div className="home">
      <img className="home__image" src={Banner} alt="banner"/>
    </div>
  );
};

export default Home;
