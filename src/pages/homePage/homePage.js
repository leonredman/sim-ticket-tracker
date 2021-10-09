import React from "react";
import "../../pages/homePage/homeStyles.css";

const HomePage = () => {
  return (
    <div>
      <div className="ui-container-home" id="homeBackgroundImg">
        <div>
          <div className="ui grid">
            <div className="seven wide column">
              <h1 className="hero-title">
                We Track Tickets. You Track Solutions
              </h1>
              <p className="hero-text">
                SIMTraK is a secure, easy-to-use, simple issue management
                application designed for teams. Easily create tickets, roles,
                attachments, and more – letting individual members focus on what
                matters.
              </p>
              <button className="ui button" id="hero-button">
                Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
        className="ui vertical stripe segment"
      >
        <div className="ui middle aligned stackable grid container">
          <div className="centered row">
            <div className="six wide centered column">
              <div className="ui text container">
                <h1>Stay On Track To Hit Your Goals</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="eight wide column">
              <img
                className="ui medium image"
                src="https://semantic-ui.com/images/wireframe/image.png"
                alt="placeholder"
              />
            </div>

            <div className="eight wide right floated column">
              <h2 className="ui header">A Management Tool thats Easy To Use</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
        className="ui inverted vertical stripe segment"
      >
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <h3 className="header">Features - The Big Picture</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>

            <div className="eight wide floated right column">
              <img
                className="ui medium image"
                src="https://semantic-ui.com/images/wireframe/image.png"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
        className="ui vertical stripe segment"
      >
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <img
                className="ui medium image"
                src="https://semantic-ui.com/images/wireframe/image.png"
                alt="placeholder"
              />
            </div>

            <div className="eight wide right floated column">
              <h2 className="ui header">User Management</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
