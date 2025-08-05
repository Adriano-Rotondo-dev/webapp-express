const express = require("express");
const app = express();
const PORT = process.env.PORT;
const movieRouter = require("./routes/movieRouter");
const notFound = require("./middleware/notFound");
const serverError = require("./middleware/serverError");

//bodyparser
app.use(express.json());
//setto la variabile per la cors policy
const cors = require("cors");
//apro la cors policy
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to the webapp");
});
//router
app.use("/api/movies", movieRouter);

//assets
app.use(express.static("public"));

//404 error handler
app.use(notFound);
//500 error handler
app.use(serverError);

app.listen(PORT, () => {
  console.log(`Server is listening http://127.0.0.1:${PORT}`);
});
