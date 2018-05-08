// var fs = require("fs");
//
// var data = "";
//
// var readStream = fs.createReadStream('input.txt');
//
// readStream.setEncoding('UTF8');
//
// // 总共有三个事件，data。end。error
//
// readStream.on('data', function (chunk) {
//     data += chunk
// });
//
// readStream.on('end', function () {
//     console.log(data)
// });
//
// readStream.on('error', function () {
//     console.log(err.stack)
// });
//
// console.log("down!!!");
//
//
// var write_data = "hello 你在哪里";
//
// var writerStream = fs.createWriteStream('put.txt');
//
// writerStream.write(write_data, 'UTF8');
//
// //标志对应的data进行写入完成
// writerStream.end();
//
// writerStream.on('finish', function () {
//     console.log('write down');
// });
//
// writerStream.on('error', function () {
//     console.log('error write');
//     console.log(err.stack)
// });
//
// writerStream.on('data', function (chunk) {
//     console.log("chunk" + chunk)
// });
//
// console.log("finished");
//
//
//
//
// // pipe stream
//
// var pipeRead = fs.createReadStream('input.txt');
//
//
// var pipeWrite = fs.createWriteStream('pipe.txt');
//
// pipeRead.pipe(pipeWrite);
//
//
// console.log("pipe writer down");
//
//
//
// // compress stream   pipe
//
//
// var zlib = require("zlib");
//
// fs.createReadStream("input.txt").pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream("input.txt.gz"));
//
// console.log("compress down");


// depress stream

var fs = require("fs");

var zlib = require("zlib");

try {
    fs.createReadStream("input.txt.gz").pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('uzip.txt'));
} catch (err) {
    console.log(err.stack)
}


console.log("compress loaded");


