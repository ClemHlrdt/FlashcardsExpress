const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const router = express.Router()
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');


app.use((req, res, next) => {
    console.log('Hello ');
    next();
}) ;

app.use((req, res, next) => {
    console.log('world');
    //const error = new Error('Oh noes');
    //error.status = 500;
    next();
});



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

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render("Error", err);
});



app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});

