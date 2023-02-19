var express = require("express");
var router = express.Router();
var movieController = require("../controllers/movie");

router.post("/add-movie", movieController.saveMovie);
router.get("/get-all", movieController.getAllMovies);
router.get("/get-single", movieController.getSingleMovie);
router.get("/get-paginated", movieController.getPaginatedMovies);

module.exports = router;
