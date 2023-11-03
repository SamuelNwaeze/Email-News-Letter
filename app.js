const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//page routes

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/signup.html", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("signup.html", (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;

  console.log(firstName);
});

app.listen(port, (request, response) => {
  console.log("server started on" + " " + port);
});
