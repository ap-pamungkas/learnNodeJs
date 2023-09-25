// learn module in node js
// this is core module
const fs = require('fs');

// this is local module
// const calc = require('./calc.js');
const payload = `
 belajar membuat file write and read di fs
`
// const { setTimeout } = require('timers');

// const axios = require('axios')



fs.readFile('hallo.txt', 'utf-8', (err, data)=> {
    if(err) {
        console.error(err)
    }

    console.log("Data :", data);
})
fs.writeFile('hallo.txt', payload, (err, data)=> {
    if(err) {
        console.error(err)
    }

    console.log("Data successfully writted");
})


// setTimeout(function(){
//     console.log(calc.addtion(34, 45));
// }, 2000);
// setTimeout(function(){
//     console.log(calc.multiplication(4, 45));
// }, 3000);
    


// axios.get('https://jsonplaceholder.typicode.com/posts/1')
// .then(Response => {
//     console.log(Response.data);
// });
