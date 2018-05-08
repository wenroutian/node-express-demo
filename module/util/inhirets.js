var util = require("util")

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.saHello = function () {
        console.log('hello' + this.name);
    };
    Base.prototype.showName = function () {
        console.log('prototype:' + this.name)
    };
}

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

var obJBase = new Base();
obJBase.showName();
obJBase.saHello();
console.log(obJBase);
var objSub = new Sub();

//只能进行把对应的属性进行继承过来。而不能把对应的其它方法进行继承
objSub.showName();
console.log(objSub);
