var Account = require('../models/account')

exports.save = function (req, res) {
    var accountObj = req.body
    var _account
    if (accountObj._id) {
        Account.findById(accountObj._id, function (err, account) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            }
            _account = _.extend(account, accountObj)
            _account.save(function (err, account) {
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
        _account = new Account(accountObj)
        _account.save(function (err, account) {
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
    var filterCondition = req.query
    Account.find(filterCondition)
        .sort('meta.createAt')
        .exec(function (err, accounts) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            } else {
                res.send({
                    success: true,
                    itemInfoList: accounts
                })
            }
        })
}