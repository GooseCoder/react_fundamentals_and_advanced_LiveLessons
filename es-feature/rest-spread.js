function add() {
    console.log(arguments)
    var result = Array.prototype.reduce.call(arguments, function (memo, value) {
        return memo + value
    })
    return result
}

console.log(add (2, 3, 4))

function betterAdd (...values) {   // values is a proper array
    return values.reduce(function (memo, value) {
        return memo + value
    }, 0)
}

console.log(betterAdd(2, 3, 4))

function talk( greating , farewell, names) {
    names.forEach(function (name) {
        console.log(`${greating} ${name}!`)
        console.log(`${farewell} ${name}!`)
    })
}

talk('hello', 'goodbye', ['bill', 'joe', 'mortimer'])

function talk2( greating , farewell, ...names) {
    console.log(arguments)
    var args = Array.prototype.slice.call(arguments, 2)
    console.log(args)

}
talk2('hello', 'goodbye', 'bill', 'joe', 'mortimer')

function talk3( greating , farewell, ...names) {

    names.forEach(function (name) {
         console.log(`${greating} ${name}!`)
         console.log(`${farewell} ${name}!`)
    })
}

var arr = ['hello', 'goobye']
talk3(...arr, 'bill', 'joe', 'mortimer') ///spread
