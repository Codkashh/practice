fetch('https://example.org/products.json').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log('Error: ', error);
});