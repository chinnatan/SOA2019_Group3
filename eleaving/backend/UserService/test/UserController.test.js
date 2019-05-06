// Testing User

const server = require('../server');
var chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("GET USER", () => {
    it("should return user information by id", function (done) {
        chai
            .request(server)
            .get("/1")
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                done();
            });
    });

    it("should return user information by id incorrect", function (done) {
        chai
            .request(server)
            .get("/2")
            .end((err, res) => {
                res.should.equal([
                    {
                        "firstname": "กลวัชร",
                        "lastname": "กาลิกานนท์",
                        "student_id": "59070008",
                        "student_term": 2,
                        "student_year": 3,
                        "student_generation": 14,
                        "student_branch": "เทคโนโลยีสารสนเทศ",
                        "student_sect": "วิศวกรรมซอฟต์แวร์",
                        "student_faculty": "เทคโนโลยีสารสนเทศ",
                        "student_degree": "ปริญญาตรี",
                        "school_year": 2561
                    }
                ])
                done();
            });
    });

    it("should return student information by id", function (done) {
        chai
            .request(server)
            .get("/1/student")
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                done();
            });
    });

    it("should return student information by id incorrect", function (done) {
        chai
            .request(server)
            .get("/2")
            .end((err, res) => {
                res.should.equal([
                    {
                        "account_id": 1,
                        "firstname": "ชินธันย์",
                        "lastname": "ชาติทอง"
                    }
                ])
                done();
            });
    });

    it("should return user information by id not found", function (done) {
        chai
            .request(server)
            .get("/1000")
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });

    it("should return student information by id not found", function (done) {
        chai
            .request(server)
            .get("/1000/student")
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