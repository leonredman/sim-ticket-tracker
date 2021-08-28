import React from 'react'
// import data into dashboard
import data from "../../mockData/data.json";

// make data useable on dashboard

// make data pass as props to components on dashboard


function DevDashboard() {
  return (
    <div>
      <div className="ui-container-dash">
        <div className="ui grid">
          <div className="ui row">
            <h1>Welcome Dev Dashboard</h1>
          </div>

          {data.map((tickets) => {
           return (
             <h1>{tickets.customerName}</h1>
           )
          })};
          
        </div>
      </div>
    </div>
  );
};



export default DevDashboard;

