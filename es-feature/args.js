function add(x , y = 5) {
    // if (y === undefined) {
    //     y = 5
    // }

    // y = y || 5 // mnot working


    return x + y
}

console.log(add(4)) // add(4, 5)

console.log(add(4, 0)) // add(4, 5)