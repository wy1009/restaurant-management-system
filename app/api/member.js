var Member = require('../models/member')
var _ = require('underscore')

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
                classInfoList: members
            })
        }
    })
}

exports.save = function (req, res) {
    var memberObj = req.body
    var _member
    if (memberObj._id) {
        Member.findById(memberObj._id, function (err, member) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            }
            _member = _.extend(member, memberObj)
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
        })
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

exports.del = function (req, res) {
    var filterCondition = req.body
    Member.remove(filterCondition, function (err) {
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