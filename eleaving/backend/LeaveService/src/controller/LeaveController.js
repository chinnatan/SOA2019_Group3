const express = require('express')
const router = express.Router();
const leaveService = require('../service/LeaveService')
var bodyParser = require('body-parser')

// parse application/json
router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json());

// Get All Leavedocument
router.get("/", leaveService.getAllLeavedocument);
// Get Leavedocument By ID
router.get("/:leaveid", leaveService.getLeavedocumentById);
// Get Status from leavedocument By ID
router.get("/:leaveid/status", leaveService.getStatus);
module.exports = router;