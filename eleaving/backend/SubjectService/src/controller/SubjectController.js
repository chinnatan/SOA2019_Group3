const express = require("express")
const router = express.Router();
const subjectService = require("../service/SubjectService")
var bodyParser = require('body-parser')

// parse application/json
router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json());

// Get Subject Information
router.get("/user/:userid", subjectService.getSubjectByUserId);
router.get("/user/:userid/professor", subjectService.getSubjectProfessorByUserId);

module.exports = router;