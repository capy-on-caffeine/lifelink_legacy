import React from 'react';
import '../stylesheets/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="../Images/icon.png" alt="Logo" />
        <span>Lifelink</span>
      </div>
      <div className="link"><a id="homeLink"><span>Home</span></a></div>
      <div className="link"><a id="aboutLink"><span>About Us</span></a></div>
      <div className="link"><a id="bloodLink"><span>Find Blood</span></a></div>
      <div className="link sign-in"><span>Sign In</span></div>
    </div>
  );
};

export default Navbar;
