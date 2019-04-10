const express = require('express')
const httpProxy = require('express-http-proxy')
const request = require('request-promise-native')
const xml = require('xml')

const app = express()
const port = process.env.PORT || 3001

// Dummmy service discovery
const userServiceUrl = 'http://localhost:3002'
const subjectServiceUrl = 'http://localhost:3003'
const leaveServiceUrl = 'http://localhost:3004'

const userServiceProxy = httpProxy(userServiceUrl)
const subjectServiceProxy = httpProxy(subjectServiceUrl)
const leaveServiceProxy = httpProxy(leaveServiceUrl)

// Shared general logic: Authentication
app.use((req, res, next) => {
    // TODO: my authentication logic
    console.log(`Authentication: ${req.path}`)
    next()
})

// Aggregate services after authentication
app.get('/', async (req, res) => {
    const services = await Promise.all([
        request({ uri: userServiceUrl, json: true }),
        request({ uri: subjectServiceUrl, json: true }),
        request({ uri: leaveServiceUrl, json:true})
    ])

    const response = { services }

    // Format transformation: XML or JSON
    if (req.get('Content-Type') === 'application/xml') {
        const xmlResponse = xml(response)
        res.set('content-type', 'text/xml')
        res.end(xmlResponse)
    } else {
        res.json(response)
    }
})

// Proxy request after authentication
app.use('/user/', (req, res, next) => {
    userServiceProxy(req, res, next)
})

app.use('/subject', (req, res, next) => {
    subjectServiceProxy(req, res, next)
})

app.use('/leave', (req, res, next) => {
    leaveServiceProxy(req, res, next)
})

app.listen(port, () => {
    console.info(`API Gateway is listening on port ${port}!`)
})
