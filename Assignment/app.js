const express = require('express');
const login = require('./controller/login');
const admin_home = require('./controller/admin/admin_home');
const customer_home = require('./controller/customer/customer_home');
const bodyParser =require('body-parser')
const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use('/login',login);
app.use('/admin',admin_home);
app.use('/customer',customer_home);



app.listen(2000);