//import connection
const connection = require("../database/connection");
//define index function
function index(req, res) {
  //prepare query
  const sql = "SELECT * FROM movies";

  //execute query
  connection.query(sql, (err, result) => {
    //handle error500
    if (err)
      return res.status(500).json({
        error: true,
        message: err.message,
      });
    console.log(result);
    //return json response to the user
    res.json(result);
  });
}

//define show function
function show(req, res) {
  res.send(`show movie ${req.params.id}`);
}

//prepare query

//execute query

//handle error500
//handle error404

//return response with single movie

//prepare query for reviews related to single movie

//get reviews related to single movie

module.exports = {
  index,
  show,
};
