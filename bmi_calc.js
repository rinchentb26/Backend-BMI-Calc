const express = require("express");
const app = express();
const PORT_NO = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height_in_m = parseFloat(req.body.height) / 100;
  var bmi = weight / (height_in_m * height_in_m);
  res.send("<center>The BMI is " + bmi.toFixed(2) + "</center>");
});

app.listen(PORT_NO, () => {
  console.log("App is running on Port " + PORT_NO);
});
