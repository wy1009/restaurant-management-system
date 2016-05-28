var Member = require('../models/member')

exports.fetch = function (req, res) {
    Member.fetch(function (err, members) {
        if (err) {
            res.send({
                success: false,
                reason: err
            })
        } else {
            res.send({
                success: true,
                memberList: members
            })
        }
    })
}