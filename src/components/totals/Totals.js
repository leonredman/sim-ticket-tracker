import React from "react";

const Totals = ({ status, tickets }) => {
  const ticketTotalCount = tickets.filter(
    (ticket) => ticket.status === status
  ).length;
  // const ticketTotalCount = tickets.filter((ticket) => ticket.status !== status)
  return (
    <div className="column">
      <div className="totals ui blue segment">
        <h3>{status}</h3>
        <p>{ticketTotalCount}</p>
      </div>
    </div>
  );
};

export default Totals;
