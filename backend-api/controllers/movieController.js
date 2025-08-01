//import connection
const connection = require("../database/connection");
const PORT = process.env.PORT;
/**
 * get all movies
 * sql query to show all movies from db
 * @param {*} req
 * @param {*} res
 */
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
    //add images to each movie
    //return json response to the user
    res.json(
      result.map((movie) => {
        movie.image = `http://localhost:${PORT}/images/${movie.image}`;
        return movie;
      })
    );
  });
}

//define show function
function show(req, res) {
  console.log(req.params);
  //destructuring
  const { id } = req.params;
  //prepare query
  const sql = "SELECT * FROM movies WHERE id =?";
  //execute query
  connection.execute(sql, [id], (err, result) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: err.message,
      });
    if (result.length === 0)
      return res.status(404).json({
        error: true,
        message: "Movie not found",
      });
    const movie = result[0];
    movie.image = `http://localhost:${PORT}/images/${movie.image}`;
    //prepare query for reviews
    const reviewsSql = "SELECT * FROM reviews WHERE movie_id=?";
    // execute query
    connection.execute(reviewsSql, [id], (err, result) => {
      if (err)
        return res.status(500).json({
          error: true,
          message: err.message,
        });
      const movieReviews = result;
      movie.reviews = movieReviews;
      console.log(movie);
      return res.json(movie);
    });
  });
}

//handle error500
//handle error404

//return response with single movie

//prepare query for reviews related to single movie

//get reviews related to single movie

module.exports = {
  index,
  show,
};
