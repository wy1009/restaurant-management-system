var Meal = require('../models/meal')
var _ = require('underscore')

exports.save = function (req, res) {
    var mealObj = req.body
    var _meal
    if (mealObj._id) {
        Meal.findById(mealObj._id, function (err, meal) {
            _meal = _.extend(meal, mealObj)
            console.log(mealObj)
            _meal.save(function (err, meal) {
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
        _meal = new Meal(mealObj)
        _meal.save(function (err, meal) {
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
    Meal.find(filterCondition)
        .sort('meta.createAt')
        .exec(function (err, meals) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            } else {
                res.send({
                    success: true,
                    mealList: meals
                })
            }
        })
}