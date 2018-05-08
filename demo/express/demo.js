var express = require("express");



var app = express();

app.use("/about", function (req, res, next) {
    console.log("the first step");
    res.send("worted by left first")
});

app.use(function (req, res, next) {
    console.log("the second step")
    res.writeHead(200, {"Content-Type": "text/plain"});
    next();
});

app.use(function (req, res) {
    console.log("the third step");
    res.end("hello world");
});

var server = app.listen(3001, function () {
    console.log("the server was listening");
});
