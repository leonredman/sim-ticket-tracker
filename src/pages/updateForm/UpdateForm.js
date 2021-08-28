import React, { useState, useEffect } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import Axios from "axios";

//import TextField from "../ui/text-field";

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

  // updated values set to state
  const [newValues, setNewValues] = useState([]);

  const [newStatus, setNewStatus] = useState("");
  const [newCustomerName, setNewCustomerName] = useState("");
  const [newCustomerID, setNewCustomerID] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newDomain, setNewDomain] = useState("");
  const [newPlanType, setNewPlanType] = useState("");
  const [newCreated, setNewCreated] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPriority, setNewPriority] = useState("");
  const [newWebsiteSpecialist, setNewWebsiteSpecialist] = useState("");
  const [newDeveloper, setNewDeveloper] = useState("");
  const [newQaAgent, setNewQaAgent] = useState("");

  // Get ticket using params id
  useEffect(() => {
    if (match.id !== "new") {
      Axios.get(`http://localhost:3001/ticket/${id}`).then((response) => {
        console.log(response.data);
        setValues(response.data);
      });
    }
  }, [id, match.id]);

  //function to POST/SEND data to backend/database executed on button click
  // Axios.put("/ticket/update/:id", values).then(() => {  // clean up to use values variable
  const updateTicket = (id) => {
    Axios.put(`http://localhost:3001/ticket/update/${id}`, {
      status: newStatus,
      customerName: newCustomerName,
      customerId: newCustomerID,
      email: newEmail,
      phoneNumber: newPhoneNumber,
      domain: newDomain,
      planType: newPlanType,
      created: newCreated,
      dueDate: newDueDate,
      category: newCategory,
      description: newDescription,
      priority: newPriority,
      websiteSpecialist: newWebsiteSpecialist,
      developer: newDeveloper,
      qaAgent: newQaAgent,
    }).then(() => {
      alert("successful insert");
      //clean up - remove alert, page to redirect to dashboard - use router and push to dashboard
      // window.location.href = "/Dashboard";
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
        <div className="six wide centered column">
          <div className="ui form">
            <div className="fields">
              <div className="six wide field">
                <label>Customer Name</label>
                <input
                  type="text"
                  name="customerName"
                  defaultValue={values.customerName}
                  onChange={(e) => {
                    setNewCustomerName(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Customer ID Number</label>
                <input
                  type="text"
                  defaultValue={values.customerID}
                  onChange={(e) => {
                    setNewCustomerID(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Status</label>
                <input
                  type="text"
                  defaultValue={values.status}
                  onChange={(e) => {
                    setNewStatus(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="fields">
              <div className="six wide field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  defaultValue={values.email}
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Phone Number</label>
                <input
                  type="text"
                  defaultValue={values.phoneNumber}
                  onChange={(e) => {
                    setNewPhoneNumber(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Domain</label>
                <input
                  type="text"
                  defaultValue={values.domain}
                  onChange={(e) => {
                    setNewDomain(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="fields">
              <div className="six wide field">
                <label>Plan Type</label>
                <input
                  type="text"
                  name="planType"
                  defaultValue={values.planType}
                  onChange={(e) => {
                    setNewPlanType(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Created</label>
                <input
                  type="text"
                  defaultValue={values.created}
                  onChange={(e) => {
                    setNewCreated(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Due Date</label>
                <input
                  type="text"
                  defaultValue={values.dueDate}
                  onChange={(e) => {
                    setNewDueDate(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="fields">
              <div className="six wide field">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={values.category}
                  onChange={(e) => {
                    setNewCategory(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Description</label>
                <input
                  type="text"
                  defaultValue={values.description}
                  onChange={(e) => {
                    setNewDescription(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Priority</label>
                <input
                  type="text"
                  defaultValue={values.priority}
                  onChange={(e) => {
                    setNewPriority(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="fields">
              <div className="six wide field">
                <label>Website Specialist</label>
                <input
                  type="text"
                  defaultValue={values.websiteSpecialist}
                  onChange={(e) => {
                    setNewWebsiteSpecialist(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>Developer</label>
                <input
                  type="text"
                  defaultValue={values.developer}
                  onChange={(e) => {
                    setNewDeveloper(e.target.value);
                  }}
                />
              </div>

              <div className="six wide field">
                <label>QA Agent</label>
                <input
                  type="text"
                  defaultValue={values.qaAgent}
                  onChange={(e) => {
                    setNewQaAgent(e.target.value);
                  }}
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
      )
    </div>
  );
};

export default TicketForm;
