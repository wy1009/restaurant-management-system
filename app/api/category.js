var Category = require('../models/category');

exports.save = function (req, res) {
    var categoryObj = req.body;
    var id = req.body.id;

    var _category;
    if (id) {

    } else {
        _category = new Category(categoryObj);
        _category.save(function (err, category) {
            if (err) {
                console.log(err);
            }
            console.log(category);
            console.log('aaaaaaaaaaa');
        });
    }
    res.send({
        success: true
    });
};

exports.fetch = function (req, res) {
    Category.fetch(function (err, categories) {
        if (err) {
            console.log(err);
        } else {
            res.send({
                success: true,
                category_list: categories
            });
        }
    });
};