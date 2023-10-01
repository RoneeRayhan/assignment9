
const express = require('express');
const router = require('./src/Routes/api');
const app = new express();
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
// import MongoStore from 'connect-mongo';

//Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
// const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//Database
const mongoose = require('mongoose');
const path = require("path");

//Security Middleware Implement
app.use(cors());
app.use(helmet())
app.use(mongoSanitize())
// app.use(xss())
app.use(hpp())

//Body perser
app.use(bodyParser.json())

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 })
app.use(limiter)

// Mongo DB Database Connection
// let URI = 'mongodb://localhost:27017';
// let OPTION = { user: 'test', pass: 'test1234', autoIndex: true }
// mongoose.connect(URI, OPTION, (error) => {
//     console.log("Connection Success")
//     console.log(error)
// })




mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => console.log('Connected Successfully'))

    .catch((err) => { console.error(err); });

// Routing Implement
app.use("/api/v1", router)

// Undefined Route Implement
app.use("*", (req, res) => {
    res.status(404).json({ status: "fail", data: "404 => Not Found" })
})

module.exports = app;
