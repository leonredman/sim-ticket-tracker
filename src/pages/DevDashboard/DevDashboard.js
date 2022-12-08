import "../adminDashboard/Dashboard.css";
import React from "react";
import Header from "../../components/headerDev/Header";
import SideMenu from "../../components/sideMenuDev/SideMenu";
// data to be passed as props
//import data from "../../mockData/data.json";

function DevDashboard() {
  return (
    <fragment>
      <Header />
      <SideMenu />
      <div className="ui-container-dash">
        <div className="ui grid">
          <div className="ui row">
            <h1>Developer Dashboard</h1>
            <div className="ui divider"></div>
          </div>

          <div className="ui centered grid">
            <div className="ui four column centered row">
              <div className="column">
                <div className="ui red segment">
                  Tickets Completed in Last 7 Days
                  <div class="totals">
                    <p>10</p>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui blue segment">
                  Tickets In Progress
                  <div class="totals">
                    <p>1</p>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui green segment">
                  Tickets High Priority
                  <div class="totals">
                    <p>2</p>
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
                  <h4>My Tickets</h4>
                  <div class="lists">
                    <table class="ui fixed table">
                      <thead>
                        <tr>
                          <th>Summary</th>
                          <th>Ticket</th>
                          <th>Created</th>
                          <th>Status</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>New Build</td>
                          <td>SIM 917011</td>
                          <td>9/1/22</td>
                          <td>In Progress</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Revisions</td>
                          <td>SIM 917055</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>SIM 917078</td>
                          <td>9/1/22</td>
                          <td>QA Needs Edits</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>SIM 91702345</td>
                          <td>9/1/22</td>
                          <td>Ready</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="ui pagination menu">
                      <div className="active item">1</div>
                      <div className="disabled item">...</div>
                      <div className="item">10</div>
                      <div className="item">11</div>
                      <div className="item">12</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui blue segment">
                  <h4>New Builds Ready</h4>
                  <div class="lists">
                    <table class="ui fixed table">
                      <thead>
                        <tr>
                          <th>Ticket</th>
                          <th>Plan Type</th>
                          <th>Created</th>
                          <th>Due Date</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SIM 917023</td>
                          <td>Premium</td>
                          <td>9/1/22</td>
                          <td>9/10/22</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>SIM 917001</td>
                          <td>Standard</td>
                          <td>9/1/22</td>
                          <td>9/10/22</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>SIM 917002</td>
                          <td>Premium</td>
                          <td>9/1/22</td>
                          <td>9/10/22</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>SIM 917023</td>
                          <td>E-Commerce</td>
                          <td>9/1/22</td>
                          <td>9/10/22</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="ui pagination menu">
                      <div className="active item">1</div>
                      <div className="disabled item">...</div>
                      <div className="item">10</div>
                      <div className="item">11</div>
                      <div className="item">12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ui two column centered row">
              <div className="column">
                <div className="ui red segment">
                  <h4>My Tickets Pending QA</h4>
                  <div class="lists">
                    <table class="ui fixed table">
                      <thead>
                        <tr>
                          <th>Ticket</th>
                          <th>ShopperId</th>
                          <th>Created</th>
                          <th>Status</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SIM 917023</td>
                          <td>159494593</td>
                          <td>9/1/22</td>
                          <td>Ready For QA</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>SIM 917045</td>
                          <td>214349459</td>
                          <td>9/1/22</td>
                          <td>QA In Progress</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="ui pagination menu">
                      <div className="active item">1</div>
                      <div className="disabled item">...</div>
                      <div className="item">10</div>
                      <div className="item">11</div>
                      <div className="item">12</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui blue segment">
                  <h4>New Revisions Ready</h4>
                  <div class="lists">
                    <table class="ui fixed table">
                      <thead>
                        <tr>
                          <th>Ticket</th>
                          <th>Plan Type</th>
                          <th>Created</th>
                          <th>Due Date</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SIM 917089</td>
                          <td>Standard</td>
                          <td>9/1/22</td>
                          <td>9/10/22</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>SIM 917090</td>
                          <td>E-Commerce</td>
                          <td>9/1/22</td>
                          <td>9/10/22</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>SIM 917027</td>
                          <td>Standard</td>
                          <td>9/1/22</td>
                          <td>9/10/22</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>SIM 917023</td>
                          <td>Premium</td>
                          <td>9/1/22</td>
                          <td>9/10/22</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="ui pagination menu">
                      <div className="active item">1</div>
                      <div className="disabled item">...</div>
                      <div className="item">10</div>
                      <div className="item">11</div>
                      <div className="item">12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ui two column centered row">
              <div className="column">
                <div className="ui red segment">
                  <h4>Tickets Completed by Category</h4>
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
                  <h4>Tech Clarifications Ready</h4>
                  <div class="lists">
                    <table class="ui fixed table">
                      <thead>
                        <tr>
                          <th>Ticket</th>
                          <th>Plan Type</th>
                          <th>Created</th>
                          <th>Clarification Type</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SIM 917125</td>
                          <td>E-Commerce</td>
                          <td>9/1/22</td>
                          <td>Critical Error</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>SIM 917223</td>
                          <td>Standard</td>
                          <td>9/1/22</td>
                          <td>Internal Tools Needed</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>SIM 917872</td>
                          <td>Premium</td>
                          <td>9/1/22</td>
                          <td>Other Troubleshooting</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>SIM 917355</td>
                          <td>Standard</td>
                          <td>9/1/22</td>
                          <td>Other Troubleshooting</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="ui pagination menu">
                      <div className="active item">1</div>
                      <div className="disabled item">...</div>
                      <div className="item">10</div>
                      <div className="item">11</div>
                      <div className="item">12</div>
                    </div>
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

export default DevDashboard;

// map data
// {data.map((tickets) => {
//   return <h1>{tickets.customerName}</h1>;
// })}
// ;
