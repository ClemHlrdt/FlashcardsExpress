const express = require('express');

const app = express();

app.get("/", function (req, res) {
    res.send('<h1>I love Treehouse!</h1>');
})

app.get("/hello", function (req, res) {
    res.send('<h1>Hello, JavaScript Developper!</h1>');
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});

