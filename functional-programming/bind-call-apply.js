'use strict'
function Person(name, age) {
    /**
     * behind the scene
     * this = {}
     * set inher
     */
    this.name = name
    this.age = age
    /**
    this.sayName = function() {
        console.log('Hello my name is ' + this.name)
    }
     * copy of function
     */
    Person.prototype.sayName = function (x) {
        console.log('Hello my name is ' + this.name)
        console.log(x)
    }
    /**
     * behind scene
     * return this;
     */
}


var p1 = new Person('Joe', 24)
var p2 = new Person('Same', 24)

var sayName = p1.sayName

sayName.call(p1, 'Hello')
sayName.call(p2)
sayName.apply(p2, ['hello'])

var boundSayName = sayName.bind(p1, 'pipppo')

boundSayName()