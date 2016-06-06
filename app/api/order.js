var Order = require('../models/order')
var OrderStatus = require('../models/order-status')

exports.save = function (req, res) {
    var orderObj = req.body
    if (orderObj._id) {
        Order.update({_id: orderObj._id}, {$set: orderObj}, function (err) {
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
        var orderStatus = []
        OrderStatus.fetch(function (err, orderstatuses) {
            if (err) {
                console.log(err)
            } else {
                for (var item of orderstatuses) {
                    if (item.name == '暂挂') {
                        orderStatus[0] = item
                    } else if (item.name == '未支付') {
                        orderStatus[1] = item
                    }
                }
                orderObj.status = orderStatus[orderObj.status]._id
                _order = new Order(orderObj)
                _order.save(function (err, order) {
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
        })
    }
}

exports.search = function (req, res) {
    var filterCondition = req.query
    Order.find(filterCondition)
        .populate('customer meals.meal')
        .exec(function (err, orders) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            } else {
                res.send({
                    success: true,
                    itemInfoList: orders
                })
            }
        })
}

exports.del = function (req, res) {
    var filterCondition = req.body
    Order.remove(filterCondition, function (err) {
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