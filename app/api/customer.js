var Customer = require('../models/customer')

exports.save = function (req, res) {
    var customerObj = req.body
    var _customer
    if (customerObj.id) {

    } else {
        _customer = new Customer(customerObj)
        _customer.save(function (err, customer) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            } else {
                res.send({
                    success: true,
                    customer: customer
                })
            }
        })
    }
}

exports.search = function (req, res) {
    var filter = req.query
    Customer.find(filter)
        .exec(function (err, customers) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            } else {
                res.send({
                    success: true,
                    customers: customers
                })
            }
        })
}

// exports.fetch = function (req, res) {
//     Customer.fetch(function (err, customers) {
//         if (err) {
//             res.send({
//                 success: false,
//                 reason: err
//             })
//         } else {
//             res.send({
//                 success: true
//             })
//         }
//     })
// }