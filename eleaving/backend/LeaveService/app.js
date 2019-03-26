const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000

// parse application/json
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

const leaveController = require('./src/controller/LeaveController')

app.use("/leave", leaveController);

app.listen(port, () => console.log(`Service running on port ${port}!`))

module.exports = app