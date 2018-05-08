var http = require("http");

http.createServer(function (request, response) {

    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    response.end('{"test":"test"}')

}).listen(8888);

console.log("server is running at http://127.0.0.1:8888");


