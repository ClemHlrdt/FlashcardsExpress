const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.get("/", function (req, res) {
    const name = req.cookies.username;
    if(name){
       res.render('index', {
           name: req.cookies.username
       });
    } else {
        res.redirect('hello');
    }
    
});

app.get("/hello", function (req, res) {
    const name = req.cookies.username;
    if(name){
        console.log('cookie is here');
        res.redirect('/');
    } else {
        res.render('hello');
    }
    
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');    
});


app.post("/hello", function (req, res) {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.get("/cards", function (req, res) {
    res.render('/', { prompt: "Who is buried in Grant's tomb?", hint: "Think about who's tomb it is.", colors });
});

app.get("/sandbox", function (req, res) {
    res.render('sandbox', { names });
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});

