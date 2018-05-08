var express = require('express');
var router = express.Router();

var app = express();

app.use(function (req, res, next) {
    console.log("the first action");
    next()
});


/* GET home page. */
router.get('/', function (req, res, next) {
    try {
        var response = {
            "file_name": "samxiao",
            "file": "i love u"
        };
        console.log("get name :" + req.query.name);
        if (req.get('name') === 'samxiao') {
            res.end(JSON.stringify(response));
        }
        next(response);
    } catch (err) {
        console.log(err.stack);
        res.end(JSON.stringify({
            "error": "server's error"
        }))
    }
});

router.get('/', function (req, res, next) {
    var response = {
        "file_name": "samxiao",
        "file": "i love u123"
    };
    res.end(JSON.stringify(response));
});


router.post("/upload", function (req, res) {
    res.end("success")
});


module.exports = router;
