var util = require("util")

function Person() {
    this.name = 'samxiao'
    this.toString = function () {
        return this.name;
    };

}

var person = new Person()
console.log(util.inspect(person));
console.log(util.inspect(person, true))