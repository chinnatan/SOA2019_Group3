const mockSubject = require('../../data/mockSubject')
const _ = require('underscore')

exports.getSubjectByUserId = (req, res) => {
    var filterSubject = _.where(mockSubject, {userid: parseInt(req.params.userid)})

    if(filterSubject == "") {
        return res.sendStatus(404)
    } else {
        var docs = []
        
        for(var count in filterSubject) {
            docs.push({subjectid: filterSubject[count].subjectid,
                subjectname: filterSubject[count].subjectname,
                subjectsection: filterSubject[count].subjectsection,
                professor: filterSubject[count].professor
            })
        }

        return res.status(200).json(docs)
    }
}