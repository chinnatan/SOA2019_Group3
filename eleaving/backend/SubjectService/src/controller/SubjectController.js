const express = require("express")
const router = express.Router();
const subjectService = require("../service/SubjectService")
var bodyParser = require('body-parser')

// parse application/json
router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json());

// Get User Information
router.get("/user/:userid", subjectService.getSubjectByUserId);

module.exports = router;