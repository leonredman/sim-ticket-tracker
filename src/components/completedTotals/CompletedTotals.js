import React, { useState, useEffect } from "react";
import Axios from "axios";

const CompletedTotals = () => {
  const [completedTotals, setCompletedTotals] = useState([]);

  //use Hook to get data and update component
  useEffect(() => {
    //Axios.get("http://localhost:3001/tickets").then((response) => {
    Axios.get("http://sim-ticket-tracker.herokuapp.com/tickets").then(
      (response) => {
        //console.log(response.data);   // show data object
        setCompletedTotals(response.data);
      }
    );
  }, []);

  const status = "Resolved";
  const completedTotalCount = completedTotals.filter(
    (obj) => obj.status === status
  ).length;

  return (
    <div className="totals">
      <p>{completedTotalCount}</p>
    </div>
  );
};

export default CompletedTotals;

// import React, { Component } from 'react';

// import data from '../database/data.json';

// // const newData = data.map( (data) => {
// //     console.log(data);
// // });

// const status = "Complete";
// const completeTotalCount = data.filter((obj) => obj.status === status).length;

// // console.log(completeTotalCount);

// class completedTotals extends Component {
//     constructor(props) {
//         super(props);

//         this.state={ completeTotalCount }
//     }

//     render() {
//         return (
//             <div className="totals">
//                 <p>{completeTotalCount}</p>
//             </div>
//     )};
// };

// export default completedTotals;
