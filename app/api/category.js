var Category = require('../models/category')
var _ = require('underscore')

exports.save = function (req, res) {
    var categoryObj = req.body

    var _category
    if (categoryObj._id) {
        Category.findById(categoryObj._id, function (err, category) {
            _category = _.extend(category, categoryObj)
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
        })
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