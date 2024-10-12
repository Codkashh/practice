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