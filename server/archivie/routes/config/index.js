const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");
//const database = require('./config/database');

const DB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "CRUDDatabase",
    port: '8889'
});