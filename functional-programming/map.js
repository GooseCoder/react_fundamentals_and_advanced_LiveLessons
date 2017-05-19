var numbers = [1, 2, 3, 4]

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

var newNumbers = []
for (var i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i] * 2
}


numbers.forEach(function (n) {
    console.log(n)
})

numbers.forEach(function (n, i) {
    numbers[i] = n *2
    console.log(numbers[i])
})

var newNumber2 = numbers.map(function (n) {
    return n * 2
})

console.log(newNumber2)