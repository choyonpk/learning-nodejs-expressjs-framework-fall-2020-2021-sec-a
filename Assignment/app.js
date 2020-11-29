const express = require('express');
const login = require('./controller/login');
const admin_home = require('./controller/admin/admin_home');
const customer_home = require('./controller/customer/customer_home');
const registration = require('./controller/customer/registration');
const product = require('./controller/admin/product');
const logout = require('./controller/logout');

const exSession 	= require('express-session');

const bodyParser =require('body-parser')
const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));

app.use('/login',login);
app.use('/admin',admin_home);
app.use('/customer',customer_home);
app.use('/registration',registration);
app.use('/logout',logout);
app.use('/product',product);



app.listen(3000);