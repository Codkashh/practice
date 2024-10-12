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


//PUT method--

// put mmethod for updating a resouces--

app.put('/update-resource/:id', (req, res) => {
    const resourceId = req.params.id;
})

//DELETE method---

app.delete('/delete-resource/:id', (req, res) => {
    const resourceId = req.params.id;
})

// Response Object--

//Sending Plain Text:
app.get('/', (req, res) => {
  res.send('Hello, this is a plain text response!');
});
//Sending JSON:
app.get('/api/data', (req, res) => {
  const data = { message: 'This is a JSON response.' };
  res.json(data);
});
//Sending HTML:
app.get('/html', (req, res) => {
    const htmlContent = '<h1> this is html response </h1>';
    res.send(htmlContent);
})
//Redirecting
app.get('/redirect', (req, res) => {
    res.redirect('/new-location');
})
//Sending Status Codes:
app.get('/not-found', (req, res) => {
    res.status(404).send('page is not found');
})

//Sending Files:
const path = require('path');
app.get('/file', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'example.txt');
    res.sendFile(filePath);
});
//Setting Headers:
app.get('/custom-header', (req, res) => {
    res.set('X-custom-Header' , 'Custom Header Value');
    res.send('Response with a custom header');
})



