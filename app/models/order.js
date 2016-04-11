// 订单信息

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var OrderSchema = mongoose.Schema({
    customer: {
        type: ObjectId,
        ref: 'Customer'
    },
    member: {
        type: ObjectId,
        ref: 'Member'
    },
    meal: {
        type: ObjectId,
        ref: 'Meal'
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
});

OrderSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
});

OrderSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.update')
            .exec(cb);
    }
};

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

