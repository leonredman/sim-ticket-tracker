import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
import Axios from "axios";

const QaTotals = () => {
  const [qaTotals, setQaTotals] = useState([]);

  //use Hook to get data and update component
  useEffect(() => {
    // Axios.get("http://localhost:3001/tickets").then((response) => {
    Axios.get("https://sim-ticket-tracker.herokuapp.com/tickets").then(
      (response) => {
        //console.log(response.data);   // show data object
        setQaTotals(response.data);
      }
    );
  }, []);

  const status = "QA In Progress";
  const qaTotalCount = qaTotals.filter((obj) => obj.status === status).length;

  return (
    <div className="totals">
      <p>{qaTotalCount}</p>
    </div>
  );
};

export default QaTotals;
