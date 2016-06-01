// 订单信息

var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId

var OrderSchema = new mongoose.Schema({
    customer: {
        type: ObjectId,
        ref: 'Customer' // 建立Model时的名称
    },
    meal: [{
        id: {
            type: ObjectId,
            ref: 'Meal'
        },
        count: Number
    }],
    status: String,
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
            .sort('meta.update')
            .exec(cb)
    }
}

module.exports = mongoose.model('Order', OrderSchema)

