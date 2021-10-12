import React from "react";
import "../../pages/homePage/homeStyles.css";
import { Link } from "react-router-dom";

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
              <Link to="/Dashboard" className="item">
                <button className="ui button" id="hero-button">
                  Demo
                </button>
              </Link>
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
                className="ui large image"
                src="https://brainhub.eu/library/gfx/best-issue-tracking-systems-jira-2048x1180.png"
                alt="placeholder"
              />
            </div>

            <div className="eight wide right floated column">
              <h2 className="ui header">A Management Tool thats Easy To Use</h2>
              <p>
                Tickets are the core of the application. Every approved member
                can create tickets, allowing for problems to become trackable
                faster. On every ticket your team can communicate easily with
                comments & attachments to expand on the software issue. Each
                ticket contains a log of all changes made to that ticket.
                Tickets are stored forever so they can always be referenced
                later if needed.
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
                Upon first logging in, every user is greeted with a dashboard.
                Here you can view the overall health of your projects with
                graphs, as well as an action center to make team members aware
                of the priorities. <br></br>
                <br></br>Ticket Timeline View: The trends by day to see when
                tickets are created vs when they are resolved. <br></br>
                <br></br>
                Tickets by Type: See the latest data on where your ticket types
                are stacking up. Backend, Frontend, etc – focus where help is
                needed.
                <br></br>
                <br></br>
                Tickets by Status Are there high amounts of tickets in the
                pending status? Here’s where you’d see it.
              </p>
            </div>

            <div className="eight wide floated right column">
              <img
                className="ui large image"
                src="https://hrfilecenter.com/images/Banner2.jpg"
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
                className="ui large image"
                src="https://wac-cdn.atlassian.com/dam/jcr:269b314e-9bf7-463f-afbc-c403c79b617d/code%20in%20jira%20view.png?cdnVersion=1843"
                alt="placeholder"
              />
            </div>

            <div className="eight wide right floated column">
              <h2 className="ui header">User Management</h2>
              <p>
                Every user can be assigned one of four roles. While the SIMTrak
                looks similar for all roles, the focus is different for each.
                Admin has unlimited control over every project, every ticket,
                and every user. His/her workflow is generally more focused on
                the entire system, not individual projects. Project Manager can
                control what happens with his/her own projects. The workflow is
                focused on the project level. Developer is focused on the
                ticket-level view. His/her workflow is heavily leaning towards
                viewing their assigned tickets. Submitter is focused on
                submitting tickets. This role is great for any customer-facing
                team member who is not involved in any code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
