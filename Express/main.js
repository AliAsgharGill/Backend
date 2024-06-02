const express = require("express");
const blog = require("./routes/blog");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);

app.get("/", (req, res) => {
  res.send("Hello World! Welcome Express ");
  console.log("Hello This Is Get Request");
});

app.post("/", (req, res) => {
  console.log("Hello This Is Post Request");
  res.send("Hello This Is Post Request");
});

app.get("/index", (req, res) => {
  console.log("Hello Index in Get Request");
  res.sendFile("templates/index.html", { root: __dirname });
});
app.put("/", (req, res) => {
  console.log("Hello This Is Put Request");
  res.send("Hello This Is Put Request");
});

app.get("/api", (req, res) => {
  res.json([
    {
      name: "John",
      age: 30,
      address: "New York",
      phone: "1234567890",
      email: "QrKp0@example.com",
      skills: ["HTML", "CSS", "JavaScript"],
      interests: ["Music", "Travel"],
      isMarried: false,
      friends: ["Jane", "Mark", "Emily"],
      isEmployed: true,
      company: {
        name: "ABC",
        address: "123 Main Street",
        phone: "1234567890",
      },
      pets: ["Dog", "Cat"],
      isSingle: true,
      isVerified: true,
      isPrivate: false,
      isAdult: true,
      isSenior: false,
    },
    {
      name: "Jane",
      age: 25,
      address: "Los Angeles",
      phone: "9876543210",
      email: "8QqFP@example.com",
      skills: ["HTML", "CSS", "JavaScript"],
      interests: ["Music", "Travel"],
      isMarried: true,
      friends: ["John", "Mark", "Emily"],
      isEmployed: false,
      company: {
        name: "DEF",
        address: "456 Main Street",
        phone: "9876543210",
      },
      pets: ["Dog", "Cat"],
      isSingle: false,
      isVerified: false,
      isPrivate: true,
      isAdult: false,
      isSenior: true,
    },
  ]);
});

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
