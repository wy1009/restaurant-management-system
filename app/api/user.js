var User = require('../models/user')

exports.save = function (req, res) {
    var userObj = req.body
    var _user
    if (userObj._id) {

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