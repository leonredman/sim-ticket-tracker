import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const NewTicketsList = () => {
  const [newBuildList, setNewBuildList] = useState([]);

  //use Hook to get data and update component
  useEffect(() => {
    // Axios.get("http://localhost:3001/tickets").then((response) => {
    Axios.get("https://sim-ticket-tracker.herokuapp.com/tickets").then(
      (response) => {
        //console.log(response.data);   // show data object
        setNewBuildList(response.data);
      }
    );
  }, []);

  const status = "Ready";
  const newBuildCount = newBuildList.filter((obj) => obj.status === status);
  //console.log(newBuildCount);

  return (
    <div className="lists">
      <table className="ui fixed table">
        <thead>
          <tr>
            <th>Summary</th>
            <th>ShopperId</th>
            <th>Created</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {newBuildCount.map((post) => {
            return (
              <tr key={post.customerID}>
                <td>{post.category}</td>
                <td>{post.customerID}</td>
                <td>{post.created}</td>
                <td>{post.status}</td>
                <td>
                  <Link to={`/WorkTicket/${post.id}`}>
                    <i className="edit icon"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NewTicketsList;

// onClick={() => {
//   getTicket(val.id);
// }}
