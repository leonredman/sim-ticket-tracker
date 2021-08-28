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
                  value={values.customerName}
                  placeholder="xxxxxxxxx"
                  maxLength={9}
                  onChange={(customerId) =>
                    setValues((prev) => ({
                      ...prev,
                      customerId,
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
                    const customerId = e.target.value;
                    setValues((prev) => ({
                      ...prev,
                      customerId,
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
                <label>Phone Number</label>
              </div>

              <div className="six wide field"></div>
            </div>

            <div className="fields">
              <div className="six wide field"></div>

              <div className="six wide field"></div>

              <div className="five wide field"></div>
            </div>

            <div className="fields">
              <div className="four wide field"></div>

              <div className="twelve wide field"></div>

              <div className="four wide field"></div>
            </div>

            <div className="fields">
              <div className="six wide field"></div>
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
