const express = require('express'); //common js
const path = require('path'); //common js
//import express from 'express'; //es modules

require('dotenv').config();
// console.log(">>> check env: ", process.env);

const app = express() //app express

const port = process.env.PORT || 8081; //port

const hostname = process.env.HOST_NAME;

//config templat engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


//config static file
app.use(express.static(path.join(__dirname, 'public')));

//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World and nodemon!')
})

//khai báo route
app.get('/ejs', (req, res) => {
    res.render('sample.ejs')
})



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})