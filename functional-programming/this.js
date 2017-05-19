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
    Person.prototype.sayName = function () {
        console.log('Hello my name is ' + this.name)
    }
    /**
     * behind scene
     * return this;
     */
}


var p1 = new Person('Adrienne', 24)
var p2 = new Person('Tim', 24)
console.log(p1)

p1.sayName()
p2.sayName()

var name = p1.name
var sayName = p1.sayName

//sayName()   undefined
console.log(sayName)