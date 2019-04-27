const mockUser = require('../../data/mockUser');
const _ = require('underscore');
const MySQL = require('mysql')

// Connect Database
var connect = MySQL.createConnection({
    host: 'ihost.it.kmitl.ac.th',
    user: 'it59070040_leave',
    password: '35711mm38',
    database: 'it59070040_leave'
})

console.log("[User Service] Connected to Mysql");
connect.connect();

exports.getUserById = (req, res) => {
    var userid = req.params.userid;

    connect.query('SELECT * FROM users WHERE account_id = ?', [userid], function(err, results, fields) {
        if(results.length) {
            console.log("GET USER IS OK")
            return res.status(200).json(results)
        } else {
            return res.status(404)
        }
    })
}