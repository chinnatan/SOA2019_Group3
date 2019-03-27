const mockLeavedocument = require('../../data/mockLeavedocument');
const _ = require('underscore');

exports.getAllLeavedocument = (req, res) => {
    if (mockLeavedocument == "") {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(mockLeavedocument);
    }
}

exports.getLeavedocumentById = (req, res) => {
    var filterLeavedocument = _.where(mockLeavedocument, { leavedocumentid: req.params.leaveid });

    if (filterLeavedocument == "") {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(filterLeavedocument);
    }
}

exports.getStatus = (req, res) => {
    var filterLeavedocument = _.where(mockLeavedocument, { leavedocumentid: req.params.leaveid });

    if (filterLeavedocument[0] == null) {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(filterLeavedocument[0].subjectlist);
    }
}

exports.postNewSickLeavedocument = (req, res) => {
    var docs = req.body
    
    mockLeavedocument.push(docs)
    
    return res.status(201).send({isCreateNewSickLeavedocument:true})
}

exports.postNewPersonalLeavedocument = (req, res) => {
    var docs = req.body
    
    mockLeavedocument.push(docs)
    
    return res.status(201).send({isCreateNewPersonalLeavedocument:true})
}