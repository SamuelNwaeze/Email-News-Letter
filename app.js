const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Canada&units=metric&appid=2db03c040b73c3141ab4bf0bbda9ae33";

const app = express();

var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/signup.html");
  /*
  https.get(url);
  response.on("data", (data) => {
    const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp;
  });
  response.write("Weather details are" + temp);*/
});

app.get("/failure", function (request, response) {
  response.sendFile(failure.html);
});

app.listen(port, () => {
  console.log("Server started on port 5500");
});
