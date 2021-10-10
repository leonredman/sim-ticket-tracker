import React, { useState, useEffect } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import Axios from "axios";

import TextField from "../../ui/text-field";

// set the state for the form
const TicketForm = (props) => {
  const match = useRouteMatch();

  //set ticket current values to state
  const [values, setValues] = useState({
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

  const { id } = useParams();

  // Get ticket using params id
  useEffect(() => {
    if (match.id !== "new") {
      //Axios.get(`http://localhost:3001/ticket/${id}`).then((response) => {
      Axios.get(`https://simtrak-database.herokuapp.com/ticket/${id}`).then(
        (response) => {
          console.log(response.data);
          setValues(response.data);
        }
      );
    }
  }, [id, match.id]);

  //function to POST/SEND data to backend/database executed on button click
  // Axios.put("/ticket/update/:id", values).then(() => {  // clean up to use values variable
  const updateTicket = (id) => {
    // Axios.put(`http://localhost:3001/ticket/update/${id}`, {
    Axios.put(`https://simtrak-database.herokuapp.com/ticket/update/${id}`, {
      status: values.status,
      customerName: values.customerName,
      customerID: values.customerID,
      email: values.email,
      phoneNumber: values.phoneNumber,
      domain: values.domain,
      planType: values.planType,
      created: values.created,
      dueDate: values.dueDate,
      category: values.category,
      description: values.description,
      priority: values.priority,
      websiteSpecialist: values.websiteSpecialist,
      developer: values.developer,
      agent: values.agent,
    }).then(() => {
      alert("successful insert");
      //clean up - remove alert, page to redirect to dashboard - use router and push to dashboard
      // window.location.href = "/Dashboard";
    });
  };

  //console.log(values);

  return (
    <div className="newTicketContainer">
      <div className="ui grid">
        <div className="ui row">
          <div className="six wide centered column">
            <h1>Update Ticket</h1>
          </div>
        </div>
        <div className="ui row"></div>

        <div className="six wide centered column">
          <div className="ui raised segment">
            <div className="six wide centered column">
              <div className="ui form">
                <div className="fields">
                  <div className="six wide field">
                    <TextField
                      label="Customer Name"
                      value={values.customerName}
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
                      label="Customer ID"
                      value={values.customerID}
                      onChange={(customerID) =>
                        setValues((prev) => ({
                          ...prev,
                          customerID,
                        }))
                      }
                    />
                  </div>

                  <div className="six wide field">
                    <TextField
                      label="Status"
                      value={values.status}
                      onChange={(status) =>
                        setValues((prev) => ({
                          ...prev,
                          status,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="fields">
                  <div className="six wide field">
                    <TextField
                      label="Email"
                      value={values.email}
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
                    <TextField
                      label="Plan Type"
                      value={values.planType}
                      onChange={(planType) =>
                        setValues((prev) => ({
                          ...prev,
                          planType,
                        }))
                      }
                    />
                  </div>

                  <div className="six wide field">
                    <TextField
                      label="Created"
                      value={values.created}
                      onChange={(created) =>
                        setValues((prev) => ({
                          ...prev,
                          created,
                        }))
                      }
                    />
                  </div>

                  <div className="six wide field">
                    <TextField
                      label="Due Date"
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
                  <div className="six wide field">
                    <TextField
                      label="Category"
                      value={values.category}
                      onChange={(category) =>
                        setValues((prev) => ({
                          ...prev,
                          category,
                        }))
                      }
                    />
                  </div>

                  <div className="six wide field">
                    <TextField
                      label="Description"
                      value={values.description}
                      onChange={(description) =>
                        setValues((prev) => ({
                          ...prev,
                          description,
                        }))
                      }
                    />
                  </div>

                  <div className="six wide field">
                    <TextField
                      label="Priority"
                      value={values.priority}
                      onChange={(priority) =>
                        setValues((prev) => ({
                          ...prev,
                          priority,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="fields">
                  <div className="six wide field">
                    <TextField
                      label="Website Specialist"
                      value={values.websiteSpecialist}
                      onChange={(websiteSpecialist) =>
                        setValues((prev) => ({
                          ...prev,
                          websiteSpecialist,
                        }))
                      }
                    />
                  </div>

                  <div className="six wide field">
                    <TextField
                      label="Developer"
                      value={values.developer}
                      onChange={(developer) =>
                        setValues((prev) => ({
                          ...prev,
                          developer,
                        }))
                      }
                    />
                  </div>

                  <div className="six wide field">
                    <TextField
                      label="QA Agent"
                      value={values.qaAgent}
                      onChange={(qaAgent) =>
                        setValues((prev) => ({
                          ...prev,
                          qaAgent,
                        }))
                      }
                    />
                  </div>
                </div>

                <button
                  className="ui button primary"
                  onClick={() => updateTicket(id)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default TicketForm;
