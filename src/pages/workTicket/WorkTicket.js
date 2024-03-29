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
    //Axios.get(`http://localhost:3001/ticket/${id}`).then((response) => {
    Axios.get(`https://simtrak-database.herokuapp.com/ticket/${id}`).then(
      (response) => {
        console.log(response.data); // show data object
        setWorkTicket(response.data);
      }
    );
  }, [id]);

  // function delete ticket
  const deleteTicket = (id) => {
    //Axios.delete(`http://localhost:3001/ticket/delete/${id}`);
    Axios.delete(
      `https://simtrak-database.herokuapp.com/ticket/delete/${id}`
    ).then((response) => {
      alert("successful Delete");
    });
  };

  return (
    <div className="ui container">
      <div className="ui divider"></div>

      <div className="WorkTicketContainer">
        <div className="ui grid">
          <div className="row">
            <div className="seven wide column">
              Web Design Services
              <h3>Issue Ticket # SIM 9170{workTicket.id} </h3>
            </div>

            <div className="three wide column">
              <Link to={`/UpdateForm/${id}`}>
                <button class="ui basic button">
                  <i
                    className="edit outline icon"
                    style={{ color: "#4183c4" }}
                  ></i>
                  Edit Ticket
                </button>
              </Link>
            </div>

            <div className="three wide column" style={{ color: "#4183c4" }}>
              <button
                class="ui basic button"
                onClick={() => {
                  deleteTicket(workTicket.id);
                }}
              >
                <i className="blue trash alternate outline icon"></i>
                Delete Ticket
              </button>
            </div>
            <div className="three wide column">
              <div
                className="ui large pointing basic label"
                style={{ marginTop: 0 }}
              >
                {workTicket.status}
              </div>
            </div>
          </div>
        </div>

        <h4>
          Submitted by WS1: {workTicket.websiteSpecialist} on{" "}
          {workTicket.created}{" "}
        </h4>
        <div className="ui divider"></div>

        <div className="ui raised segment">
          <div className="ui grid">
            <div className="row"></div>
            <div className="ui grid">
              <div className="row">
                <div className="thirteen wide column">
                  <h2>
                    {workTicket.planType} {workTicket.category} Ticket
                  </h2>

                  <div>Customer Id: {workTicket.customerID}</div>
                  <br />
                  <div> Domain: {workTicket.domain}</div>
                </div>
                <div className="three wide column">
                  Priority: {workTicket.priority}
                  <br />
                  <br />
                  Date Due: {workTicket.dueDate}
                  <br />
                  <br />
                  Developer: {workTicket.developer}
                  <br />
                  QA Agent: {workTicket.qaAgent}
                </div>
              </div>

              <div className="row">
                <div className="four wide column">
                  Customer Name: {workTicket.customerName}
                </div>

                <div className="three wide column">
                  Email: {workTicket.email}
                </div>
                <div className="three wide column">
                  Phone: {workTicket.phoneNumber}
                </div>
              </div>

              <div className="row">
                <div className="three wide column">Description</div>
                <div className="eight wide column">
                  {workTicket.description}
                </div>
              </div>

              <div className="row">
                <div className="sixteen wide column">Attachements</div>
                <br />
                <br />
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

                <div className="three wide column">
                  <img
                    alt="placeholder1"
                    src="https://placeimg.com/100/100/nature"
                  />
                </div>
                <div className="three wide column">
                  <img
                    alt="placeholder1"
                    src="https://placeimg.com/100/100/castle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui raised segment">
          <div className="ui grid">
            <div className="row">
              <div className="column">
                <h3>Activity</h3>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <i className="blue user circle icon"></i>
              </div>
              <div className="six wide column">
                <h4>Steve Rogers added a comment 6 days ago</h4>
                <div>Customer Name: Steve Rogers </div>
                <div>Call Type: Inbound </div>
                <div> Customer Type: Existing Customer </div>
                <div>Domain:ThisWorks5.com</div>
                <div>Reason For Call: CCI to check on status of Ticket</div>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <i className="blue user circle icon"></i>
              </div>
              <div className="six wide column">
                <h4>Travis Scott added a comment 4 days ago</h4>
                <div>Developer Starting Ticket </div>
              </div>
            </div>

            <div className="row">
              <div className="thirteen wide column">
                <div className="ui form">
                  <div className="field">
                    <label>Text</label>
                    <textarea placeholder="Add a comment..."></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTicket;
