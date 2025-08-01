const express = require("express");
const app = express();
const PORT = process.env.PORT;
const movieRouter = require("./routes/movieRouter");
//setto la variabile per la cors policy
const cors = require("cors");
//apro la cors policy
app.use(cors());

//* app.use per asset statici, router
//router
app.use("/api/movies", movieRouter);
//assets
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is listening http://127.0.0.1:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("welcome to the webapp");
});
