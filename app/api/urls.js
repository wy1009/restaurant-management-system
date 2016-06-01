// api urls
var Category = require('./category')
var Meal = require('./meal')
var Customer = require('./customer')
var Member = require('./member')
var Order = require('./order')

module.exports = function (app) {
    // category
    app.get('/api/category/', Category.fetch)
    app.post('/api/category/', Category.save)
    // meal
    app.get('/api/meal/', Meal.search)
    app.post('/api/meal/', Meal.save)
    // customer
    app.get('/api/customer/', Customer.search)
    app.post('/api/customer/', Customer.save)
    // member
    app.get('/api/member/', Member.fetch)
    app.post('/api/member', Member.save)
    // order
    app.post('/api/order/', Order.save)
}