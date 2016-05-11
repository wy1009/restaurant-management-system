var Meal = require('../models/meal');

exports.save = function (req, res) {
    var mealObj = req.body;
    var id = req.body.id;
    
    var _meal;
    if (id) {

    } else {
        _meal = new Meal(mealObj);
        _meal.save(function (err, meal) {
            if (err) {
                res.send({
                    success: false,
                    reason: err
                });
            } else {
                res.send({
                    success: true
                });
            }
        });
    }
};

exports.search = function (req, res) {
    
}