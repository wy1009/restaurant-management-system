var AccountType = require('../models/account-type')

exports.save = function (req, res) {
    var accountTypeObj = req.body

    var _accountType
    if (accountTypeObj._id) {
        AccountType.findById(accountTypeObj._id, function (err, accountType) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            }
            _accountType = _.extend(accountType, accountTypeObj)
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