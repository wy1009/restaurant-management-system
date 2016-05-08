// api urls
var Category = require('./category');
var Meal = require('./meal');

module.exports = function (app) {
    // 菜品种类
    app.get('/api/category/', Category.fetch);
    // 菜单
    app.post('/api/meal/', Meal.save);
};