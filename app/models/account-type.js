var mongoose = require('mongoose')

var AccountTypeSchema = new mongoose.Schema({
    name: String,
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

AccountTypeSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
})

AccountTypeSchema.statics = {
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

module.exports = mongoose.model('AccountType', AccountTypeSchema)