//import './HeaderMenu.css';
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui blue inverted menu">
      <Link to="/" className="item">
        SIMTraK
      </Link>

      <Link to="/loginPage" className="item">
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

      <div className="right menu">
        <h4
          className="ui header"
          style={{ color: "white", paddingTop: "10px", paddingRight: "20px" }}
        >
          <img
            src="https://semantic-ui.com/images/avatar/large/helen.jpg"
            alt="placeholder"
            className="ui tiny circular image"
          />
          Helen QA.
        </h4>
        <i
          className="bell outline icon"
          style={{ color: "white", paddingTop: "10px", paddingRight: "30px" }}
        ></i>
      </div>
    </div>
  );
};

export default Header;
