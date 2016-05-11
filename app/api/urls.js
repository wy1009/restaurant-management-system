// api urls
var Category = require('./category');
var Meal = require('./meal');

module.exports = function (app) {
    // 菜品种类
    app.get('/api/category/', Category.fetch);
    app.post('/api/category/', Category.save);
    // 菜单
    app.get('/api/meal/', Meal.search);
    app.post('/api/meal/', Meal.save);
};