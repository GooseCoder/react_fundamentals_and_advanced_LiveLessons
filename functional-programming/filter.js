var numbers = [1, 2, 3, 4]

var evens = numbers.filter(function (n) {
    return (n % 2 === 0)
})

console.log(evens)