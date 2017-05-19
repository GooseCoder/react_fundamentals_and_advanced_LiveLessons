var numbers = [1, 2, 3, 4]

var numbers2 = numbers.map(function (n) {
    return 2 * n
})

//form 1
var numbers3 = numbers.map((n) => {
    return n * 2
})

//form 2 Only one paramter
var numbers4 = numbers.map(n => {
    return n * 2
})

// form 2

var numbers5 = numbers.map(() => {
    return   2
})

// form 3 one line


numbers.map(n => n *2)


function Person(name) {
    this.name = name
}

Person.prototype.sayNameTimed = function () {
    var self = this
    setTimeout(function () {
        console.log(`My name is ${self.name}`)
    }, 1000)
}

Person.prototype.sayNameTimedArrow = function () {
    var self = this
    setTimeout(() => {
        console.log(`My name is ${self.name}`)
    }, 1000)
}
var p1 = new Person('Sean')

p1.sayNameTimed()

p1.sayNameTimedArrow()
