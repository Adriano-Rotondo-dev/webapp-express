const express = require("express");
const app = express();
const PORT = process.env.PORT;

//! app.use per asset statici, router, error handlers

app.listen(PORT, () => {
  console.log(`Server is listening http://127.0.0.1:${PORT}`);
});

app.get(`/`, (req, res) => {
  res.send("welcome to the webapp");
});

//endpoint index
app.get(`/movies`, (req, res) => {
  res.send("show movies inside db");
});

//endpoint show
app.get(`/movies/:id`, (req, res) => {
  res.send(`show movie ${req.params.id}`);
});
