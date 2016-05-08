// api urls
var Meal = require('./meal');

module.exports = function (app) {
    app.post('/api/meal/', Meal.save);
};