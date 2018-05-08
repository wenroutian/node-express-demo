let models = require("../mongo/db")

let express = require('express');
let router = express.Router();


/* GET home page. */
router.post('/', function (req, res, next) {
    try {
        let content = {
            date: "213",
            title: "i was title"
        }

        let test = new models.article(content);
        test.save(function (err, result) {
            if (err) {
                res.json({code: 200, msg: '添加失败', data: ''})
            } else {
                console.log(result);
                res.json({code: 200, msg: '添加成功', data: ''})
            }
        });

    } catch (err) {
        console.log(err.stack);
        res.end(JSON.stringify({
            "error": "server's error"
        }))
    }
});


router.get('/', function (req, res) {

    let data = models.article.findById("5af05d0f74bd522f718e5087", function (err, doc) {
        if (err) {
            console.log("error" + err.stack)
        } else {
            if (doc) {
                console.log("get data")
            } else {
                console.log("unget data")
            }
            console.log("the first data:")
            console.log(doc)
        }
        // models.article.find({_id: "5af05d0f74bd522f718e5087"}, function (err, doc) {
        //     console.log("the second data:")
        //     console.log(doc)
        // })
        //
        // let info = models.article.find({date: "213"}, function (err, doc) {
        //     console.log("the second data:")
        //
        //     console.log(doc)
        // })
        //
        // models.article.find({}, function (err, doc) {
        //     if (err) {
        //         console.log(err.stack)
        //     } else {
        //         // doc.forEach(function (item, index, arr) {
        //         //     item.date = item.date + "test"
        //         //     item.save()
        //         // })
        //         console.log("the third data:")
        //         console.log(doc)
        //     }
        // })
    });
    // models.article.find({_id: "5af05d0f74bd522f718e5087"}, function (err, doc) {
    //     console.log("the third data:")
    //     console.log(doc)
    // })
    res.json({data: 123})
});
module.exports = router;