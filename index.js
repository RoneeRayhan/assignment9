// index.js
const app = require('./app');
require("dotenv").config();
// PORT = process.env.PORT;

const PORT = process.env.RUNNING_PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
