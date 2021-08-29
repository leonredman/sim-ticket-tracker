import React, { useState, useEffect } from "react";
// import use params from react router dom to access url id
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

const WorkTicket = () => {
  const [workTicket, setWorkTicket] = useState({
    status: "",
    customerName: "",
    customerID: "",
    email: "",
    phoneNumber: "",
    domain: "",
    planType: "",
    created: "",
    dueDate: "",
    category: "",
    description: "",
    priority: "",
    websiteSpecialist: "",
    developer: "",
    agent: "",
  });

  // set variable id to params
  const { id } = useParams();

  //Hook to get data and update component using params
  useEffect(() => {
    Axios.get(`http://localhost:3001/ticket/${id}`).then((response) => {
      console.log(response.data); // show data object
      setWorkTicket(response.data);
    });
  });

  // function delete ticket
  const deleteTicket = (id) => {
    Axios.delete(`http://localhost:3001/ticket/delete/${id}`);
  };

  return (
    <div className=" ui container">
      <div className="ui divider"></div>

      <div className="WorkTicketContainer">
        <h1>Issue Ticket </h1>
        Web Design Services
        <div className="ui divider"></div>
        <div className="ui grid">
          <div className="row">
            <div className="two wide column">
              <Link to={`/UpdateForm/${id}`}>
                <button className="ui button">Edit</button>
              </Link>
            </div>
            <div className="two wide column">
              <button className="ui button">Comment</button>
            </div>
          </div>
          <div className="ui grid">
            <div className="row">
              <div className="three wide column">
                {/*  <h5>Ticket # SIM 9170{val.id}</h5>  */}
                <h5>Ticket # SIM 9170{workTicket.id}</h5>
              </div>
            </div>

            <div className="row">
              <div className="three wide column">
                Plan Type: -: {workTicket.planType}
              </div>
              <div className="three wide column">
                Status -: {workTicket.status}
              </div>
              <div className="three wide column">
                Category -: {workTicket.category}
              </div>
              <div className="three wide column">
                Priority -: {workTicket.priority}
              </div>
            </div>

            <div className="row">
              <div className="three wide column">
                Customer Name -: {workTicket.customerName}
              </div>
              <div className="three wide column">
                Customer Id -: {workTicket.customerID}
              </div>
              <div className="three wide column">
                Email -: {workTicket.email}
              </div>
              <div className="three wide column">
                Phone # -: {workTicket.phoneNumber}
              </div>
            </div>

            <div className="row">
              <div className="three wide column">
                Domain -: {workTicket.domain}
              </div>
              <div className="three wide column">
                Date Created -: {workTicket.created}
              </div>
              <div className="three wide column">
                Date Due -: {workTicket.dueDate}
              </div>
            </div>

            <div className="row">
              <div className="four wide column">
                Website Specialist -: {workTicket.websiteSpecialist}
              </div>
              <div className="three wide column">
                Developer -: {workTicket.developer}
              </div>
              <div className="three wide column">
                QA Agent -: {workTicket.qaAgent}
              </div>
            </div>

            <div className="row">
              <div className="three wide column">Description</div>
              <div className="three wide column">{workTicket.description}</div>
            </div>

            <div className="row">
              <div className="three wide column">Attachements</div>
              <div className="three wide column">
                <img
                  alt="placeholder1"
                  src="https://placeimg.com/100/100/any"
                />
              </div>
              <div className="three wide column">
                <img
                  alt="placeholder2"
                  src="https://placeimg.com/100/100/animals"
                />
              </div>
            </div>

            <div className="row">
              <div className="three wide column">History</div>
              <div className="six wide column">
                PlaceHolder History Feature Text Made Changes 8 hrs ago
              </div>
            </div>
            <div className="row">
              <div className="two wide column">
                <button
                  onClick={() => {
                    deleteTicket(workTicket.id);
                  }}
                  className="ui button"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTicket;
