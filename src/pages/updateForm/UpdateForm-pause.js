import React, { useState, useEffect } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import Axios from "axios";

import TextField from "../ui/text-field";

// we set the state for the form
const TicketForm = () => {
  const match = useRouteMatch();
  const [values, setValues] = useState({
    status: undefined,
    customerName: "",
    customerID: "",
    email: "",
    phoneNumber: "",
    domain: "",
    planType: undefined,
    created: new Date(),
    dueDate: "",
    category: undefined,
    description: "",
    priority: undefined,
    websiteSpecialist: undefined,
    developer: undefined,
    qaAgent: undefined,
  });

  const { id } = useParams();

  useEffect(() => {
    if (match.id !== "new") {
      // use your fetch/axios to load the ticket data
      Axios.get(`http://localhost:3001/ticket/${id}`).then((response) => {
        //console.log(response.data);
        // const values = response.data;
        // console.log(values[0].customerName);
        //.then(json => setValues(json)))
        setValues(response.data);
      });
    }
  }, [id, match.id]);

  //function to POST/SEND data to backend/database executed on button click
  const submitTicket = () => {
    Axios.post("http://localhost:3001/api/insert", values).then(() => {
      // alert("successful insert");
      // try to redirect
      window.location.href = "/Dashboard";
    });
  };

  console.log(values);

  return (
    <div className="newTicketContainer">
      <div className="ui grid">
        <div className="ui row">
          <div className="six wide centered column">
            <h1>Update Ticket</h1>
          </div>
        </div>

        <div className="ui row"></div>

        {/*{showTicket.map((value) => {
          return (
          */}
        <div className="six wide centered column">
          <div className="ui form">
            <div className="fields">
              <div className="six wide field">
                <TextField
                  label="Customer Name"
                  value={values.customerName}
                  placeholder="Full Name"
                  onChange={(customerName) =>
                    setValues((prev) => ({
                      ...prev,
                      customerName,
                    }))
                  }
                />
              </div>

              <div className="six wide field">
                <TextField
                  label="Customer ID Number"
                  value={values.customerID}
                  placeholder="xxxxxxxxx"
                  maxLength={9}
                  onChange={(customerID) =>
                    setValues((prev) => ({
                      ...prev,
                      customerID,
                    }))
                  }
                />
              </div>

              <div className="six wide field">
                <label>Status</label>
                <select
                  className="ui dropdown"
                  name="status"
                  onChange={(e) => {
                    const status = e.target.value;
                    setValues((prev) => ({
                      ...prev,
                      status,
                    }));
                  }}
                >
                  <option value="">Select</option>
                  <option value="Ready">Ready</option>
                </select>
              </div>
            </div>

            <div className="fields">
              <div className="eight wide field">
                <TextField
                  label="Email"
                  value={values.email}
                  placeholder="Susan@email.com"
                  onChange={(email) =>
                    setValues((prev) => ({
                      ...prev,
                      email,
                    }))
                  }
                />
              </div>

              <div className="six wide field">
                <TextField
                  label="Phone Number"
                  value={values.phoneNumber}
                  placeholder="(xxx) xxx xxxx"
                  maxLength={14}
                  onChange={(phoneNumber) =>
                    setValues((prev) => ({
                      ...prev,
                      phoneNumber,
                    }))
                  }
                />
              </div>

              <div className="six wide field">
                <TextField
                  label="Domain"
                  value={values.domain}
                  placeholder="CustomerSite.com"
                  onChange={(domain) =>
                    setValues((prev) => ({
                      ...prev,
                      domain,
                    }))
                  }
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
                    const planType = e.target.value;
                    setValues((prev) => ({
                      ...prev,
                      planType,
                    }));
                  }}
                >
                  <option value="">Select</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                  <option value="Woo-Commerce">Woo-Commerce</option>
                </select>
              </div>

              <div className="six wide field">
                <TextField
                  label="Date Created"
                  type="date"
                  name="created"
                  value={values.date}
                  onChange={(created) =>
                    setValues((prev) => ({
                      ...prev,
                      created,
                    }))
                  }
                />
              </div>

              <div className="five wide field">
                <TextField
                  label="Date Due"
                  type="date"
                  name="dueDate"
                  value={values.dueDate}
                  onChange={(dueDate) =>
                    setValues((prev) => ({
                      ...prev,
                      dueDate,
                    }))
                  }
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
                    const category = e.target.value;
                    setValues((prev) => ({
                      ...prev,
                      category,
                    }));
                  }}
                >
                  <option value="">Select</option>
                  <option value="New Build">New Build</option>
                  <option value="Revisions">Revisions</option>
                  <option value="Post Publish">Post Publish</option>
                </select>
              </div>

              <div className="twelve wide field">
                <TextField
                  label="Description"
                  type="text"
                  name="description"
                  placeholder="Notes"
                  value={values.description}
                  onChange={(description) =>
                    setValues((prev) => ({
                      ...prev,
                      description,
                    }))
                  }
                />
              </div>

              <div className="four wide field">
                <label>Priority</label>
                <select
                  className="ui dropdown"
                  name="priority"
                  onChange={(e) => {
                    const priority = e.target.value;
                    setValues((prev) => ({
                      ...prev,
                      priority,
                    }));
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
                    const websiteSpecialist = e.target.value;
                    setValues((prev) => ({
                      ...prev,
                      websiteSpecialist,
                    }));
                  }}
                >
                  <option value="">Select</option>
                  <option value="Tom Cruize">Tom Cruize</option>
                  <option value="Brad Pitt">Brad Pitt</option>
                  <option value="Russel Crow">Russel Crow</option>
                </select>
              </div>

              <div className="six wide field">
                <label>Developer</label>
                <select
                  className="ui dropdown"
                  name="developer"
                  onChange={(e) => {
                    const developer = e.target.value;
                    setValues((prev) => ({
                      ...prev,
                      developer,
                    }));
                  }}
                >
                  <option value="">Select</option>
                  <option value="Travis Scott">Travis Scott</option>
                  <option value="Post Malone">Post Malone</option>
                </select>
              </div>

              <div className="six wide field">
                <label>QA Agent</label>
                <select
                  className="ui dropdown"
                  name="qaAgent"
                  onChange={(e) => {
                    const qaAgent = e.target.value;
                    setValues((prev) => ({
                      ...prev,
                      qaAgent,
                    }));
                  }}
                >
                  <option value="">Select</option>
                  <option value="Elisabeth Shue">Elisabeth Shue</option>
                  <option value="Salma Hyak">Salma Hyak</option>
                  <option value="Jennifer Aniston">Jennifer Aniston</option>
                </select>
              </div>
            </div>

            <br />
            <button className="ui button primary" onClick={submitTicket}>
              Submit
            </button>
          </div>
        </div>
        {/*
          });
        })}
      */}
      </div>
    </div>
  );
};

export default TicketForm;
