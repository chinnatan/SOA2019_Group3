const express = require('express')
const httpProxy = require('express-http-proxy')
const request = require('request-promise-native')
const xml = require('xml')
const Eureka = require('eureka-js-client').Eureka;

// Constants
const PORT = process.env.PORT || 3001
const HOST = '0.0.0.0';
const app = express()

// Configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: 'api-gateway',
        hostName: '35.240.188.199',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:' + PORT,
        vipAddress: 'api-gateway',
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
    },
    eureka: {
        // Eureka server
        host: '35.240.188.199',
        port: 8761,
        servicePath: '/eureka/apps/',
    },
});

client.logger.level('debug');
client.start(error => {
    console.log(error || '[API Gateway Service] Eureka client Started!');

    // Service discovery from Eureka server
    const authServiceInstance = client.getInstancesByAppId('auth-service');
    const authServiceUrl = `http://${authServiceInstance[0].hostName}:${authServiceInstance[0].port.$}`;
    const authServiceProxy = httpProxy(authServiceUrl)
    console.log(`Auth-Service: ${authServiceUrl}`);

    const userServiceInstance = client.getInstancesByAppId('user-service');
    const userServiceUrl = `http://${userServiceInstance[0].hostName}:${userServiceInstance[0].port.$}`;
    const userServiceProxy = httpProxy(userServiceUrl)
    console.log(`User-Service: ${userServiceUrl}`);

    const subjectServiceInstance = client.getInstancesByAppId('subject-service');
    const subjectServiceUrl = `http://${subjectServiceInstance[0].hostName}:${subjectServiceInstance[0].port.$}`;
    const subjectServiceProxy = httpProxy(subjectServiceUrl)
    console.log(`Subject-Service: ${subjectServiceUrl}`);

    const leaveServiceInstance = client.getInstancesByAppId('leave-service');
    const leaveServiceUrl = `http://${leaveServiceInstance[0].hostName}:${leaveServiceInstance[0].port.$}`;
    const leaveServiceProxy = httpProxy(leaveServiceUrl)
    console.log(`Leave-Service: ${leaveServiceUrl}`);

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

    // Proxy request after authentication
    app.use('/api/auth', (req, res, next) => {
        authServiceProxy(req, res, next)
    })

    app.use('/api/user', (req, res, next) => {
        userServiceProxy(req, res, next)
    })

    app.use('/api/subject', (req, res, next) => {
        subjectServiceProxy(req, res, next)
    })

    app.use('/api/leave', (req, res, next) => {
        leaveServiceProxy(req, res, next)
    })

});

app.listen(PORT, HOST);
console.log(`API Gateway Running on http://${HOST}:${PORT}`);
