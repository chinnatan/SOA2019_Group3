// Testing Subject

const server = require('../server')
const request = require('supertest')

describe('/', () => {
    beforeAll(async () => {
        console.log('change port to 5001 to test')
    })

    afterAll(async () => {
        server.close()
        console.log('test complete & server close')
    })

    describe('GET /api/subject/user/:userid with correct', () => {
        it('should return subject information for user by user id', async () => {
            const res = await request(server).get('/user/1')
            expect(res.body).toEqual([
                {
                    "subject_code": "06016222",
                    "subject_name": "INFORMATION TECHNOLOGY PROJECT MANAGEMENT",
                    "subject_day": "พฤหัสบดี",
                    "subject_time": "09:00 - 12:00",
                    "subject_sect": 1
                },
                {
                    "subject_code": "06016223",
                    "subject_name": "SEMINAR ON PROFESSIONAL COMMUNICATION SKILLS",
                    "subject_day": "เสาร์",
                    "subject_time": "09:00 - 10:00",
                    "subject_sect": 1
                },
                {
                    "subject_code": "06016229",
                    "subject_name": "SOFTWARE VERIFICATION AND VALIDATION",
                    "subject_day": "พุธ",
                    "subject_time": "09:00 - 12:00",
                    "subject_sect": 1
                },
                {
                    "subject_code": "06016230",
                    "subject_name": "SOA AND SERVICE PROGRAMMING",
                    "subject_day": "อังคาร",
                    "subject_time": "09:00 - 13:00",
                    "subject_sect": 1
                }
            ])
        })
    })

    describe('GET /api/subject/user/:userid with incorrect', () => {
        it('should return subject information for user not match by user id', async () => {
            const res = await request(server).get('/user/2')
            expect(res.body).toEqual([
                {
                    "subject_code": "06016222",
                    "subject_name": "INFORMATION TECHNOLOGY PROJECT MANAGEMENT",
                    "subject_day": "พฤหัสบดี",
                    "subject_time": "09:00 - 12:00",
                    "subject_sect": 1
                },
                {
                    "subject_code": "06016223",
                    "subject_name": "SEMINAR ON PROFESSIONAL COMMUNICATION SKILLS",
                    "subject_day": "เสาร์",
                    "subject_time": "09:00 - 10:00",
                    "subject_sect": 1
                },
                {
                    "subject_code": "06016229",
                    "subject_name": "SOFTWARE VERIFICATION AND VALIDATION",
                    "subject_day": "พุธ",
                    "subject_time": "09:00 - 12:00",
                    "subject_sect": 1
                },
                {
                    "subject_code": "06016230",
                    "subject_name": "SOA AND SERVICE PROGRAMMING",
                    "subject_day": "อังคาร",
                    "subject_time": "09:00 - 13:00",
                    "subject_sect": 1
                }
            ])
        })
    })

    describe('GET /api/subject/user/ USER ID IS NULL', () => {
        it('should return not found for user by user id', async () => {
            const res = await request(server).get('/user/')
            expect(res.status).toBe(404)
        })
    })

    describe('GET /api/subject/user/:userid SUBJECT NOT FOUND', () => {
        it('should return not found for user by user id', async () => {
            const res = await request(server).get('/user/2/')
            expect(res.status).toBe(404)
        })
    })

    describe('GET /api/subject/user/:userid/professor SUBJECT FOR PROFESSOR', () => {
        it('should return not found for user by user id', async () => {
            const res = await request(server).get('/user/2/professor')
            expect(res.body).toEqual([
                {
                    "subject_id": 1,
                    "subject_code": "06016222",
                    "subject_name": "INFORMATION TECHNOLOGY PROJECT MANAGEMENT"
                }
            ])
        })
    })

    describe('GET /api/subject/user/ SUBJECT NOT FOUND', () => {
        it('should return not found for user by user id', async () => {
            const res = await request(server).get('/user/1/professor')
            expect(res.status).toBe(404)
        })
    })
})