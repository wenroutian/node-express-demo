var fs = require("fs");

console.log("waiting to open");

fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.log(err)
    }
    console.log("open success")
})
console.log("as the name")

fs.stat('input.txt',function (err,status) {
    console.log(status.isFile())
})