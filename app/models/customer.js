// 客人信息

var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId

var CustomerSchema = new mongoose.Schema({
    name: String, // 客人姓名
    phone: String, // 客人电话
    member: { // 会员信息
        type: ObjectId,
        ref: 'Member'
    },
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

CustomerSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
})

CustomerSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .sort('meta.updateAt')
            .exec(cb)
    }
}

module.exports = mongoose.model('Customer', CustomerSchema)