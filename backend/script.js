const express = require("express");
const app = express();

app.listen(3000);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to mern app" });
});
