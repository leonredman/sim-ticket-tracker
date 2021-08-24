const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql");
//const DB = require("./config/database");
const cors = require("cors");
const bodyParser = require("body-parser");

// database connection
const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "SIMtickets",
  port: "8889",
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// GET Request - all JSON Tickets instead of "/"
app.get("/tickets", (req, res) => {
  DB.query("SELECT * FROM ticket_info", (err, result) => {
    //console.log(result);
    res.send(result);
  });
});

// ROUTE FOR 'GET REQUEST' - WRITES TO TICKET DBASE ON MYSQL
// app.get("/api/get", (req, res) => {
//   const sqlSelect = "SELECT * FROM ticket_info";
//   DB.query(sqlSelect, (err, result) => {
//     //console.log(result);
//     res.send(result);
//   });
// });

// ------------? Blocker  edit work ticket
// app.patch("/api/edit/:id", (req, res) => {
//   const sqlSelect = "INSERT * FROM ticket_info WHERE id = ?";
//   DB.query(sqlSelect, (err, result) => {
//     //console.log(result);
//     res.send(result);
//   });
// })

// Get request by id - To EDIT
app.get("/ticket/:id", (req, res) => {
  const id = req.params.id;
  DB.query("SELECT * FROM ticket_info WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// PUT request by id - To UPDATE/EDIT
//app.put("/api/update/:id", (req, res) => {
app.put("/ticket/update/:id", (req, res) => {
  const id = req.params.id;

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

// const sqlUpdate =
//   "UPDATE ticket_info SET (status, customerName, customerID, email, phoneNumber, domain, planType, created, dueDate, category, description, priority, websiteSpecialist, developer, qaAgent) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) WHERE id = ?";
//    DB.query(sqlUpdate, [status, customerName, customerID, email, phoneNumber, domain, planType, created, dueDate, category, description, priority, websiteSpecialist, developer, qaAgent], (err, result) => {
//     if (err) {
//       console.log(err);
//     } 

const sqlUpdate =
    "UPDATE ticket_info (status, customerName, customerID, email, phoneNumber, domain, planType, created, dueDate, category, description, priority, websiteSpecialist, developer, qaAgent) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) WHERE id = ?";
  //"INSERT INTO ticket_info VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
  DB.query(
    sqlUpdate,
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
    })



  //});
});









// DB.query("UPDATE SET ticket_info (status, customerName, customerID, email, phoneNumber, domain, planType, created, dueDate, category, description, priority, websiteSpecialist, developer, qaAgent) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) WHERE id = ?", id, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     res.send(result);
//   }
// });
// });



// DELETE request by id
app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  DB.query("DELETE FROM ticket_info WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//------------- SINGLE TICKET ROUTE 'GET REQUEST' FOR SINGLE TICKET PAGE  - STILL NEED TO  HAVE LINK AND REQUEST BY ID
app.get("/api/ticket", (req, res) => {
  const sqlSelect = "SELECT * FROM ticket_info WHERE id = 23";
  DB.query(sqlSelect, (err, result) => {
    //console.log(result);
    res.send(result);
  });
});

//------------- WORKING ROUTE 'GET REQUEST' TEST FOR  CHART DATA   -
// app.get("/api/chart", (req, res) => {
//   const sqlSelect = "SELECT * FROM ticket_info WHERE STATUS = 'Ready'";
//   //const sqlSelect = "SELECT * FROM ticket_info WHERE status = Ready";
//   DB.query(sqlSelect, (err, result) => {
//     //console.log(result);
//     res.send(result);
//   });
// })

//------------- WORKING ROUTE 'GET REQUEST' FOR  CHART DATA   -
app.get("/tickets/chart", (req, res) => {
  const sqlSelect = `SELECT
  (SELECT COUNT(*) FROM SIMtickets.ticket_info WHERE status = 'Ready') AS new_tickets,
  (SELECT COUNT(*) FROM SIMtickets.ticket_info WHERE status = 'Build In Progress')AS in_progress,
  (SELECT COUNT(*) FROM SIMtickets.ticket_info WHERE status = 'QA In Progress')AS in_QA,
  (SELECT COUNT(*) FROM SIMtickets.ticket_info WHERE status = 'Resolved')AS completed;`;
  //const sqlSelect = "SELECT * FROM ticket_info WHERE status = Ready";
  DB.query(sqlSelect, (err, result) => {
    //console.log(result);
    res.send(result);
  });
});

//--------WHEN READY START TRYING TO SET UP GET REQUEST FOR TICKET ID AFTER LINK IS CLICKED

// app.get("/api/ticket/:id", (req, res) => {
//   DB.query (
//     `SELECT * FROM ticket_info WHERE id = ${req.params.id} LIMIT 1`, (err, result) => {
//     //console.log(result);
//     res.send(result);
//   });
// })

//----------------NOT WORKING - app.use is  MIDDLEWARE for ??? ----------
// app.use("/api", (req, res) => {
//   const sqlSelect = "SELECT * FROM ticket_info";
//   DB.query(sqlSelect, (err, result) => {
//     //console.log(result);
//     res.send(result);
//   });
// })

// ----------------MIDDLEWEAR ?
// app.use("/api/ticket", (req, res) => {
//   DB.query (
//     "SELECT * FROM ticket_info WHERE id = 1", (err, result) => {
//     //console.log(result);
//     res.send(result);
//   });
// })

// --------------------------------WRITING TICKET TO THE DATABASE IS WORKING 5/29------------------
// database connection - use variables to sanitize submission  from creatTicket - front end to backend & database
//app.post("/api/insert", (req, res) => {
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
  //"INSERT INTO ticket_info VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
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

// app.get('/', (req, res) => {
//   res.send('<h1>Hello World Express is up and Running</h1>')
// })

// app.get('/', (req, res) => {
//   res.render("/Url")
// })

// request variable is passed as an object to the backend with req
// app.post("/api/insert", (req, res) => {
//   const movieName = req.body.movieName;
//   const movieReview = req.body.movieReview;

//   const sqlInsert =
//   "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)"
//       DB.query(sqlInsert, [movieName, movieReview], (err, result)=> {
//           console.log(result)
//       });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// module.exports = router

// ------------------- database test script was successful--------------------
// app.get('/', (req, res) => {

//   const sqlInsert = "INSERT INTO ticket_info (status, customerName, customerID, email, phoneNumber, domain, planType, created, dueDate, category, websiteSpecialist, developer, qaAgent) VALUES ('Ready', 'Jane Doe', '159494593', 'test1@test1.com', '(212) 328 8814', 'newsite1.com', 'Standard', '9/1/21', '11/1/21', 'Website', 'Tom Cruize', 'Kanye West', 'Mike Jones');"
//   DB.query(sqlInsert, (err, result) => {
//     //console.log(err);
//       res.send("Hello Leon From the backend");
//   });
// })
