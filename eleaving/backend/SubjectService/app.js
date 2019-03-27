const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

// parse application/json
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json())

const subjectController = require('./src/controller/SubjectController')

app.use("/subject", subjectController)

app.listen(port, () => console.log(`Service running on port ${port}`))

module.exports = app