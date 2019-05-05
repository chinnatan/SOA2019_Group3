// Testing Leave

const server = require('../server');
const request = require('supertest');
var chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");
const fs = require('fs');

chai.use(chaiHttp);

describe("GET DOCUMENT", () => {
    it("should return all document", function (done) {
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

    it("shouldn't return all document", done => {
        chai
            .request(server)
            .get("/123")
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });

    it("should return document by documentID", done => {
        chai
            .request(server)
            .get("/SD2019050519056")
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                done();
            });
    });

    it("shouldn't return document by documentID", done => {
        chai
            .request(server)
            .get("/SD1234")
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });

    it("should return status with subject", done => {
        chai
            .request(server)
            .get("/user/6/status")
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                done();
            });
    });

    it("shouldn't return status with subject", done => {
        chai
            .request(server)
            .get("/user/2/status")
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it("should return number of leave if status is accept", done => {
        chai
            .request(server)
            .get("/1/count")
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                done();
            });
    });

    it("shouldn't return number of leave if status is not accept", done => {
        chai
            .request(server)
            .get("/1/count")
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it("should return pdf view", done => {
        chai
            .request(server)
            .get("/uploads/supportdocument-1557057147963.pdf")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe("POST DOCUMENT", () => {
    it("should return success", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .post("/status/update")
            .send({
                status: "accept",
                documentId: "SD2019050519056",
                documentSubjectId: 44
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("should return document success", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .post("/sick/send")
            .send({
                document: {
                    document_id: "SD2019050519056",
                    document_date: "2019-05-05",
                    document_catalog: "sick",
                    firstname: "กลวัชร",
                    lastname: "กาลิกานนท์",
                    student_id: "59070008",
                    student_term: 2,
                    school_year: 2561,
                    student_generation: 14,
                    student_branch: "เทคโนโลยีสารสนเทศ",
                    student_degree: "ปริญญาตรี",
                    comment: "ป่วย ค่อกแค่ก",
                    since: "2019-05-06",
                    to: "2019-05-07",
                    total: 2,
                    account_id: 1,
                },
                document_subject :[{
                    doc_subject_id: 46,
                    subject_name: "SEMINAR ON PROFESSIONAL COMMUNICATION SKILLS",
                    status: "อนุมัติ"
                }]
            })
            .attach('file', fs.readFileSync('./src/controller/uploads/supportdocument-1556719980556.pdf'))
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("should return document success", function (done) {
        this.timeout(10000);
        chai
            .request(server)
            .post("/personal/send")
            .send({
                document: {
                    document_id: "SD2019050519056",
                    document_date: "2019-05-05",
                    document_catalog: "sick",
                    firstname: "กลวัชร",
                    lastname: "กาลิกานนท์",
                    student_id: "59070008",
                    student_term: 2,
                    school_year: 2561,
                    student_generation: 14,
                    student_branch: "เทคโนโลยีสารสนเทศ",
                    student_degree: "ปริญญาตรี",
                    comment: "ป่วย ค่อกแค่ก",
                    since: "2019-05-06",
                    to: "2019-05-07",
                    total: 2,
                    account_id: 1,
                },
                document_subject :[{
                    doc_subject_id: 46,
                    subject_name: "SEMINAR ON PROFESSIONAL COMMUNICATION SKILLS",
                    status: "อนุมัติ"
                }]
            })
            .attach('file', fs.readFileSync('./src/controller/uploads/supportdocument-1556719980556.pdf'))
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});