// Testing Leave

const server = require('../app');
const request = require('supertest')

describe('/leave', () => {
    beforeAll(async () => {
        console.log('change port to 4001 to test')
    })

    afterAll(() => {
        server.close();
        console.log('test complete & server.close')
    })

    describe('GET / with correct', () => {
        it('should return all leavedocument', async () => {
            const res = await request(server).get('/leave')
            expect(res.body).toEqual([
                {
                    "leavedocumentid": "sl001",
                    "leavedocumentcategory": "ลาป่วย",
                    "leavedocumentdate": "26/03/2562",
                    "firstname": "ชินธันย์",
                    "lastname": "ชาติทอง",
                    "studentid": "59070040",
                    "term": 2,
                    "schoolyear": 2561,
                    "studentyear": 3,
                    "studentgeneration": 14,
                    "studentbranch": "Information Technology",
                    "studentdegree": "ปริญญาตรี",
                    "description": "ลำไส้อักเสบ",
                    "namedocument": [
                        {
                            "namedocumentid": 1,
                            "filename": "ใบรับรองแพทย์"
                        }
                    ],
                    "startleavedate": "25/03/2562",
                    "endleavedate": "25/03/2562",
                    "totaldate": 1,
                    "subjectlist": [
                        {
                            "id": "60123",
                            "name": "SOA",
                            "section": 1,
                            "professor": "Somkiat",
                            "status": "รออนุมัติ"
                        },
                        {
                            "id": "60124",
                            "name": "SVAV",
                            "section": 1,
                            "professor": "Somkiat Wa.",
                            "status": "รออนุมัติ"
                        },
                        {
                            "id": "60125",
                            "name": "LIB",
                            "section": 601,
                            "professor": "Chutima",
                            "status": "อนุมัติ"
                        }
                    ]
                },
                {
                    "leavedocumentid": "pn001",
                    "leavedocumentcategory": "ลากิจ",
                    "leavedocumentdate": "27/03/2562",
                    "firstname": "ชินธันย์",
                    "lastname": "ชาติทอง",
                    "studentid": "59070040",
                    "term": 2,
                    "schoolyear": 2561,
                    "studentyear": 3,
                    "studentgeneration": 14,
                    "studentbranch": "Information Technology",
                    "studentdegree": "ปริญญาตรี",
                    "description": "ไปทำธุระต่างจังหวัด",
                    "namedocument": {},
                    "startleavedate": "27/03/2562",
                    "endleavedate": "27/03/2562",
                    "totaldate": 1,
                    "subjectlist": [
                        {
                            "id": "60123",
                            "name": "SOA",
                            "section": 1,
                            "professor": "Somkiat",
                            "status": "อนุมัติ"
                        },
                        {
                            "id": "60124",
                            "name": "SVAV",
                            "section": 1,
                            "professor": "Somkiat Wa.",
                            "status": "อนุมัติ"
                        },
                        {
                            "id": "60125",
                            "name": "LIB",
                            "section": 601,
                            "professor": "Chutima",
                            "status": "อนุมัติ"
                        }
                    ]
                }
            ])
        })
    })

    describe('GET / with incorrect', () => {
        it('should return not found', async () => {
            const res = await request(server).get('/leave')
            expect(res.status).toBe(404)
        })
    })

    describe('GET /:leaveid with correct', () => {
        it('should return leavedocument by id', async () => {
            const res = await request(server).get('/leave/sl001')
            expect(res.body).toEqual([
                {
                    "leavedocumentid": "sl001",
                    "leavedocumentcategory": "ลาป่วย",
                    "leavedocumentdate": "26/03/2562",
                    "firstname": "ชินธันย์",
                    "lastname": "ชาติทอง",
                    "studentid": "59070040",
                    "term": 2,
                    "schoolyear": 2561,
                    "studentyear": 3,
                    "studentgeneration": 14,
                    "studentbranch": "Information Technology",
                    "studentdegree": "ปริญญาตรี",
                    "description": "ลำไส้อักเสบ",
                    "namedocument": [
                        {
                            "namedocumentid": 1,
                            "filename": "ใบรับรองแพทย์"
                        }
                    ],
                    "startleavedate": "25/03/2562",
                    "endleavedate": "25/03/2562",
                    "totaldate": 1,
                    "subjectlist": [
                        {
                            "id": "60123",
                            "name": "SOA",
                            "section": 1,
                            "professor": "Somkiat",
                            "status": "รออนุมัติ"
                        },
                        {
                            "id": "60124",
                            "name": "SVAV",
                            "section": 1,
                            "professor": "Somkiat Wa.",
                            "status": "รออนุมัติ"
                        },
                        {
                            "id": "60125",
                            "name": "LIB",
                            "section": 601,
                            "professor": "Chutima",
                            "status": "อนุมัติ"
                        }
                    ]
                }
            ])
        })
    })

    describe('GET /:leaveid with incorrect', () => {
        it('should return leavedocument by id', async () => {
            const res = await request(server).get('/leave/sl002')
            expect(res.body).toEqual([
                {
                    "leavedocumentid": "sl001",
                    "leavedocumentcategory": "ลาป่วย",
                    "leavedocumentdate": "26/03/2562",
                    "firstname": "ชินธันย์",
                    "lastname": "ชาติทอง",
                    "studentid": "59070040",
                    "term": 2,
                    "schoolyear": 2561,
                    "studentyear": 3,
                    "studentgeneration": 14,
                    "studentbranch": "Information Technology",
                    "studentdegree": "ปริญญาตรี",
                    "description": "ลำไส้อักเสบ",
                    "namedocument": [
                        {
                            "namedocumentid": 1,
                            "filename": "ใบรับรองแพทย์"
                        }
                    ],
                    "startleavedate": "25/03/2562",
                    "endleavedate": "25/03/2562",
                    "totaldate": 1,
                    "subjectlist": [
                        {
                            "id": "60123",
                            "name": "SOA",
                            "section": 1,
                            "professor": "Somkiat",
                            "status": "รออนุมัติ"
                        },
                        {
                            "id": "60124",
                            "name": "SVAV",
                            "section": 1,
                            "professor": "Somkiat Wa.",
                            "status": "รออนุมัติ"
                        },
                        {
                            "id": "60125",
                            "name": "LIB",
                            "section": 601,
                            "professor": "Chutima",
                            "status": "อนุมัติ"
                        }
                    ]
                }
            ])
        })
    })

    describe('GET /:leaveid/status with correct', () => {
        it('should return status by leaveid', async () => {
            const res = await request(server).get('/leave/sl001/status')
            expect(res.body).toEqual([
                {
                    "id": "60123",
                    "name": "SOA",
                    "section": 1,
                    "professor": "Somkiat",
                    "status": "รออนุมัติ"
                },
                {
                    "id": "60124",
                    "name": "SVAV",
                    "section": 1,
                    "professor": "Somkiat Wa.",
                    "status": "รออนุมัติ"
                },
                {
                    "id": "60125",
                    "name": "LIB",
                    "section": 601,
                    "professor": "Chutima",
                    "status": "อนุมัติ"
                }
            ])
        })
    })

    describe('GET /:leaveid/status with incorrect', () => {
        it('should return status by leaveid', async () => {
            const res = await request(server).get('/leave/sl000/status')
            expect(res.body).toEqual([
                {
                    "id": "60123",
                    "name": "SOA",
                    "section": 1,
                    "professor": "Somkiat",
                    "status": "รออนุมัติ"
                },
                {
                    "id": "60124",
                    "name": "SVAV",
                    "section": 1,
                    "professor": "Somkiat Wa.",
                    "status": "รออนุมัติ"
                },
                {
                    "id": "60125",
                    "name": "LIB",
                    "section": 601,
                    "professor": "Chutima",
                    "status": "อนุมัติ"
                }
            ])
        })
    })

    describe('POST /sick/send with correct', () => {
        it('should return true', async () => {
            const res = await request(server).post('/leave/sick/send')
            expect(res.status).toBe(201)
        })
    })

    describe('POST /personal/send with correct', () => {
        it('should return true', async () => {
            const res = await request(server).post('/leave/personal/send')
            expect(res.status).toBe(201)
        })
    })
})