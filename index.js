// index.js
const app = require('./app');
const apiRouter = require('./src/Routes/api');

// Use the API routes defined in api.js
app.use('/api', apiRouter);

const port = process.env.RUNNING_PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
