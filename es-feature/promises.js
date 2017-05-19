var fs = require('fs')
console.log(1)
var myPromise = new Promise((resolve, reject) => {
    //async code in here (ussually)
    console.log(2)
    var noErrors = true
    if (noErrors) {
        console.log(3)
        resolve('hello payload')
    } else {
        reject()
    }
})
console.log(4)
myPromise.then((payload) => {
    console.log(5)
    console.log(payload)
    console.log('success!')
}).catch(() => {
    console.log('failure!')
})

console.log(10)
function promiseReadFile(file) {
    console.log(30)
    return new Promise((resolve, reject) => {
        console.log(40)
        fs.readFile(file, (err, data) => {
            console.log(60)
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

console.log(20)
promiseReadFile('./promises.js')
.then(data => {
    console.log(70)
    console.log(data.toString())
})
.catch(err => {

})

console.log(50)