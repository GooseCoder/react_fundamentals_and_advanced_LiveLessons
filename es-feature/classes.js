class Creature {
    constructor(name) {
        this.name = name
    }

    sayName() {
        console.log(`My name is ${this.name}`)
    }
}

console.log(Creature)
var p1 = new Creature('Hank')
p1.sayName()

console.log(p1.__proto__ === Creature.prototype)

console.log(p1.sayName === Creature.prototype.sayName)


class Person extends Creature {
    constructor(name, job) {
        super(name)
        this.job = job
    }
}

var p2 = new Person('chuck', 'barber')