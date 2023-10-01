
const express = require('express');
const router = require('./src/Routes/api');
const app = new express();
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

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
// let URI = "mongodb+srv://<username>:<password>@cluster0.7uslu.mongodb.net/inven?retryWrites=true&w=majority";
// let OPTION = { user: 'testuser7777', pass: 'testuser7777', autoIndex: true }
// mongoose.connect(URI, OPTION, (error) => {
//     console.log("Connection Success")
//     console.log(error)
// })

// MongoDB connection URL
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'your-database-name'; // Replace with your desired database name

async function connectToMongoDB() {
    try {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

        // Connect to MongoDB
        await client.connect();

        // Add the database to the application
        const db = client.db(dbName);

        // Log a success message to the console
        console.log(`Connected to MongoDB database '${dbName}'`);

        // Do further operations with the database as needed

        // Close the MongoDB connection when done
        client.close();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect to MongoDB
connectToMongoDB();


// Routing Implement
app.use("/api/v1", router)

// Undefined Route Implement
app.use("*", (req, res) => {
    res.status(404).json({ status: "fail", data: "Not Found" })
})

module.exports = app;
