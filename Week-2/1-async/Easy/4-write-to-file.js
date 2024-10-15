const fs = require('fs');

const data = 'Hello ji';

fs.writeFile('./4-filee.txt', data, 'utf8', (err) => {
    if(err) throw err;
    console.log('The file has been saved');
})