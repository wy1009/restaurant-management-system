var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String, // 员工姓名
    // 0: 普通员工
    // 50: 管理员
    role: { // 员工权限
        type: Number,
        default: 0
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

UserSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
});

UserSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.update')
            .exec(cb);
    }
};

var User = mongoose.model('User', UserSchema);

module.exports = User;