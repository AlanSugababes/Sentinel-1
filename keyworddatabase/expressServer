const express = require("express");


const app = express();
let display = {word:"insert bee movie script"};
app.get("/api/", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.json(display);
});

app.get("/", (req, res) => {
  res.send();
});

const port = 5000;

app.listen(port, () => "Server is running on port 5000");
