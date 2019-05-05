const MySQL = require('mysql')

var sha1 = require('sha1')

const HOST_MYSQL = '35.240.188.199'
const PORT_MYSQL = '3307'

// Connect Database
var connect = MySQL.createConnection({
    host: HOST_MYSQL,
    port: PORT_MYSQL,
    user: 'root',
    password: 'soaeleaving',
    database: 'authdatabase'
})

console.log(`[Auth Service] Connected to Mysql -> ${HOST_MYSQL}:${PORT_MYSQL}`);
connect.connect();

exports.login = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    if (username && password) {
        connect.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (err, results, fields) {
            console.log(results);
            if (results.length) {
                res.status(200).send({"account_id": results[0].account_id, "username": results[0].username, "account_type": results[0].account_type, "isLogin": true})
            } else {
                res.status(400).send({"isLogin": 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'});
            }
            res.end();
        });
    } else {
        res.status(400).send({"isLogin": 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน'});
        res.end();
    }
}