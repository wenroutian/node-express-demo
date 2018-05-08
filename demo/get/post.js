var http = require("http");
var queryString = require("querystring");
var util = require("util")


http.createServer(function (req, res) {
    var post = '';
    req.on('data', function (chunk) {
        post += chunk;
    })
    console.log(post);
    req.on('end', function () {
        post = queryString.parse(post)

        res.end(util.inspect(post) + post.name)
    })
}).listen(8888)