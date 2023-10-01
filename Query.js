// Query.js
const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'your-database-name';

// Create a new collection
async function createCollection(collectionName) {
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Create a new database instance
        const db = client.db(dbName);

        // Create the collection
        await db.createCollection(collectionName);

        console.log(`Collection '${collectionName}' created successfully.`);
    } catch (error) {
        console.error('Error creating collection:', error);
    } finally {
        // Close the client
        client.close();
    }
}

// Remove a collection from the database
async function removeCollection(collectionName) {
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Create a new database instance
        const db = client.db(dbName);

        // Drop (remove) the collection
        await db.dropCollection(collectionName);

        console.log(`Collection '${collectionName}' removed successfully.`);
    } catch (error) {
        console.error('Error removing collection:', error);
    } finally {
        // Close the client
        client.close();
    }
}

// Inserts a single document into a collection
async function insertDocument(collectionName, documentData) {
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Create a new database instance
        const db = client.db(dbName);

        // Insert the document into the collection
        await db.collection(collectionName).insertOne(documentData);

        console.log('Document inserted successfully.');
    } catch (error) {
        console.error('Error inserting document:', error);
    } finally {
        // Close the client
        client.close();
    }
}

// Delete/remove a single document from the collection
async function deleteDocument(collectionName, documentQuery) {
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Create a new database instance
        const db = client.db(dbName);

        // Delete the document from the collection
        await db.collection(collectionName).deleteOne(documentQuery);

        console.log('Document deleted successfully.');
    } catch (error) {
        console.error('Error deleting document:', error);
    } finally {
        // Close the client
        client.close();
    }
}

module.exports = {
    createCollection,
    removeCollection,
    insertDocument,
    deleteDocument,
};
