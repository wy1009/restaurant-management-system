var mongoose = require('mongoose');

var MemberSchema = new mongoose.Schema({
    name: String,
    title: String,
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

MemberSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    next();
});

MemberSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.createAt')
            .exec(cb);
    },
    fetchById: function (id, cb) {
        return this
            .findOne({_id: id})
            .sort('meta.createAt')
            .exec(cb);
    }
};

var Member = mongoose.model('Member', MemberSchema); // 编译生成Member这个模型
    
module.exports = Member;