const mongoose = require("mongoose");
const schema = mongoose.Schema;


const article = new schema({
    date: String,
    title: String
});


var models = {
    article: mongoose.model('article', article),

};
//数据库
mongoose.connect('mongodb://localhost:27017/demo', function (err) {
    if (err) {
        console.log("connect fail")
    } else {
        console.log("mongo connect success")
    }
});


module.exports = models;