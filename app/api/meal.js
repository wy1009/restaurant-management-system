var Meal = require('../models/meal')
var _ = require('underscore')

exports.save = function (req, res) {
    var mealObj = req.body
    var _meal
    if (mealObj._id) {
        Meal.findById(mealObj._id, function (err, meal) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            }
            _meal = _.extend(meal, mealObj)
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
                    itemInfoList: meals
                })
            }
        })
}

exports.del = function (req, res) {
    var filterCondition = req.body
    Meal.remove(filterCondition, function (err) {
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

exports.addSales = function (req, res) {
    var meals = req.body.meals
    var mealFind = function (index) {
        Meal.findOne({_id: meals[index].meal}, function (err, meal) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                })
            }
            meal.sales += meals[index].count
            meal.save(function (err) {
                if (err) {
                    res.send({
                        success: false,
                        reason: err
                    })
                }
                if (index == meals.length - 1) {
                    res.send({
                        success: true
                    })
                } else {
                    mealFind(index + 1)
                }
            })
        })
    }
    mealFind(0)
}