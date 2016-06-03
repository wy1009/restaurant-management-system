// api urls
var Category = require('./category')
var Meal = require('./meal')
var Customer = require('./customer')
var Member = require('./member')
var Order = require('./order')
var OrderStatus = require('./order-status')
var User = require('./user')
var AccountType = require('./account-type')
var Account = require('./account')

module.exports = function (app) {
    // category
    app.get('/api/category/', Category.fetch)
    app.post('/api/category/', Category.save)
    // meal
    app.get('/api/meal/', Meal.search)
    app.post('/api/meal/', Meal.save)
    // customer
    app.get('/api/customer/', Customer.search)
    app.get('/api/customer/order/', Customer.searchWithMemberInfo)
    app.post('/api/customer/', Customer.save)
    // member
    app.get('/api/member/', Member.fetch)
    app.post('/api/member', Member.save)
    // order
    app.get('/api/order/', Order.search)
    app.post('/api/order/', Order.save)
    // order-status
    app.get('/api/order-status/', OrderStatus.fetch)
    app.post('/api/order-status/', OrderStatus.save)
    // user
    app.get('/api/user', User.search)
    app.post('/api/user/', User.save)
    // account-type
    app.get('/api/account-type/', AccountType.fetch)
    app.post('/api/account-type/', AccountType.save)
    // account
    app.get('/api/account/', Account.search)
    app.post('/api/account/', Account.save)
}