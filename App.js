
const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require ("body-parser");
const port = 3306;
const cors = require("cors");


// handling parse URLECONDED form
// app.use(bodyParser.urlencoded({ extended: false }));

// handles parsing JSON data from frontend
app.use(bodyParser.json());

app.use(cors());

const mysqlConnection = mysql.createConnection({
  host: "192.168.1.15",
  user: "root",
  password: "030702",
  database: "db_finals",
  port: "3306"
});


// CRUD Application
// CREATE (insert)
app.post("/Registration", (req, res) => {
  const {firstName, lastName, email, Mobile, Old_TUP_Student, Address, Reason}=req.body;
  
  // insert to database
  mysqlConnection.query(
    "INSERT INTO tbl_form (firstName, lastName, email, Mobile, Old_TUP_Student, Address, Reason) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [firstName, lastName, email, Mobile, Old_TUP_Student, Address, Reason],
    (err, results) => {
      try {
        if (results.affectedRows > 0) {
          res.json({ message: "Data has been added!" });
        } else {
          res.json({ message: "Something went wrong!" });
        }
      } 
        catch (err) {
        res.json({ message: err });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


