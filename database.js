// app.js (or your main application file)

const { MongoClient } = require('mongodb');

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
