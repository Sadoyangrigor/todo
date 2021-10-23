var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var app = express();
const {routes} = require("./routers");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Headers", "x-access-token,void,authorization,guest");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT'); // OPTIONS, PATCH,
    res.setHeader('Cache-Control', 'no-cache'); // OPTIONS, PATCH,
    res.setHeader('X-Frame-Options', 'deny'); // OPTIONS, PATCH,
    res.removeHeader('Server');
    res.removeHeader('X-Powered-By');
    next()
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes.forEach((item)=>{
    app.use(`/api/${item}`,  require(`./routes/${item}/route`));
})

module.exports = app;
