var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId

var AccountSchema = new mongoose.Schema({
    type: {
        type: ObjectId,
        ref: 'AccountType'
    },
    earn: Number,
    value: Number,
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

AccountSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
})

AccountSchema.statics = {
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

module.exports = mongoose.model('Account', AccountSchema)