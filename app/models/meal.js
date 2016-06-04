var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId

var MealSchema = new mongoose.Schema({
    name: String, // 菜品名称
    category: {
        type: ObjectId,
        ref: 'Category'
    }, // 菜品类别
    sales: {
        type: Number,
        default: 0
    }, // 菜品销售量
    price: Number, // 菜品价格
    description: String,
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

MealSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
})

MealSchema.statics = {
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

module.exports = mongoose.model('Meal', MealSchema)