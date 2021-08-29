//import './HeaderMenu.css';
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui blue inverted menu">
      <div className="header item">
        Simple Issue Manager
        <br />
        Tracking System
      </div>
      <Link to="/" className="item">
        Login
      </Link>
      <Link to="/Dashboard" className="item">
        Dashboard
      </Link>
      <Link to="/Tickets/:id" className="item">
        Create Ticket
      </Link>
      <Link to="/WorkTicket" className="item">
        Work Ticket
      </Link>
    </div>
  );
};

export default Header;
