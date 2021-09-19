const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

// database connection
const DB = mysql.createConnection({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b74a4aeb614a56",
  password: "25cf9bb0",
  database: "heroku_0f6ff7095705b7d",
  port: 3306,
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// GET Request - All JSON Tickets instead of "/"
app.get("/tickets", (req, res) => {
  DB.query("SELECT * FROM ticket_info", (err, result) => {
    //console.log(result);
    res.send(result);
  });
});

// Get request by id - To EDIT
app.get("/ticket/:id", (req, res) => {
  const id = req.params.id;
  DB.query("SELECT * FROM ticket_info WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result[0]); //  add [0] for the result this makes it an array an object - dont need map
      //res.send(result);
    }
  });
});

//---------Mentor PUT request by id - To UPDATE/EDIT
app.put("/ticket/update/:id", (req, res) => {
  const id = req.params.id;
  console.dir(req.body);
  const values = req.body;

  function sqlSet(obj) {
    return Object.keys(obj)
      .reduce((acc, key) => {
        return [...acc, [key, obj[key]]];
      }, [])
      .filter(([k, v]) => k !== "id")
      .map(([k, v]) => `${k} = '${v}'`)
      .join(", ");
  }

  DB.query(
    `UPDATE ticket_info SET ${sqlSet(values)} WHERE id = ?`,
    [id],
    (err, result) => {
      //("UPDATE ticket_info SET status = req.body.status, customerName = req.body.customerName,
      //customerID = req.body.customerID ,email = req.body.email, phoneNumber = req.body.phoneNumber,
      //domain = req.body.domain, planType = req.body.planType, created = req.body.created, dueDate = req.body.dueDate,
      //category = req.body.category, description = req.body.description, priority = req.body.priority,
      //websiteSpecialist = req.body.websiteSpecialist, developer = req.body.developer, qaAgent = req.body.qaAgent
      //WHERE id = ?", id, (err, res) => {

      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
  // always need res with status of will show pending
  // front end does not need anything so send empty json object
  res.status(202).json({});
});

//---------- DELETE request by id
app.delete("/ticket/delete/:id", (req, res) => {
  const id = req.params.id;
  DB.query("DELETE FROM ticket_info WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//-------------  ROUTE 'GET REQUEST' FOR  CHART DATA
app.get("/tickets/chart", (req, res) => {
  const sqlSelect = `SELECT
  
  (SELECT COUNT(*) FROM heroku_0f6ff7095705b7d.ticket_info WHERE status = 'Ready') AS new_tickets,
  (SELECT COUNT(*) FROM heroku_0f6ff7095705b7d.ticket_info WHERE status = 'Build In Progress')AS in_progress,
  (SELECT COUNT(*) FROM heroku_0f6ff7095705b7d.ticket_info WHERE status = 'QA In Progress')AS in_QA,
  (SELECT COUNT(*) FROM heroku_0f6ff7095705b7d.ticket_info WHERE status = 'Resolved')AS completed;`;
  //const sqlSelect = "SELECT * FROM ticket_info WHERE status = Ready";
  DB.query(sqlSelect, (err, result) => {
    //console.log(result);
    res.send(result);
  });
});

// ---------------POST request writes to DATABASE
// database connection - use vars to sanitize submission from creatTicket frnt- to back & dbase
app.post("/ticket/create", (req, res) => {
  const status = req.body.status;
  const customerName = req.body.customerName;
  const customerID = req.body.customerID;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const domain = req.body.domain;
  const planType = req.body.planType;
  const created = req.body.created;
  const dueDate = req.body.dueDate;
  const category = req.body.category;
  const description = req.body.description;
  const priority = req.body.priority;
  const websiteSpecialist = req.body.websiteSpecialist;
  const developer = req.body.developer;
  const qaAgent = req.body.qaAgent;

  const sqlInsert =
    "INSERT INTO ticket_info (status, customerName, customerID, email, phoneNumber, domain, planType, created, dueDate, category, description, priority, websiteSpecialist, developer, qaAgent) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  DB.query(
    sqlInsert,
    [
      status,
      customerName,
      customerID,
      email,
      phoneNumber,
      domain,
      planType,
      created,
      dueDate,
      category,
      description,
      priority,
      websiteSpecialist,
      developer,
      qaAgent,
    ],
    (err, result) => {
      console.log(result);
      res.send(result);
    }
  );
});

//app.listen(port, () => {
app.listen(process.env.PORT || port, () => {
  console.log(
    `Example app listening at https://simtrak-database.herokuapp.com/:${port}`
  );
});
