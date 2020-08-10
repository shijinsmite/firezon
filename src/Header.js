import React from 'react';
import './Header.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Hello shijin</span>
            <span className="header__optionLineSecond">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineSecond">& orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineSecond">Prime</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header__optionLineSecond header__basketCount">
              0
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
