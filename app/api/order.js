var Order = require('../models/order')

exports.save = function (req, res) {
    var orderObj = req.body
    if (orderObj._id) {

    } else {
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