var Account = require('../models/account')
var Order = require('../models/order')

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

exports.del = function (req, res) {
    var filterCondition = req.body
    Account.remove(filterCondition, function (err) {
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

exports.calEarnData = function (req, res) {
    var day = req.query.day
    var gtDate = Date.now() - 24 * 60 * 60 * 1000 * (day + 1)
    var ltDate = Date.now() - 24 * 60 * 60 * 1000 * day
    var payNum = 0
    Account.find({'meta.createAt': {$gt: gtDate, $lt: ltDate}, earn: 1}, function (err, accounts) {
        if (err) {
            res.send({
                success: false,
                reason: err
            })
        }
        for (var account of accounts) {
            payNum += account.value
        }
        Order.find({'meta.createAt': {$gt: gtDate, $lt: ltDate}, function (err, orders) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            }
            for (var order of orders) {
                payNum += order.price
            }
            res.send({
                success: true,
                payNum: payNum
            })
        })
    })
}

exports.calPayData = function (req, res) {
    var day = req.query.day
    var gtDate = Date.now() - 24 * 60 * 60 * 1000 * (day + 1)
    var ltDate = Date.now() - 24 * 60 * 60 * 1000 * day
    var payNum = 0
    Account.find({'meta.createAt': {$gt: gtDate, $lt: ltDate}, earn: 0}, function (err, accounts) {
        if (err) {
            res.send({
                success: false,
                reason: err
            })
        }
        for (var account of accounts) {
            payNum += account.value
        }
        res.send({
            success: true,
            payNum: payNum
        })
    })
}