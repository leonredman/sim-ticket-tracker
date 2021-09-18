import "./Dashboard.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

import NewTicketsList from "../../components/newTicketsList/NewTicketsList";
import InProgressList from "../../components/inProgressList/InProgressList";
import InQaList from "../../components/inQaList/InQaList";
import DashChart from "../../components/dashChart/DashChart";
import Totals from "../../components/totals/Totals";
import SideMenu from "../../components/sideMenu/SideMenu";

const ticketStatuses = [
  { status: "Ready", className: "ui red segment" },
  { status: "Build In Progress", className: "ui blue segment" },
  { status: "QA In Progress", className: "ui green segment" },
  { status: "Resolved", className: "ui green segment" },
];

// Array of statuses for creating ticket totals
// const ticketStatuses = [
//   "Ready",
//   "Build In Progress",
//   "QA In Progress",
//   "Resolved",
// ];

//set ticket equal to state
const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  //use Hook to get data and set response date to tickets in state and update component on load
  useEffect(() => {
    // Axios.get("http://localhost:3001/tickets").then((response) => {
    Axios.get("https://sim-ticket-tracker.herokuapp.com/tickets").then(
      (response) => {
        //console.log(response.data);   // show data object
        setTickets(response.data);
      }
    );
  }, []);

  return (
    <fragement>
      <SideMenu />
      <div className="ui-container-dash">
        <div className="ui grid">
          <div className="ui row">
            <div className="ui divider"></div>
            <h2 className="ui header">Welcome Admin</h2>
            <div className="ui divider"></div>
          </div>

          <div className="ui centered grid">
            <div className="ui four column centered row">
              {ticketStatuses.map((statusObj) => (
                <Totals tickets={tickets} status={statusObj.status} />
              ))}
            </div>

            <div className="ui two column centered row">
              <div className="column">
                <div className="ui red segment">
                  <h4>New Tickets</h4>
                  <NewTicketsList />
                </div>
              </div>

              <div className="column">
                <div className="ui blue segment">
                  <h4>Tickets In Progress</h4>
                  <InProgressList />
                </div>
              </div>
            </div>

            <div className="ui two column centered row">
              <div className="column">
                <div className="ui violet segment">
                  <div className="ui fluid image">
                    <h4>Ticket Status Overview</h4>
                    <div className="chart">
                      <DashChart />
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui green segment">
                  <h4>Tickets In QA</h4>
                  <InQaList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragement>
  );
};

export default Dashboard;
