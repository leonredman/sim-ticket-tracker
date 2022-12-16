import "../adminDashboard/Dashboard.css";
import React from "react";
import Header from "../../components/headerQA/Header";
// data to be passed as props
// import data from "../../mockData/data.json";

function QaDashboard() {
  return (
    <div>
      <Header />
      <div className="ui-container-dash">
        <div className="ui grid">
          <div className="ui row">
            <h1>QA Dashboard</h1>
            <div className="ui divider"></div>
          </div>

          <div className="ui centered grid">
            <div className="ui four column centered row">
              <div className="column">
                <div className="ui red segment">
                  QA Tickets Completed in Last 7 Days
                  <div class="totals">
                    <p>10</p>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui blue segment">
                  QA Tickets In Progress
                  <div class="totals">
                    <p>1</p>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui green segment">
                  QA Tickets High Priority
                  <div class="totals">
                    <p>2</p>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="ui yellow segment">
                  QA Completed Total Tickets
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
                          <td>QA In Progress</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Revisions</td>
                          <td>SIM 917055</td>
                          <td>9/1/22</td>
                          <td>Ready For QA</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>SIM 917078</td>
                          <td>9/1/22</td>
                          <td>QA Edits Complete</td>
                          <td>
                            <i className="edit icon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>New Build</td>
                          <td>SIM 91702345</td>
                          <td>9/1/22</td>
                          <td>Ready For QA</td>
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
                  <h4>New Builds Ready For QA</h4>
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
                  <h4>Revisions Ready For QA</h4>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default QaDashboard;
