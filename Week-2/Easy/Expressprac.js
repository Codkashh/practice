const express = require('express');

const app = express();

app.get('/', (res, req) => {
    res.send("Hello, this is the root/main route!");
})

app.get('/api', (req, res) => {
    res.json({message:'This is API route'});
})

app.get('/greet/:name', (req, res) => {
    const {name} = req.params;
    res.send(`Hello, ${name}`);
})

app.get('/days/:name', (req, res) => {
    const {name} = req.params;
    res.send(`Today is ${name}`);
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})