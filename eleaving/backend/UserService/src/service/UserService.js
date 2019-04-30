const mockUser = require('../../data/mockUser');
const _ = require('underscore');
const MySQL = require('mysql')

// Connect Database
var connect = MySQL.createConnection({
    host: '35.240.188.199',
    port: '3308',
    user: 'root',
    password: 'soaeleaving',
    database: 'userdatabase'
})

console.log("[User Service] Connected to Mysql");
connect.connect();

exports.getUserById = (req, res) => {
    var userid = req.params.userid;

    connect.query('SELECT * FROM userinformation WHERE account_id = ?', [userid], function(err, results, fields) {
        if(results.length) {
            console.log("GET USER IS OK")
            return res.status(200).json(results)
        } else {
            return res.status(404)
        }
    })
}

exports.getUserByIdWithStudent = (req, res) => {
    var userid = req.params.userid;

    connect.query('select firstname, lastname, student_id, student_term, \
    student_year, student_generation, student_branch, student_sect, student_faculty, student_degree, \
    school_year from userinformation join student \
    on (userinformation.account_id = student.account_id) WHERE userinformation.account_id = ?', [userid], function(err, results, fields) {
        
        if(results.length) {
            console.log("GET User with student is OK")
            return res.status(200).json(results)
        } else {
            return res.status(404)
        }
    })
}