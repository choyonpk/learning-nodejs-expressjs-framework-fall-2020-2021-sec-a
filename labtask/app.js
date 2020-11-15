const express = require('express');
const login = require('./controller/login');
const bodyParser =require('body-parser')
const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use('/login',login);

app.get('/home',(req,res)=>{
    res.render('./home');
});

app.listen(3000);