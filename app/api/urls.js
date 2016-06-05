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
    app.delete('/api/category/', Category.del)
    // meal
    app.get('/api/meal/', Meal.search)
    app.post('/api/meal/', Meal.save)
    app.delete('/api/meal/', Meal.del)
    // customer
    app.get('/api/customer/', Customer.search)
    app.get('/api/customer/orderadd/', Customer.searchWithMemberInfo)
    app.post('/api/customer/', Customer.save)
    app.delete('/api/customer/', Customer.del)
    // member
    app.get('/api/member/', Member.fetch)
    app.post('/api/member', Member.save)
    app.delete('/api/member/', Member.del)
    // order
    app.get('/api/order/', Order.search)
    app.post('/api/order/', Order.save)
    app.delete('/api/order/', Order.del)
    // order-status
    app.get('/api/order-status/', OrderStatus.fetch)
    app.post('/api/order-status/', OrderStatus.save)
    app.delete('/api/order-status/', OrderStatus.del)
    // user
    app.get('/api/user', User.search)
    app.post('/api/user/', User.save)
    // account-type
    app.get('/api/account-type/', AccountType.fetch)
    app.post('/api/account-type/', AccountType.save)
    app.delete('/api/account-type/', AccountType.del)
    // account
    app.get('/api/account/', Account.search)
    app.post('/api/account/', Account.save)
    app.delete('/api/account/', Account.del)
}