var Category = require('../models/category')

exports.save = function (req, res) {
    var categoryObj = req.body
    var id = req.body.id

    var _category
    if (id) {

    } else {
        _category = new Category(categoryObj)
        _category.save(function (err, category) {
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
    Category.fetch(function (err, categories) {
        if (err) {
            res.send({
                success: false,
                reason: err
            })
        } else {
            res.send({
                success: true,
                categoryList: categories
            })
        }
    })
}