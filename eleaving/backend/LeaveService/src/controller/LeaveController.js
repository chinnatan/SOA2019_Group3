const express = require('express')
const router = express.Router();
const multer = require('multer')
const leaveService = require('../service/LeaveService')
var bodyParser = require('body-parser')

// parse application/json
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const fileFilter = function (req, file, cb) {
    const allowedTypes = ["application/pdf"]

    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error("Wrong file type")
        error.code = "LIMIT_FILE_TYPES"
        return cb(error, false)
    }

    cb(null, true)
}

var storage = multer.diskStorage({
    destination:  __dirname + '/uploads/',
    filename: function (req, file, cb) {
      cb(null, 'supportdocument-' + Date.now() + '.pdf')
    }
  })

const MAX_SIZE = 600000;

const upload = multer({
    storage: storage,
    rename: 'test',
    fileFilter,
    limits: {
        fileSize: MAX_SIZE
    }
})

// Get All Leavedocument
router.get("/", leaveService.getAllLeavedocument);
// Get Leavedocument By ID
router.get("/:leaveid", leaveService.getLeavedocumentById);
// Get Status from leavedocument By ID
router.get("/user/:userid/status", leaveService.getStatus);
// Post New Sick Leavedocument
router.post("/sick/send", upload.single('file'), leaveService.postNewSickLeavedocument);
// Post New Personal Leavedocument
router.post("/personal/send", upload.single('file'), leaveService.postNewPersonalLeavedocument);
// Get Subject Count
router.get("/:userid/count", leaveService.getNumberSubjectLeave);

router.use(function (err, req, res, next) {
    if (err.code === "LIMIT_FILE_TYPES") {
        return res.status(422).json({ error: "รองรับไฟล์ PDF เท่านั้น" })
    }

    if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(422).json({ error: `ไฟล์มีขนาดใหญ่เกินไป. รองรับขนาดที่ ${MAX_SIZE/1000}Kb` })
    }
})

module.exports = router;