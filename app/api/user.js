var User = require('../models/user')
var _ = require('underscore')

exports.save = function (req, res) {
    var userObj = req.body
    var _user
    if (userObj._id) {
        User.findById(userObj._id, function (err, user) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            }
            _user = _.extend(user, userObj)
            _user.save(function (err, user) {
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
        _user = new User(userObj)
        _user.save(function (err, user) {
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

exports.search = function (req, res) {
    var filter = {
        role: req.query.role
    }
    User.find(filter)
        .exec(function (err, users) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            } else {
                res.send({
                    success: true,
                    userList: users
                })
            }
        })
}