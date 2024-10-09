


const myData = new Promise((resolve, reject) => {
    fetch('https://randomuser.me/api').then(raw => raw.json()).then(result => {
       if(result.results[0].gender === "male")
        resolve();
       else 
        reject();
    })
});
console.log(myData);
myData
    .then(() => {
        console.log("Green Button daba diya - for MALE");
    })
    .catch(() => {
        console.log("Red Button daba diya - for FEMALE");
    });