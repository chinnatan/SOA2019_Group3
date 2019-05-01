const MySQL = require('mysql')
const mockLeavedocument = require('../../data/mockLeavedocument');
const _ = require('underscore');

const HOST_MYSQL = '35.240.188.199'
const PORT_MYSQL = '3310'

// Connect Database
var connect = MySQL.createConnection({
    host: HOST_MYSQL,
    port: PORT_MYSQL,
    user: 'root',
    password: 'soaeleaving',
    database: 'leavedatabase'
})

console.log(`[Leave Service] Connected to Mysql -> ${HOST_MYSQL}:${PORT_MYSQL}`);
connect.connect();

exports.getAllLeavedocument = (req, res) => {
    // For Mock
    // if (mockLeavedocument == "") {
    //     return res.sendStatus(404);
    // } else {
    //     return res.status(200).json(mockLeavedocument);
    // }

    connect.query('select * from document join document_subject on (document.document_id = document_subject.document_id)', function (err, results, fields) {
        if (results.length) {
            console.log('GET DATA COMPLETE')
            return res.status(200).json(results)
        } else {
            return res.status(404)
        }
    })
}

exports.getLeavedocumentById = (req, res) => {
    // For Mock
    // var filterLeavedocument = _.where(mockLeavedocument, { leavedocumentid: req.params.leaveid });

    // if (filterLeavedocument == "") {
    //     return res.sendStatus(404);
    // } else {
    //     return res.status(200).json(filterLeavedocument);
    // }

    var documentid = req.params.leaveid

    connect.query('select * from document join document_subject on (document.document_id = document_subject.document_id) \
    where document_id = ?', [documentid], function (err, results, fields) {
            if (results.length) {
                console.log('GET DATA COMPLETE')
                return res.status(200).json(results)
            } else {
                return res.status(404)
            }
        })
}

exports.getStatus = (req, res) => {
    var filterLeavedocument = _.where(mockLeavedocument, { leavedocumentid: req.params.leaveid });

    if (filterLeavedocument[0] == null) {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(filterLeavedocument[0].subjectlist);
    }
}

exports.getNumberSubjectLeave = (req, res) => {
    var userid = req.params.userid

    var sqlQuery = `select subject_name, count(*) as count, account_id from document_subject join document
    on (document_subject.document_id = document.document_id) group by subject_name having account_id = ?`

    connect.query(sqlQuery, [userid], function(err, results, fields) {
        if(results.length) {
            return res.status(200).json(results)
        } else {
            return res.status(400).json(err)
        }
    })
}

exports.postNewSickLeavedocument = (req, res) => {
    // For Mock
    // var docs = req.body
    // mockLeavedocument.push(docs)
    // return res.status(201).send({isCreateNewSickLeavedocument:true})

    // Document
    var document = JSON.parse(req.body.document);
    var documentid = document.document_id;
    var documentdate = document.document_date;
    var documentcatalog = document.document_catalog;
    var firstname = document.firstname;
    var lastname = document.lastname;
    var studentid = document.student_id;
    var studentterm = document.student_term;
    var schoolyear = document.school_year;
    var studentgeneration = document.student_generation;
    var studentbranch = document.student_branch;
    var studentdegree = document.student_degree;
    var comment = document.comment;
    var filepath = req.file.path;
    var since = document.since;
    var to = document.to;
    var total = document.total;
    var accountid = document.account_id;

    // Document Subject
    var status = "รออนุมัติ";
    var subjectname = JSON.parse(req.body.document_subject);
    var documentSubjectValue = []
    for (var subjectIndex in subjectname) {
        documentSubjectValue.push(
            [documentid, subjectname[subjectIndex].subjectList, status]
        )
    }

    var sqlDocumentInsert = `INSERT INTO 
        document (document_id, document_date, document_catalog, firstname, lastname, student_id, 
            student_term, school_year, student_generation, student_branch, student_degree, comment, filepath, 
            since, document.to, total, account_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connect.query(sqlDocumentInsert, [documentid, documentdate, documentcatalog,
        firstname, lastname, studentid, studentterm, schoolyear, studentgeneration,
        studentbranch, studentdegree, comment, filepath, since, to, total, accountid], function (err, results, fields) {
            if (!err) {
                console.log('INSERT DOCUMENT IS OK')

                var sqlDocumentSubjectInsert = `insert into document_subject (document_id, subject_name, status) VALUES ?`;
                connect.query(sqlDocumentSubjectInsert, [documentSubjectValue], function (err, results) {
                    if (!err) {
                        console.log('INSERT DOCUMENT SUBJECT IS OK')
                        return res.status(200).json({ success: "ส่งใบลาสำเร็จ" })
                    } else {
                        return res.status(400)
                    }
                })
            } else {
                return res.status(400)
            }
        })
}

exports.postNewPersonalLeavedocument = (req, res) => {
    // For Mock
    // var docs = req.body
    // mockLeavedocument.push(docs)
    // return res.status(201).send({ isCreateNewPersonalLeavedocument: true })

    // Document
    var document = JSON.parse(req.body.document);
    var documentid = document.document_id;
    var documentdate = document.document_date;
    var documentcatalog = document.document_catalog;
    var firstname = document.firstname;
    var lastname = document.lastname;
    var studentid = document.student_id;
    var studentterm = document.student_term;
    var schoolyear = document.school_year;
    var studentgeneration = document.student_generation;
    var studentbranch = document.student_branch;
    var studentdegree = document.student_degree;
    var comment = document.comment;
    var filepath = req.file.path;
    var since = document.since;
    var to = document.to;
    var total = document.total;
    var accountid = document.account_id;

    // Document Subject
    var status = "รออนุมัติ";
    var subjectname = JSON.parse(req.body.document_subject);
    var documentSubjectValue = []
    for (var subjectIndex in subjectname) {
        documentSubjectValue.push(
            [documentid, subjectname[subjectIndex].subjectList, status]
        )
    }

    var sqlDocumentInsert = `INSERT INTO 
        document (document_id, document_date, document_catalog, firstname, lastname, student_id, 
            student_term, school_year, student_generation, student_branch, student_degree, comment, filepath, 
            since, document.to, total, account_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connect.query(sqlDocumentInsert, [documentid, documentdate, documentcatalog,
        firstname, lastname, studentid, studentterm, schoolyear, studentgeneration,
        studentbranch, studentdegree, comment, filepath, since, to, total, accountid], function (err, results, fields) {
            if (!err) {
                console.log('INSERT DOCUMENT IS OK')

                var sqlDocumentSubjectInsert = `insert into document_subject (document_id, subject_name, status) VALUES ?`;
                connect.query(sqlDocumentSubjectInsert, [documentSubjectValue], function (err, results) {
                    if (!err) {
                        console.log('INSERT DOCUMENT SUBJECT IS OK')
                        return res.status(200).json({ success: "ส่งใบลาสำเร็จ" })
                    } else {
                        return res.status(400)
                    }
                })
            } else {
                return res.status(400)
            }
        })
}