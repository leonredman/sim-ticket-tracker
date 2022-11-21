//import './HeaderMenu.css';
import React from "react";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className="ui blue inverted menu">
      <Link to="/" className="item">
        SIMTraK
      </Link>

      <Link to="/loginPage" className="item">
        Login
      </Link>
      <Link to="/AccountRegister" className="item">
        Register
      </Link>
    </div>
  );
};

export default LoginHeader;
