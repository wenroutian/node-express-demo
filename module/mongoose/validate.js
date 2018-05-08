let mongoose = require("mongoose")

let schema = new mongoose.Schema({age: Number, name: String});


/**
 * 文档验证字段如下
 */


/*
 required : 数据必须填写
 default: 默认值
 validate: 自定义匹配
 min:最小值
 max:最大值
 match:正则匹配(只使用在字符串)
 enum:枚举匹配(只适用于字符串)
 */

function validateLength(item) {
    return item.length > 5
}

new mongoose.Schema({
    age: {type: Number, required: true, min: 0, max: 20},
    name: {type: Number, default: 12, validate: validateLength},
    title: {type: String, match: /a/},
    vote: {type: String, enum: ["like", "invite"]}
});

