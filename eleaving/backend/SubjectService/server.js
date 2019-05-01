const express = require('express')
const bodyParser = require('body-parser')
const Eureka = require('eureka-js-client').Eureka;

// Constants
const PORT = process.env.PORT || 3003
const HOST = '0.0.0.0';
const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: 'subject-service',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:' + PORT,
        vipAddress: 'subject-service',
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
    console.log(error || '[Subject Service] Eureka client Started!');

    const subjectController = require('./src/controller/SubjectController')
    app.use("/", subjectController)
});

app.listen(PORT, HOST);
console.log(`Subject Service Running on http://${HOST}:${PORT}`);

module.exports = app