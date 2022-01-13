var express = require("express");
var router = express.Router();

const FavouriteController = require('../controller/FavouriteController');

router.get("/", FavouriteController.getAll);
router.get("/:favourtieID", FavouriteController.getByID);
router.put("/:favouriteID", FavouriteController.update);
module.exports = router;