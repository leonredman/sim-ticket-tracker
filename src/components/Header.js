//import './HeaderMenu.css';
import React from 'react';

const Header = () => {
    return (
<div className="ui blue inverted menu">
  <div className="header item">
  Simple Issue Management
    <br /> 
    Tracking System
  </div>
  <a href="/" className="item">
    Tickets
  </a>
  <a href="/"className="item">
    Projects
  </a>
  <a href="/" className="item">
    Reports
  </a>
  <a href="/" className="item">
    User Roles
  </a>
</div>
    );
};

export default Header;