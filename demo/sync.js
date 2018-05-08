var fs = require('fs');
try {
    var data = fs.readFileSync('input.txt');
} catch (err) {
    console.log(err)
}

console.log(data.toString());
console.log("done!!");

/**
 * js的回调函数，异步进行读取对应的数据，然后进行返回
 */
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString())
});

console.log("down!!!!!!");


