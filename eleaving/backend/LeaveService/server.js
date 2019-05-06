const express = require('express')
const bodyParser = require('body-parser')
const Eureka = require('eureka-js-client').Eureka;
const Prometheus = require('prom-client')
const _ = require('lodash')

// Prometheus metrics
const metricsInterval = Prometheus.collectDefaultMetrics()
const httpRequestsTotal = new Prometheus.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['route', 'code']
})
const httpRequestDurationMicroseconds = new Prometheus.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['route']
})

// Constants
const PORT = process.env.PORT || 3004
const HOST = '0.0.0.0';
const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

// Configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: 'leave-service',
        hostName: '35.240.188.199',
        ipAddr: '35.240.188.199',
        statusPageUrl: 'http://35.240.188.199:' + PORT,
        vipAddress: 'leave-service',
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
        host: '35.240.188.199',
        port: 8761,
        servicePath: '/eureka/apps/',
    },
});

client.logger.level('debug');
client.start((error) => {
    console.log(error || '[Leave Service] Eureka client Started!');
});

// Prometheus metrics
app.get('/metrics', (req, res) => {
    res.set('Content-Type', Prometheus.register.contentType)
    res.end(Prometheus.register.metrics())
})

const leaveController = require('./src/controller/LeaveController')
app.use("/", leaveController);

app.use((req, res, next) => {
    const responseTimeInMs = Date.now() - res.locals.startEpoch
    const path = _.get(req, 'route.path') || req.path

    httpRequestsTotal.inc({ route: path, code: res.statusCode })
    httpRequestDurationMicroseconds.labels(path).observe(responseTimeInMs)

    next()
})

app.listen(PORT, HOST);
console.log(`Leave Service Running on http://${HOST}:${PORT}`);

process.on('SIGTERM', () => {
    clearInterval(metricsInterval)
    process.exit(0)
})

module.exports = app