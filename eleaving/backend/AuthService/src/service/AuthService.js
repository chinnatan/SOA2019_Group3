const MySQL = require('mysql')

var sha1 = require('sha1')

// Connect Database
var connect = MySQL.createConnection({
    host: 'ihost.it.kmitl.ac.th',
    user: 'it59070040_leave',
    password: '35711mm38',
    database: 'it59070040_leave'
})

console.log("Auth Service Connected to Mysql");
connect.connect();

exports.login = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    if (username && password) {
        connect.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, sha1(password)], function (err, results, fields) {
            console.log(results);
            if (results.length) {
                console.log("Login success");
                res.status(200).send({"account_id": results[0].account_id, "username": results[0].username, "account_type": results[0].account_type, "isLogin": true})
            } else {
                res.status(200).send({"isLogin": 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'});
            }
            res.end();
        });
    } else {
        res.status(200).send({"isLogin": 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน'});
        res.end();
    }
}