import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-style">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src="/img/home_white.png" alt=""/>
      </Link>
    </nav>
  )
}

export default Navbar;