// 订单信息

var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId

var OrderSchema = new mongoose.Schema({
    customer: {
        type: ObjectId,
        ref: 'Customer' // 建立Model时的名称
    },
    meals: [{
        meal: {
            type: ObjectId,
            ref: 'Meal'
        },
        count: Number
    }],
    status: {
        type: ObjectId,
        ref: 'OrderStatus'
    },
    price: Number,
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

OrderSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
})

OrderSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.createAt')
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .sort('meta.createAt')
            .exec(cb)
    }
}

module.exports = mongoose.model('Order', OrderSchema)