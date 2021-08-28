import "./Dashboard.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

// import data from '../data/data.json';
//import TicketTotals from '../components/TicketTotals';
//import InProgressTotals from '../components/InProgressTotals';
//import QaTotals from '../components/QaTotals';
//import CompletedTotals from '../components/CompletedTotals';
import NewTicketsList from "../../components/NewTicketsList";
import InProgressList from "../../components/InProgressList";
import InQaList from "../../components/InQaList";
import DashChart from "../../components/DashChart";
import Totals from "../../components/Totals";

// On line 17 create an array containing elements
// that representing each individual category e.g const statuses = ["Ready"]

const ticketStatuses = [{ status: "Ready", className: "ui red segment" }];

// const ticketStatuses = [
//   "Ready",
//   "Build In Progress",
//   "QA In Progress",
//   "Resolved",
// ];
// Delete the code rendering the boxes for the different type of tickets
// Map through array calling Total and pass `qaTotals`
//and the status e.g statuses.map((status) => <Total tickets={qaTotals} status={status} />)

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  //use Hook to get data and update component
  useEffect(() => {
    Axios.get("http://localhost:3001/tickets").then((response) => {
      //console.log(response.data);   // show data object
      setTickets(response.data);
    });
  }, []);

  return (
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
  );
};

export default Dashboard;
