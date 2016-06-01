// 订单状态信息

var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId

var OrderStatusSchema = new mongoose.Schema({
    name: String,
    orders: [{
        type: ObjectId,
        ref: 'Order'
    }],
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

OrderStatusSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
})

OrderStatusSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.update')
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .sort('meta.updateAt')
            .exec(cb)
    }
}

module.exports = mongoose.model('OrderStatus', OrderStatusSchema)