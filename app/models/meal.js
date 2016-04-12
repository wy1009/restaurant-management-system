var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var MealSchema = new mongoose.Schema({
    name: String, // 菜品名称
    type: String, // 菜品类别
    price: Number, // 菜品价格
    sales: Number, // 菜品销售量
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
});

MealSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
});

MealSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    },
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .sort('meta.updateAt')
            .exec(cb);
    }
};

var Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;