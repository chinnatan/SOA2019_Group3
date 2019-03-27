// Testing Subject

const server = require('../app')
const request = require('supertest')

describe('/subject', () => {
    beforeAll(async () => {
        console.log('change port to 5001 to test')
    })

    afterAll(() => {
        server.close()
        console.log('test complete & server close')
    })

    describe('GET /student/:userid with correct', () => {
        it('should return subject information for user by user id', async () => {
            const res = await request(server).get('/subject/student/1')
            expect(res.body).toEqual([
                {
                    "subjectid": "60123",
                    "subjectname": "SOA",
                    "subjectsection": 1,
                    "professor": "Somkiat"
                },
                {
                    "subjectid": "60124",
                    "subjectname": "SVAV",
                    "subjectsection": 1,
                    "professor": "Somkiat Wa."
                },
                {
                    "subjectid": "60125",
                    "subjectname": "LIB",
                    "subjectsection": 601,
                    "professor": "Chutima"
                }
            ])
        })
    })

    describe('GET /student/:userid with incorrect', () => {
        it('should return subject information for user not match by user id', async () => {
            const res = await request(server).get('/subject/student/2')
            expect(res.body).toEqual([
                {
                    "subjectid": "60123",
                    "subjectname": "SOA",
                    "subjectsection": 1,
                    "professor": "Somkiat"
                },
                {
                    "subjectid": "60124",
                    "subjectname": "SVAV",
                    "subjectsection": 1,
                    "professor": "Somkiat Wa."
                },
                {
                    "subjectid": "60125",
                    "subjectname": "LIB",
                    "subjectsection": 601,
                    "professor": "Chutima"
                }
            ])
        })
    })

    describe('GET /student/:userid with correct', () => {
        it('should return not found for user by user id', async () => {
            const res = await request(server).get('/subject/student/3')
            expect(res.status).toBe(404)
        })
    })
})