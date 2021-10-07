import React, { useState } from "react";
import Axios from "axios";

// we set the state for the form
const TicketForm = () => {
  const [status, setStatus] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerID, setCustomerID] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [domain, setDomain] = useState("");
  const [planType, setPlanType] = useState("");
  const [created, setCreated] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [websiteSpecialist, setWebsiteSpecialist] = useState("");
  const [developer, setDeveloper] = useState("");
  const [qaAgent, setQaAgent] = useState("");

  //function to POST/SEND data to backend/database executed on button click
  const submitTicket = () => {
    //Axios.post("http://localhost:3001/ticket/create", {
    Axios.post("https://simtrak-database.herokuapp.com/ticket/create", {
      status: status,
      customerName: customerName,
      customerID: customerID,
      email: email,
      phoneNumber: phoneNumber,
      domain: domain,
      planType: planType,
      created: created,
      dueDate: dueDate,
      category: category,
      description: description,
      priority: priority,
      websiteSpecialist: websiteSpecialist,
      developer: developer,
      qaAgent: qaAgent,
    }).then(() => {
      alert("successful insert");
      // try to redirect
      // window.location.href = "/Dashboard";
    });
  };

  return (
    <div className="newTicketContainer">
      <div className="ui grid">
        <div className="ui row">
          <div className="six wide centered column">
            <h1>Create A New Ticket</h1>
          </div>
        </div>

        <div className="ui row"></div>

        <div className="six wide centered column">
          <div className="ui form">
            <div className="fields">
              <div className="six wide field">
                <label>Customer Name</label>
                <input
                  type="text"
                  name="customerName"
                  placeholder="Full Name"
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Customer ID Number</label>
                <input
                  type="text"
                  name="customerID"
                  placeholder="xxxxxxxxx"
                  maxLength="9"
                  onChange={(e) => {
                    setCustomerID(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Status</label>
                <select
                  className="ui dropdown"
                  name="status"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option value="">Select</option>
                  <option value="Ready">Ready</option>
                </select>
              </div>
            </div>

            <div className="fields">
              <div className="eight wide field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Susan@email.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="(xxx) xxx xxxx"
                  maxLength="14"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Domain</label>
                <input
                  type="text"
                  name="domain"
                  placeholder="CustomerSite.com"
                  onChange={(e) => {
                    setDomain(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="fields">
              <div className="six wide field">
                <label>Plan Type</label>
                <select
                  className="ui dropdown"
                  name="planType"
                  onChange={(e) => {
                    setPlanType(e.target.value);
                  }}
                >
                  <option value="">Select</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                  <option value="Woo-Commerce">Woo-Commerce</option>
                </select>
              </div>

              <div className="six wide field">
                <label>Created</label>
                <input
                  type="date"
                  name="created"
                  onChange={(e) => {
                    setCreated(e.target.value);
                  }}
                />
              </div>

              <div className="five wide field">
                <label>Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  onChange={(e) => {
                    setDueDate(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="fields">
              <div className="four wide field">
                <label>Category</label>
                <select
                  className="ui dropdown"
                  name="category"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option value="">Select</option>
                  <option value="New Build">New Build</option>
                  <option value="Revisions">Revisions</option>
                  <option value="Post Publish">Post Publish</option>
                </select>
              </div>

              <div className="twelve wide field">
                <label>Description</label>
                <input
                  type="text"
                  name="created"
                  placeholder="Notes"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>

              <div className="four wide field">
                <label>Priority</label>
                <select
                  className="ui dropdown"
                  name="priority"
                  onChange={(e) => {
                    setPriority(e.target.value);
                  }}
                >
                  <option value="">Select</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            <div className="fields">
              <div className="six wide field">
                <label>Website Specialist</label>
                <select
                  className="ui dropdown"
                  name="websiteSpecialist"
                  onChange={(e) => {
                    setWebsiteSpecialist(e.target.value);
                  }}
                >
                  <option value="">Select</option>
                  <option value="Tom Cruize">Tom Cruize</option>
                  <option value="Brad Pitt">Brad Pitt</option>
                  <option value="Russel Crow">Russel Crow</option>
                </select>
              </div>
            </div>

            <div className="fields">
              <div className="six wide field">
                <label>Developer</label>
                <select
                  className="ui dropdown"
                  name="developer"
                  onChange={(e) => {
                    setDeveloper(e.target.value);
                  }}
                >
                  <option value="">Select</option>
                  <option value="Tom Cruize">Tom Cruize</option>
                  <option value="Brad Pitt">Brad Pitt</option>
                  <option value="Russel Crow">Russel Crow</option>
                </select>
              </div>
            </div>
            <div className="fields">
              <div className="six wide field">
                <label>QA Agent</label>
                <select
                  className="ui dropdown"
                  name="qaAgent"
                  onChange={(e) => {
                    setQaAgent(e.target.value);
                  }}
                >
                  <option value="">Select</option>
                  <option value="Tom Cruize">Tom Cruize</option>
                  <option value="Brad Pitt">Brad Pitt</option>
                  <option value="Russel Crow">Russel Crow</option>
                </select>
              </div>
            </div>

            <br />
            <button className="ui button primary" onClick={submitTicket}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
