const MySQL = require('mysql')
const _ = require('underscore')

const HOST_MYSQL = '35.240.188.199'
const PORT_MYSQL = '3309'

// Connect Database
var connect = MySQL.createConnection({
    host: HOST_MYSQL,
    port: PORT_MYSQL,
    user: 'root',
    password: 'soaeleaving',
    database: 'subjectdatabase'
})

console.log(`[Subject Service] Connected to Mysql -> ${HOST_MYSQL}:${PORT_MYSQL}`);
connect.connect();

exports.getAllSubject = (req, res) => {

    connect.query('select * from subjects', function (err, results, fields) {
            if (results.length) {
                console.log("Get all subjects is ok")
                return res.status(200).json(results)
            } else {
                return res.status(404)
            }
        })
}

exports.getSubjectByUserId = (req, res) => {
    var userid = req.params.userid

    connect.query('select subject_code, subject_name, subject_day, subject_time, sub_student.subject_sect from subjects sub \
            join subject_sect sub_sect \
            on (sub.subject_id = sub_sect.subject_id) \
            join subject_student sub_student \
            on (sub_sect.subject_sect = sub_student.subject_sect and sub_sect.subject_id = sub_student.subject_id) \
            where account_id = ?', [userid], function (err, results, fields) {
            if (results.length) {
                console.log("Get subjects for user is ok")
                return res.status(200).json(results)
            } else {
                return res.status(404)
            }
        })
}

exports.getSubjectProfessorByUserId = (req, res) => {
    var userid = req.params.userid

    connect.query(`select subjects.subject_id, subjects.subject_code, subjects.subject_name from subjects join subject_professor on (subjects.subject_id = subject_professor.subject_id) where account_id = ?`, [userid], function (err, results, fields) {
        if (results.length) {
            console.log("Get subjects for user is ok")
            return res.status(200).json(results)
        } else {
            return res.status(404)
        }
    })

}