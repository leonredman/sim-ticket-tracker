import React, { useState, useEffect } from "react";
import Axios from "axios";

// import data from '../database/data.json';

// const newData = data.map( (data) => {
//     console.log(data);
// });

const InProgressTotals = () => {
  const [inProgressTotals, setInProgressTotals] = useState([]);

  //use Hook to get data and update component
  useEffect(() => {
    // Axios.get("http://localhost:3001/tickets").then((response) => {
    Axios.get("http://sim-ticket-tracker.herokuapp.com/tickets").then(
      (response) => {
        //console.log(response.data);   // show data object
        setInProgressTotals(response.data);
      }
    );
  }, []);

  const status = "Build In Progress";
  const progressTotalCount = inProgressTotals.filter(
    (obj) => obj.status === status
  ).length;
  <count totalCount="progressTotalCount" />;

  return (
    <div className="totals">
      <p>{progressTotalCount}</p>
    </div>
  );
};

export default InProgressTotals;

//------------- Code for class component first prototype --------------
// const status = "In Progress";
// const progressTotalCount = data.filter((obj) => obj.status === status).length;

// // console.log(progressTotalCount);

// class inProgressTotals extends Component {
//     constructor(props){
//         super(props);

//         this.state={ progressTotalCount }
//     };

//     render() {
//         return (
//             <div className="totals">
//                 <p>{progressTotalCount}</p>
//             </div>
//         )};
//     };

// export default inProgressTotals;
