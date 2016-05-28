var Meal = require('../models/meal')

exports.save = function (req, res) {
    var mealObj = req.body
    var _meal
    if (mealObj.id) {

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
    var filterCondition = req.body
    Meal.find(filterCondition)
        .sort('meta.updateAt')
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