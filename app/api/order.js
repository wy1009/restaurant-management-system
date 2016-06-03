var Order = require('../models/order')
var OrderStatus = require('../models/order-status')

exports.save = function (req, res) {
    var orderObj = req.body
    if (orderObj._id) {

    } else {
        var orderStatus = []
        OrderStatus.fetch(function (err, orderstatuses) {
            if (err) {
                console.log(err)
            } else {
                for (i of orderstatuses) {
                    if (orderstatuses[i].name = '暂挂') {
                        orderStatus[0] = orderstatuses[i]
                    } else if (orderstatuses[i].name == '未支付') {
                        orderStatus[1] = orderstatuses[i]
                    }
                }
            }
        })
        orderObj.status = orderStatus[orderObj.status]
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
}

exports.search = function (req, res) {
    var filterCondition = req.query
    Order.find(filterCondition)
        .populate('meals.id')
        .exec(function (err, orders) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            } else {
                res.send({
                    success: true,
                    orderList: orders
                })
            }
        })
}