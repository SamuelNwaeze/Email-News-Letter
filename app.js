const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { Console } = require("console");

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

app.post("/signup.html", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const userData = {
    members: [
      {
        email_address: email,
        status: "subscribed",

        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(userData);

  const url = "https://us21.api.mailchimp.com/3.0/lists/81ded6b621";

  const options = {
    method: "POST",
    auth: "TechSammyHQ:7347f29fbccd881ddd798908ddd44fb9-us21",
  };

  const request = https.request(url, options, (response) => {
    let responseData = ""; // Initialize a variable to store response data

    response.on("data", (chunk) => {
      responseData += chunk; // Append data chunks to the response data
    });

    response.on("end", () => {
      console.log(JSON.parse(responseData));

      if (response.statusCode === 200) {
        res.sendFile(__dirname + "/public/success.html");
      } else {
        res.status(response.statusCode).send("<h1>404 ERROR NIGGA!<h1/>");
      }
    });
  });

  request.on("error", (err) => {
    // Add an error event handler
    console.error("Error in request:", err);
    res.status(500).send("<h1>Internal Server Error<h1/>");
  });

  request.write(jsonData);
  request.end();

  console.log(
    (newSubscriber = [
      (FirstName = firstName),
      (Lastname = lastName),
      (email_address = email),
    ])
  );
});

app.listen(process.env.PORT || port, (request, response) => {
  console.log("server started on port" + " " + port);
});

// API KEY
// 26bc1ee84298957a5c451598b66e79ce-us21

//Link ID
//81ded6b621
