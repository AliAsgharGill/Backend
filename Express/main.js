const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! Welcome Express ");
});

app.use(express.static("public"));

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us");
});

app.get("/blog/:name/:profession", (req, res) => {
  res.send(
    `Hello ${req.params.name} your profession is ${req.params.profession} `
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
