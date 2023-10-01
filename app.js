// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const expressSanitizer = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const validator = require('validator');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(expressSanitizer());

// Define your routes here

// Undefined route handler
app.use((req, res) => {
    res.status(404).json({ status: 'error', message: 'Not Found' });
});

module.exports = app;
