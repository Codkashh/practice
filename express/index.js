const express = require("express")

const app = express()

const users = [
    {
        name:"john",
        kidney: [{
            healthy: false
        }]
    }
];



app.get('/',function(req,res){
    const johnkidney = users[0].kidney;
    const numberOfKidney = john.kidney.length;
    let numberOfHealthyKidney = 0;
    for(let i = 0; i<johnkidney.length;i++){
        if(john.kidney[i].healthy){
            numberOfHealthyKidney++;
        }
    }
    const numberOfUnhealthyKideny = numberOfKidney-numberOfHealthyKidney;
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKideny
    })
})

app.listen(3000);
