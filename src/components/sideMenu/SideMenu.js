import "./SideMenu.css";
import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="ui visible sidebar blue inverted vertical menu">
      <div className="item">
        <div className="header">Role Manager</div>
        <div className="menu">
          <a href="/" className="item">
            Roles
          </a>
        </div>
      </div>
      <div className="item">
        <div className="header">Website Specialist</div>
        <div className="menu">
          <Link to="/Ws1Dashboard" className="item">
            WS1-Dash
          </Link>
        </div>
      </div>
      <div className="item">
        <div className="header">Developer Dash</div>
        <div className="menu">
          <Link to="/DevDashboard" className="item">
            Dev-Dash
          </Link>
        </div>
      </div>
      <div className="item">
        <div className="header">QA Dash</div>
        <div className="menu">
          <Link to="/QaDashboard" className="item">
            QA-Dash
          </Link>
        </div>
      </div>

      <div className="item">
        <div className="header">Reports</div>
        <div className="menu">
          <a href="/" className="item">
            Option 1
          </a>
          <a href="/" className="item">
            Option 2
          </a>
          <a href="/" className="item">
            Option 3
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
