const fs = require('fs');

fs.readFile('./1-file-cleaner.txt', 'utf-8', (err, data) => {
    if(err) throw err;

    const cleanedContent = data.split(/\s+/).join(' ');

    fs.writeFile('./1-file-cleaner.txt', cleanedContent, 'utf-8', (err) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('File updated sucessfully');
    })
})

