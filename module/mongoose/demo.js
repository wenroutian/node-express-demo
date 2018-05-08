var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/demo", function (err) {
    if (err) {
        console.log("connect error")
    } else {
        console.log("connect success")
        let Schema = new mongoose.Schema({
            num: Number,
            name: String,
            size: String
        })
        let my = mongoose.model('MyModel', Schema);
        let doc = new my({size: "small"})
        console.log(doc.size)
    }
})


var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/demo", function (err) {
    if (!err) {
        let schema = new mongoose.Schema({age: Number, name: String});
        let temp = mongoose.model('temp', schema);
        temp_model = new temp({age: 23, name: "samxiao"});
        temp_model.save(function (err, res) {
            if (!err) {
                console.log(res)
            } else {
                console.log(err.stack)
            }
        });
        temp.find(function (err, docs) {
            console.log(docs)
        })
    }
})

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/demo", function (err) {
    if (!err) {
        console.log("connect success")
    } else {
        console.log("connect error")
    }
})

let demo_schema = new mongoose.Schema({
    number: Number,
    name: String,
    size: String
})

//通过model进行自定义对应的方法
/**
 * 自定义实例方法
 * @param cb
 * @returns {T}
 */
demo_schema.methods.findSimilar = function (cb) {
    return this.model('my_model').find({size: this.size}, cb)
}

/**
 * 定义静态方法
 * @param name
 * @param cb
 * @returns {T}
 */
demo_schema.statics.findByName = function (name, cb) {
    return this.find({name: new RegExp(name, 'i')}, cb)
}

/**
 * 自定义查询方法
 * @param name
 * @returns {T}
 */
demo_schema.query.byName = function (name) {
    console.log("by name")
    return this.find({name: new RegExp(name)})
}


let my_model = mongoose.model('my_model', demo_schema);
let doc1 = new my_model({name: "doc1", size: "small"});
//直接进行生成相应的数据
doc1.save(function (err, res) {
    if (!err) {
        console.log("the master err")
        console.log(res)
    } else {
        console.log(err.stack)
    }
});

//调用实例方法
doc1.findSimilar(function (err, doc) {
    if (err) {
        console.log(err.stack)
    }
    doc.forEach(function (item, index, arr) {
        console.log("the " + index + "result")
        console.log(item)
    })
});

//调用静态方法
my_model.findByName('doc1', function (err, doc) {
    if (!err) {
        console.log("the static method:")
        console.log(doc)
    } else {
        console.log(err.stack)
    }
});

//调用自定的查询方法
my_model.find().byName('doc1').exec(function (err, res) {
    if (!err) {
        console.log("the regex find")
        console.log(res)
    } else {
        console.log(err.stack)
    }
})

/**
 * 文档新增方法
 */

save
new my_model({age: 10, name: "save"}).save(function (err, doc) {

})



// //create


my_model.create({name: "create", age: 10}, {"name": "create", age: 11}, function (err, doc1, doc2) {
    if (!err) {
        console.log("the create result1:")
        console.log(doc1)
        console.log("the create result2:")
        console.log(doc2)
    }
})

// insertMany

my_model.insertMany([{name: "many", number: 1}, {name: "many", number: 2}], function (err, res) {
    console.log(res)
})


/**
 * 查询方法
 */


my_model.find({}, function (err, res) {
    console.log("the find res:")
    console.log(res)
})


//查询大于2 的手
my_model.find({number: {$gte: 1}}, function (err, docs) {
    console.log("the age older 18:");
    console.log(docs)
})

// 存在对应的many并且大于2
my_model.find({name: /many/, number: {$gte: 1}}, function (err, res) {
    console.log("the many data:")
    console.log(res)
})

// 只输出对应的字段 z只输出name=》 把{name:1,_id:0}换成'name'

my_model.find({name: /a/}, {name: 1, _id: 0}, function (err, res) {
    console.log("the a data:")
    console.log(res)
})

// 忽略前面两条数据
my_model.find(null, null, {skip: 2}, function (err, res) {
    console.log("the a data:")
    console.log(res)
})


/*
$or　　　　或关系
$nor　　　 或关系取反
$gt　　　　大于
$gte　　　 大于等于
$lt　　　　小于
$lte　　　 小于等于
$ne　　　　不等于
$in　　　　在多个值范围内
$nin　　　 不在多个值范围内
$all　　　 匹配数组中多个值
$regex　　 正则，用于模糊查询
$size　　　匹配数组大小
$maxDistance　范围查询，距离（基于LBS）
$mod　　　　取模运算
$near　　　 邻域查询，查询附近的位置（基于LBS）
$exists　　 字段是否存在
$elemMatch　匹配内数组内的元素
$within　　　范围查询（基于LBS）
$box　　　　 范围查询，矩形范围（基于LBS）
$center　　　范围醒询，圆形范围（基于LBS）
$centerSphere　范围查询，球形范围（基于LBS）
$slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素
 */

// $where

// my_model.insertMany([{name: 213, size: 213}, {name: 213, size: 213}], function () {
//
// })

my_model.find({$where: "this.name == this.size"}, function (err, doc) {
    console.log("the same where")
    console.log(doc)
})

my_model.find({$where: "obj.name!=obj.size"}, {name: 1, _id: 0, size: 1}, function (err, doc) {
    console.log("the sepfic object")
    console.log(doc)
})

my_model.find({$or: [{name: "save"}, {name: "create"}]}, function (err, doc) {
    if (err) {
        console.log(err.stack)
    } else {
        console.log("the or data:");
        console.log(doc)
    }
});


/**
 * update 方法
 */


/*
update()
updateMany()
findOne()+save()
findByIdAndUpdate()
findOneAndUpdate()
 */

//my_model.update(coditions, doc, [options], [callback])

/**
 * options选项
 */

/*
safe(boolean) : 默认为true。安全模式
upsert(boolean):默认为true，如果不存在则创建新的jilu
multi(boolean):默认为false，是否更新多个记录
runValidators:如果为true，则执行对应的Validation验证
setDefaultsOnInsert:如果为true，在新建时插入文档定义的默认值
strict(boolean)：以strict方式进行更新
overwrite(boolean):默认为false。禁用update-only模式，允许覆盖记录
 */


my_model.update({name: "many"}, {size: "many"}, {multi: true}, function (err, res) {
    if (!err) {
        console.log(res)
    } else {
        console.log(err.stack)
    }
})

//my_model.updateMany(conditions,doc,[options],cb)
//my_model.updateOne(conditions,doc,[options],cb)
//find and save

my_model.findOne({name: 'many'}, function (err, doc) {
    if (!err) {
        console.log("the data to update")
        console.log(doc)
        doc.name = doc.size
        doc.save()
        console.log(doc)
    }
});

// findOneAndUpdate
//my_model.findOneAndUpdate(conditions,doc,options,cb)
//my_model.findOneAndUpdate(conditions,doc,options,cb)
/**
 *
 */

my_model.findByIdAndUpdate('5af11f337ecc8e082f89555f', {name: "many1"}, function (err, doc) {
    if (!err) {
        console.log(doc)
    } else {
        console.log("error")
    }
});

my_model.findById('5af11f337ecc8e082f89555f', function (err, doc) {
    console.log("the find one data:")
    console.log(doc)
});


/**
 * remove()
 */

/**
 * remove()
 * findOneAndRemove()
 * findByIdAndRemove()
 */

// cb必须存在，不然将不会进行数据的删除
//my_model.remove(conditions,cb)
// 省略对应的cb方法：
//my_model.remove(conditions).exec()

my_model.find({name:"many"},function (err,doc) {
    doc.forEach(function (item,index,arr) {
        item.remove(function (err,doc) {
            console.log("the data to delete")
            console.log(doc)
        })
    })
})


/**
 *
 * 前后钩子函数
 */

/**
 * init
 * validate
 * save
 * remove
 * count
 * find
 * findOne
 * findOneAndRemove
 * findOneAndUpdate
 * insertMany
 * update
 */

demo_schema.pre('find', function (next) {
    console.log("pre1 method")
});

demo_schema.pre('find', function (next) {
    console.log("pre2 method")
});

my_model.find(function (err, doc) {
    console.log("i come in")
    console.log(doc[0])
});


/**
 * 如何写一个分页
 */


/**
 *
 * 查询后处理
 */

/*
sort 排序
skip 跳过
limit 限制
select 显示字段
exect 执行
count 计数
distinct 去重
 */

let now = 2
let pageSize = 10
let skip_number = pageSize * (now - 1)

my_model.find().skip(skip_number).limit(pageSize).exec(function (err, doc) {
    console.log("the page data:")
    console.log(doc)
    console.log("the all" + doc.length)
})

let count = my_model.find().count(function (err, doc) {
    console.log("the count data:" + doc)
});

my_model.find().distinct('name', function (err, distinct) {
    console.log("the distinct data:")
    console.log(distinct)
})

// select ==> {name:1,size:1,_id:0}
my_model.find().skip(1).limit(2).sort("-number").select("-_id name size").exec(function (err, docs) {
    //[ { name: 'huochai', age: 27, x: 1, y: 2 },
    //{ name: 'li', age: 20, x: 2, y: 2 } ]
    console.log("the just data")
    console.log(docs);
});