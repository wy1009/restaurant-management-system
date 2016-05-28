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

exports.save = function (req, res) {
    var memberObj = req.body
    var _member
    if (memberObj.id) {

    } else {
        _member = new Member(memberObj)
        _member.save(function (err, member) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            } else {
                res.send({
                    success: true
                })
            }
        })
    }
}