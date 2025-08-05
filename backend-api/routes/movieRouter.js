// import express
const express = require("express");
//import controller
const movieController = require("../controllers/movieController");
//define router
const router = express.Router();
// define routes

//index route
//controller.index
router.get("/", movieController.index);

//show route
//controller.show
router.get("/:id", movieController.show);

//post route
router.get("/:id/reviews", movieController.storeReview);

//export router
module.exports = router;
