var Customer = require('../models/customer')
var _ = require('underscore')

exports.save = function (req, res) {
    var customerObj = req.body
    var _customer
    if (customerObj._id) {
        Customer.findById(customerObj._id, function (err, customer) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            }
            _customer = _.extend(customer, customerObj)
            _customer.save(function (err, customer) {
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
        _customer = new Customer(customerObj)
        _customer.save(function (err, customer) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            } else {
                Customer.findOne({_id: customer._id})
                    .populate('member')
                    .exec(function (err, customer) {
                        res.send({
                            success: true,
                            customer: customer
                        })
                    })
            }
        })
    }
}

exports.search = function (req, res) {
    var filterCondition = req.query
    Customer.find(filterCondition)
        .exec(function (err, customers) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            } else {
                res.send({
                    success: true,
                    itemInfoList: customers
                })
            }
        })
}

exports.searchWithMemberInfo = function (req, res) {
    var filterCondition = req.query
    Customer.find(filterCondition)
        .populate('member')
        .exec(function (err, customers) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            } else {
                res.send({
                    success: true,
                    customerList: customers
                })
            }
        })
}

exports.del = function (req, res) {
    var filterCondition = req.body
    Customer.remove(filterCondition, function (err) {
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