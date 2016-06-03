var OrderStatus = require('../models/order-status')
var _ = require('underscore')

exports.fetch = function (req, res) {
    OrderStatus.fetch(function (err, orderstatuses) {
        if (err) {
            res.send({
                success: false,
                reason: err
            })
        } else {
            res.send({
                success: true,
                orderstatuses: orderstatuses
            })
        }
    })
}

exports.save = function (req, res) {
    var orderStatusObj = req.body
    var _orderStatus
    if (orderStatusObj.id) {

    } else {
        _orderStatus = new OrderStatus(orderStatusObj)
        _orderStatus.save(function (err, orderstatus) {
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