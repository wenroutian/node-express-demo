var http = require("http")
var url = require("url")
var util = require("util")


http.createServer(function (req, res) {
    res.writeHead(200, {'Conten-Type': 'text/plain'});
    var params = url.parse(req.url, true).query;
    res.end(util.inspect(url.parse(req.url, true)) + params.name)
}).listen(8888)