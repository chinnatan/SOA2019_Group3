const mockUser = require('../../data/mockUser');
const _ = require('underscore');

exports.getUserById = (req, res) => {
    var filterUser = _.where(mockUser, {userid: parseInt(req.params.userid)});
    console.log(typeof req.params.userid);

    if(filterUser == "") {
        return res.sendStatus(404);
    } else {
        return res.status(200).json(filterUser);
    }
}