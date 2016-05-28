// api urls
var Category = require('./category')
var Meal = require('./meal')
var Customer = require('./customer')
var Member = require('./member')

module.exports = function (app) {
    // category
    app.get('/api/category/', Category.fetch)
    app.post('/api/category/', Category.save)
    // meal
    app.get('/api/meal/', Meal.search)
    app.post('/api/meal/', Meal.save)
    // customer
    app.post('/api/customer/', Customer.save)
    // member
    app.get('/api/member/', Member.fetch)
}