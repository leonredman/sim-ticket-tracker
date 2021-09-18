import React, { useState, useEffect } from "react";
import Axios from "axios";

const TicketTotals = () => {
  const [ticketTotals, setTicketTotals] = useState([]);

  //use Hook to get data and update component
  useEffect(() => {
    // Axios.get("http://localhost:3001/tickets").then((response) => {
    Axios.get("https://sim-ticket-tracker.herokuapp.com/tickets").then(
      (response) => {
        //console.log(response.data);   // show data object
        setTicketTotals(response.data);
        //console.log(ticketTotals);
      }
    );
  }, []);

  const status = "Ready";
  const newBuildCount = ticketTotals.filter(
    (obj) => obj.status === status
  ).length;

  return (
    <div className="totals">
      <p>{newBuildCount}</p>
    </div>
  );
};

export default TicketTotals;
