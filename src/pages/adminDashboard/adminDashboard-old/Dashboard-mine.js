import "./Dashboard.css";
import React, { Component } from "react";

// import data from '../data/data.json';
import TicketTotals from "../components/TicketTotals";
import InProgressTotals from "../../components/InProgressTotals";
import QaTotals from "../../components/QaTotals";
import CompletedTotals from "../components/CompletedTotals";
import NewTicketsList from "../../components/NewTicketsList";
import InProgressList from "../../components/InProgressList";
import InQaList from "../../components/InQaList";
import DashChart from "../../components/DashChart";

class dashboard extends Component {
  render() {
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
              <div className="column">
                <div className="ui red segment">
                  New Tickets
                  <TicketTotals />
                </div>
              </div>

              <div className="column">
                <div className="ui blue segment">
                  Tickets In Progress
                  <InProgressTotals />
                </div>
              </div>

              <div className="column">
                <div className="ui green segment">
                  Tickets In QA
                  <QaTotals />
                </div>
              </div>

              <div className="column">
                <div className="ui yellow segment">
                  Completed Tickets
                  <CompletedTotals />
                </div>
              </div>
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
  }
}

export default dashboard;
