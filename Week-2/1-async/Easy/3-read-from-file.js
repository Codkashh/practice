const fs = require('fs');


fs.readFile('./3-file.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

for(let i=0; i<100000; i++){

}

console.log('loop ended');

