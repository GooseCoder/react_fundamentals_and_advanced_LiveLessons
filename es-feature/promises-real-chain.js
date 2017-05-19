var fs = require('fs')
function promiseReadFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


var p = promiseReadFile('./pyramid.js')
.then(data => {
    console.log('file 3 read')
    return promiseReadFile('./script.js')
})
    .then(data => console.log('file 2 read'))
.catch(err => console.error(err))

// promise2.then(d => {
//     console.log('file 2')
// })
