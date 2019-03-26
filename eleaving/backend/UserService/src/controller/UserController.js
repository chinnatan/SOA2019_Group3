const express = require("express")
const router = express.Router();
const userService = require("../service/UserService")
var bodyParser = require('body-parser');

// parse application/json
router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json());

// Get User Information
router.get("/:userid", userService.getUserById);

module.exports = router;
