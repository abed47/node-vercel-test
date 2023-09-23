const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello")
})

app.post("/auth/user-login", (req, res) => {
  res.json({
    idUser: "12321",
    firstName: "abed",
    lastName: "haj",
    email: "abed@gmail.com",
    phone: "529828199",
    accessToken: "lkjslfjsladj"
  });
});

app.listen(4001, (e) => {
  console.log(e);
  console.log("App started")
});