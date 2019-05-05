// Testing User

const server = require('../server');
const request = require('supertest')

describe('/', () => {
    beforeAll(async () => {
        console.log('change port to 3001 to test')
    })

    afterAll(() => {
        server.close();
        console.log('test complete & server close')
    })

    describe('GET /api/user/:userid with correct', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/1')
            expect(res.body).toEqual([
                {
                    "account_id": 1,
                    "firstname": "ชินธันย์",
                    "lastname": "ชาติทอง"
                }
            ])
        })
    })

    describe('GET /api/user/:userid with incorrect', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/2')
            expect(res.body).toEqual([
                {
                    "account_id": 1,
                    "firstname": "ชินธันย์",
                    "lastname": "ชาติทอง"
                }
            ])
        })
    })

    describe('GET /api/user/:userid/student with correct', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/1/student')
            expect(res.body).toEqual([
                {
                    "firstname": "ชินธันย์",
                    "lastname": "ชาติทอง",
                    "student_id": "59070040",
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
        })
    })

    describe('GET /api/user/:userid/student with incorrect', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/1/student')
            expect(res.body).toEqual([
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
        })
    })

    describe('GET /api/user/:userid/ NOT FOUND', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/100')
            expect(res.body).toEqual(404)
        })
    })

    describe('GET /api/user/:userid/student NOT FOUND', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/100/student')
            expect(res.body).toEqual(404)
        })
    })
})