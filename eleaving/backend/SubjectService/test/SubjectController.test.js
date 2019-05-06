// Testing Subject

const server = require('../server')
var chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("GET SUBJECT", () => {
    it("should all subject", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .get("/")
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                done();
            });
    });

    it("shouldn't all subject", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .get("/")
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });

    it("should return subject information for user by user id", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .get("/user/1")
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                done();
            });
    });

    it("should return subject information for user not match by user id", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .get("/user/2")
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it("should return not found for user by user id", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .get("/user/")
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });

    it("should return not found for user by user id", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .get("/user/2/")
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });

    it("should return not found for user by user id (professor)", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .get("/user/2/professor")
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                done();
            });
    });

    it("should return not found for user by user id (student)", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .get("/user/1/professor")
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});

describe("GET METRICS", () => {
    it("should return subject information for user by user id", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .get("/metrics")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});