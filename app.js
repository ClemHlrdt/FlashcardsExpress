const express = require('express');

const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
];

const names = {
        1: ["Daria"],
        2: ["Clément"]
}
    

app.set('view engine', 'pug');

app.get("/", function (req, res) {
    res.render('index');
})

app.get("/cards", function (req, res) {
    res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about who's tomb it is.", colors })
})

app.get("/sandbox", function (req, res) {
    res.render('sandbox', { names })
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});

