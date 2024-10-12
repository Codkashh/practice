//Get request-
const express = require('express');
const app = express();
const PORT = 4000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, This is get request');
})

// Define a route with a parameter
app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on <http://localhost>:${port}`);
  });

//Middleware for parsing JSON and form Data---

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//POST method---

const textContent = [];

app.post('/add-content', (req, res) =>{
    const newContent = req.body.content;

    if(!newContent) {
        return res.status(400).json({error: 'Content is required'});
    }
    
    //adding content to textContent in memory array---
    
    textContent.push(newContent);
    
    // success message--
    
    res.status(201).json({message: 'Content added successfully'});
})
