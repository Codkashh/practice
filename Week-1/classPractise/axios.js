const axios = require('axios');

axios.get('https://example.org/products.json').then(response => {
    console.log(response.data);
}).catch(error => {
    console.log("error time....!", error);
})