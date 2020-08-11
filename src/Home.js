import React from 'react';
import Banner from './images/banner.jpg';
import Product from './Product';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <img className="home__image" src={Banner} alt="banner" />
      <div className="home__row">
        <Product
          id="1233"
          title="javascript wierd parts"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51x7FR7NP7L._AC_UY218_.jpg"
        />
        <Product
          id="1233"
          title="javascript wierd parts"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51x7FR7NP7L._AC_UY218_.jpg"
        />
        <Product
          id="1233"
          title="javascript wierd parts"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51x7FR7NP7L._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
