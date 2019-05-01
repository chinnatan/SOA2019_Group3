const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const Eureka = require('eureka-js-client').Eureka;

// Constants
const PORT = process.env.PORT || 3005
const HOST = '0.0.0.0';
const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: 'auth-service',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:' + PORT,
        vipAddress: 'auth-service',
        port: {
            $: PORT,
            '@enabled': 'true',
        },
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
        registerWithEureka: true,
        fetchRegistry: true,
        leaseRenewalIntervalInSeconds: 1,
        leaseExpirationDurationInSeconds: 2
    },
    eureka: {
        // Eureka server
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/',
    },
});

client.logger.level('debug');
client.start((error) => {
    console.log(error || '[Auth Service] Eureka client Started!');

    // Set CORS
    app.use((req, res, next) => {
        const allowedOrigins = [
            'http://localhost:8080/'
        ];
        if (!allowedOrigins.includes(req.headers.origin)) {
            res.header("Access-Control-Allow-Origin", req.headers.origin);
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        }
        return next();
    })
    const authController = require('./src/controller/AuthController')
    app.use("/", authController);
});

app.listen(PORT, HOST);
console.log(`Auth Service Running on http://${HOST}:${PORT}`);

module.exports = app