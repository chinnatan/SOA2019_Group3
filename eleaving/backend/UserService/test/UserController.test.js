// Testing User

const server = require('../app');
const request = require('supertest')

describe('/user', () => {
    beforeAll(async () => {
        console.log('change port to 3001 to test')
    })

    afterAll(() => {
        server.close();
        console.log('test complete & server.close')
    })

    describe('GET /:id with correct', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/user/1')
            expect(res.body).toEqual([
                {
                    "userid": 1,
                    "username": "it59070040",
                    "firstname": "ชินธันย์",
                    "lastname": "ชาติทอง",
                    "studentid": "59070040",
                    "term": 2,
                    "schoolyear": 2561,
                    "studentyear": 3,
                    "studentgeneration": 14,
                    "studentbranch": "Information Technology",
                    "studentdegree": "ปริญญาตรี"
                }
            ])
        })
    })

    describe('GET /:id with incorrect', () => {
        it('should return user information by id', async () => {
            const res = await request(server).get('/user/2')
            expect(res.body).toEqual([
                {
                    "userid": 1,
                    "username": "it59070040",
                    "firstname": "ชินธันย์",
                    "lastname": "ชาติทอง",
                    "studentid": "59070040",
                    "term": 2,
                    "schoolyear": 2561,
                    "studentyear": 3,
                    "studentgeneration": 14,
                    "studentbranch": "Information Technology",
                    "studentdegree": "ปริญญาตรี"
                }
            ])
        })
    })
})