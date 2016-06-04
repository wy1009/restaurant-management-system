var AccountType = require('../models/account-type')

exports.save = function (req, res) {
    var accountTypeObj = req.body

    var _accountType
    if (accountTypeObj._id) {
        AccountType.update({_id: accountTypeObj._id}, {$set: accountTypeObj}, function (err) {
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
    } else {
        _accountType = new AccountType(accountTypeObj)
        _accountType.save(function (err, accountType) {
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

exports.fetch = function (req, res) {
    AccountType.fetch(function (err, accouttypes) {
        if (err) {
            res.send({
                success: false,
                reason: err
            })
        } else {
            res.send({
                success: true,
                accountTypeList: accouttypes
            })
        }
    })
}

exports.del = function (req, res) {
    console.log(req)
}