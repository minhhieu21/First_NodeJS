require('dotenv').config();
// console.log(">>> check env: ", process.env);
const express = require('express'); //common js
//import express from 'express'; //es modules

const configViewEngine = require('./config/viewEngine');

const webRoutes = require('./routes/web');


const app = express() //app express

const port = process.env.PORT || 8081; //port

const hostname = process.env.HOST_NAME; //hostname


//config template engine 
configViewEngine(app);

//khai báo router
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})