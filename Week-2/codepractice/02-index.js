const express = require('express');

const app = express();

function sum(n) {
    let ans = 0;
    for(let i=0; i<=n; i++) {
        ans += i;
    }
    return ans;
}

app.get('/', (req, res) => {
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hi there Sum is ready:" + ans);
})

app.listen(3000);

// open browser - localhost:3000/?n=20  (after ? - there is query parameters)