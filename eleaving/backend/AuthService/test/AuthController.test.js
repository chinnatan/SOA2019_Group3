// Testing Leave

const server = require('../server');
const request = require('supertest');
var chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("POST LOGIN", () => {
    it("should login success", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .post("/login")
            .send({
                username: "it59070040",
                password: "7c4a8d09ca3762af61e59520943dc26494f8941b"
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("shouldn't login success", done => {
        chai
            .request(server)
            .post("/login")
            .send({
                username: "test",
                password: "test"
            })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it("shouldn't login success because username & password null", done => {
        chai
            .request(server)
            .post("/login")
            .send({
                username: null,
                password: null
            })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});