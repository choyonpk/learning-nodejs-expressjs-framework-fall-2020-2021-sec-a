const express = require('express');
const bodyParser = require('body-parser');
const exsession = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const login = require('./controllers/login');
const home = require('./controllers/home');
const empHome = require('./controllers/emp_home');
const admin	 = require('./controllers/admin');
const employee	= require('./controllers/employee');
const logout = require('./controllers/logout');
const port = 3000;
const $ = require('jquery');
const path = require('path');
//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exsession({secret: 'hello', saveUninitialized: true, resave: false}));

app.use('/login', login);
app.use('/home', home);
app.use('/employee', employee);
app.use('/emp_home', empHome);
app.use('/logout', logout);
app.use('/admin', admin);
app.use('/jquery',express.static(path.join(__dirname+'/node_modules/jquery/dist/')));  
app.use(express.static(path.join(__dirname+'/public'))); 


//router
app.get('/', (req, res)=>{
	res.send('welcome to this node');
});

//server stratup
app.listen(port, (error) => {
	console.log('server started at '+port);
});