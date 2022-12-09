import React from "react";
import Header from "../../components/headerWS1/Header";
import SideMenu from "../../components/sideMenuWS1/SideMenu";
import "../adminDashboard/Dashboard.css";

// data to be passed as props
//import data from "../../mockData/data.json";

function Ws1Dashboard() {
  return (
    <fragment>
      <Header />
      <SideMenu />
      <div className="ui-container-dash">
        <div className="ui grid">
          <div className="ui row">
            <h1>Welcome WS1 Dashboard</h1>
            <div className="ui divider"></div>
          </div>

          <div className="ui centered grid">
            <div className="ui four column centered row">
              <div className="column">
                <div className="ui red segment">
                  Tickets Created in Last 7 Days
                  <div class="totals">
                    <p>34</p>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui blue segment">
                  Tickets In Progress Total
                  <div class="totals">
                    <p>57</p>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui green segment">
                  Tickets High Priority Total
                  <div class="totals">
                    <p>23</p>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui yellow segment">
                  Completed Total Tickets
                  <div class="totals">
                    <p>108</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ui two column centered row">
              <div className="column">
                <div className="ui red segment">
                  <h4>Emails Waiting For Support</h4>
                  <div class="lists">
                    <table class="ui fixed table">
                      <thead>
                        <tr>
                          <th>Summary</th>
                          <th>ShopperId</th>
                          <th>Created</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>New Build</td>
                          <td>159494593</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>214349459</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>349597949</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>349597950</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui blue segment">
                  <h4>All Tickets In Progress</h4>
                  <div class="lists">
                    <table class="ui fixed table">
                      <thead>
                        <tr>
                          <th>Summary</th>
                          <th>ShopperId</th>
                          <th>Created</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>New Build</td>
                          <td>159494593</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>214349459</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>349597949</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>349597950</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="ui two column centered row">
              <div className="column">
                <div className="ui red segment">
                  <h4>Tickets created by Category</h4>
                  <div class="ui fluid image">
                    <img
                      alt="chart"
                      src="https://raw.githubusercontent.com/leonredman/sim-ticket-tracker/ws1-dashboard/src/images/Chart-placeholder.png"
                    ></img>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui blue segment">
                  <h4>Clarifications Needing Acton</h4>
                  <div class="lists">
                    <table class="ui fixed table">
                      <thead>
                        <tr>
                          <th>Summary</th>
                          <th>ShopperId</th>
                          <th>Created</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>New Build</td>
                          <td>159494593</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>214349459</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>349597949</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>349597950</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}

export default Ws1Dashboard;
