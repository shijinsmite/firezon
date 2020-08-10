import React from 'react';
import './Header.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img classN ame="header__logo" src={logo} alt="logo" />
      </Link>
    </nav>
  );
};

export default Header;
