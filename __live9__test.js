/*

// #1.
The db.hostInfo() method in MongoDB is used to retrieve information about the host or server where the MongoDB instance is running. It provides various details and statistics about the server's environment, which can be helpful for administrators and developers when monitoring and managing the MongoDB deployment. Some of the information that db.hostInfo() can provide includes:

System Information: Information about the host system, including the operating system type and version, the system's architecture, and the number of CPUs.

Host Information: Details about the host machine, such as the hostname, kernel version, and platform.

CPU Information: Information about the CPU(s) on the host, including the number of processors, CPU frequency, and CPU model.

Memory Information: Details about the system's memory, including the total physical memory and the amount of free memory.

Storage Information: Information about the storage devices, including the file system type and the size of the storage.

Network Information: Network-related details, such as the host's IP address, network interfaces, and more.

Version Information: The version of MongoDB that is running on the host.

This information can be useful for diagnosing issues, optimizing server performance, and ensuring that the MongoDB deployment is running on an appropriate hardware and software environment. It's a valuable tool for administrators and developers to gather insights into the server's configuration and resources.

// #2.
No, you cannot change the current database using the db.getName() method. The db.getName() method simply returns the name of the current database, and it does not have the capability to switch to a different database.

// #3.
The db.getName() method returns a string data type. It returns the name of the current database as a string.

// #4.
To delete a database in MongoDB using the db.dropDatabase() method, you need to switch to the database you want to delete first using the use command and then run db.dropDatabase(). For example:

```
use mydatabase
db.dropDatabase()

```
// #5.
The db.getCollectionNames() method returns an array of strings. Each string in the array represents the name of a collection in the current database.

// #6.
The purpose of the db.getCollectionNames() method in MongoDB is to retrieve the names of all the collections present in the current database. It provides a list of collection names as strings, which can be useful for various administrative tasks and querying information about the database schema.

// #7.
You can get server statistics and information in MongoDB using the db.serverStatus() method. This method returns a document that contains various metrics and statistics about the MongoDB server's current state and operation.

// #8.
To retrieve the version of MongoDB, you can use the db.version() method. This method returns a string representing the version of the MongoDB instance you are connected to.

// #9.
The method used to delete a collection from the database in MongoDB is db.collection.drop(). For example:
```
db.myCollection.drop()

```

// #10.
To insert a single document into a collection in MongoDB, you can use the db.collection.insertOne() method. Here's an example:

```
db.myCollection.insertOne({ key1: "value1", key2: "value2" })

```

// #11.
The find() method in MongoDB is used to query a collection and retrieve documents that match a specified query criteria. It returns a cursor, which allows you to iterate through the result set or apply further operations such as sorting or limiting the results.

// #12.
$regex is a MongoDB query operator used for performing regular expression-based pattern matching in queries. It allows you to search for documents where a specific field matches a regular expression pattern. You can use it in conjunction with the find() method to filter documents based on regular expressions. For example:

```
db.myCollection.find({ fieldName: { $regex: /pattern/ } })

```
This query would return documents where the fieldName matches the specified regular expression pattern.


*/



// 


/* 

// #1.
The db.hostInfo() method in MongoDB is used to retrieve information about the host or server where the MongoDB instance is running. It provides various details and statistics about the server's environment, which can be helpful for administrators and developers when monitoring and managing the MongoDB deployment. Some of the information that db.hostInfo() can provide includes:

System Information: Information about the host system, including the operating system type and version, the system's architecture, and the number of CPUs.

Host Information: Details about the host machine, such as the hostname, kernel version, and platform.

CPU Information: Information about the CPU(s) on the host, including the number of processors, CPU frequency, and CPU model.

Memory Information: Details about the system's memory, including the total physical memory and the amount of free memory.

Storage Information: Information about the storage devices, including the file system type and the size of the storage.

Network Information: Network-related details, such as the host's IP address, network interfaces, and more.

Version Information: The version of MongoDB that is running on the host.

This information can be useful for diagnosing issues, optimizing server performance, and ensuring that the MongoDB deployment is running on an appropriate hardware and software environment. It's a valuable tool for administrators and developers to gather insights into the server's configuration and resources.

// #2.
No, we cannot change the current database using the db.getName() method. The db.getName() method simply returns the name of the current database, and it does not have the capability to switch to a different database.

// #3.
The db.getName() method returns a string data type. It returns the name of the current database as a string.

// #4.
To delete a database in MongoDB using the db.dropDatabase() method, we need to switch to the database we want to delete first using the use command and then run db.dropDatabase(). For example:

```
use mydatabase
db.dropDatabase()

```
// #5.
The db.getCollectionNames() method returns an array of strings. Each string in the array represents the name of a collection in the current database.

// #6.
The purpose of the db.getCollectionNames() method in MongoDB is to retrieve the names of all the collections present in the current database. It provides a list of collection names as strings, which can be useful for various administrative tasks and querying information about the database schema.

// #7.
You can get server statistics and information in MongoDB using the db.serverStatus() method. This method returns a document that contains various metrics and statistics about the MongoDB server's current state and operation.

// #8.
To retrieve the version of MongoDB, we can use the db.version() method. This method returns a string representing the version of the MongoDB instance we are connected to.

// #9.
The method used to delete a collection from the database in MongoDB is db.collection.drop(). For example:
```
db.myCollection.drop()

```

// #10.
To insert a single document into a collection in MongoDB, we can use the db.collection.insertOne() method. Here's an example:

```
db.myCollection.insertOne({ key1: "value1", key2: "value2" })

```

// #11.
The find() method in MongoDB is used to query a collection and retrieve documents that match a specified query criteria. It returns a cursor, which allows you to iterate through the result set or apply further operations such as sorting or limiting the results.

// #12.
$regex is a MongoDB query operator used for performing regular expression-based pattern matching in queries. It allows us to search for documents where a specific field matches a regular expression pattern. We can use it in conjunction with the find() method to filter documents based on regular expressions. For example:

```
db.myCollection.find({ fieldName: { $regex: /pattern/ } })

```
This query would return documents where the fieldName matches the specified regular expression pattern.



*/


/* 


// #1.
The db.hostInfo() method in MongoDB is used to retrieve information about the host or server where the MongoDB instance is running. It provides various details and statistics about the server's environment, which can be helpful for administrators and developers when monitoring and managing the MongoDB deployment. Some of the information that db.hostInfo() can provide includes:

System Information: Information about the host system, including the operating system type and version, the system's architecture, and the number of CPUs.

Host Information: Details about the host machine, such as the hostname, kernel version, and platform.

CPU Information: Information about the CPU(s) on the host, including the number of processors, CPU frequency, and CPU model.

Memory Information: Details about the system's memory, including the total physical memory and the amount of free memory.

Storage Information: Information about the storage devices, including the file system type and the size of the storage.

Network Information: Network-related details, such as the host's IP address, network interfaces, and more.

Version Information: The version of MongoDB that is running on the host.

This information can be useful for diagnosing issues, optimizing server performance, and ensuring that the MongoDB deployment is running on an appropriate hardware and software environment. It's a valuable tool for administrators and developers to gather insights into the server's configuration and resources.

// #2.
No, we cannot change the current database using the db.getName() method. The db.getName() method simply returns the name of the current database, and it does not have the capability to switch to a different database.

// #3.
The db.getName() method returns a string data type. It returns the name of the current database as a string.

// #4.
To delete a database in MongoDB using the db.dropDatabase() method, we need to switch to the database we want to delete first using the use command and then run db.dropDatabase(). For example:

```
use mydatabase
db.dropDatabase()

```
// #5.
The db.getCollectionNames() method returns an array of strings. Each string in the array represents the name of a collection in the current database.

// #6.
The purpose of the db.getCollectionNames() method in MongoDB is to retrieve the names of all the collections present in the current database. It provides a list of collection names as strings, which can be useful for various administrative tasks and querying information about the database schema.

// #7.
You can get server statistics and information in MongoDB using the db.serverStatus() method. This method returns a document that contains various metrics and statistics about the MongoDB server's current state and operation.

// #8.
To retrieve the version of MongoDB, we can use the db.version() method. This method returns a string representing the version of the MongoDB instance we are connected to.

// #9.
The method used to delete a collection from the database in MongoDB is db.collection.drop(). For example:
```
db.myCollection.drop()

```

// #10.
To insert a single document into a collection in MongoDB, we can use the db.collection.insertOne() method. Here's an example:

```
db.myCollection.insertOne({ key1: "value1", key2: "value2" })

```

// #11.
The find() method in MongoDB is used to query a collection and retrieve documents that match a specified set of query criteria or conditions. It returns a cursor, which allows you to iterate through the result set or apply further operations such as sorting or limiting the results. It is one of the fundamental methods for querying and retrieving data from MongoDB collections. Here's an overview of what the find() method does:

Querying Documents: When you call the find() method, you provide a query object as an argument. This query object defines the criteria that documents must meet to be included in the result set. MongoDB will search the collection for documents that match these criteria.

Result as a Cursor: The find() method returns a cursor, which is a pointer to the result set. It does not immediately retrieve all matching documents from the collection but allows you to iterate through the results. This is efficient for large result sets as it doesn't load all data into memory at once.

Iterating Through Results: To access the documents in the result set, you typically use a loop to iterate through the cursor. You can retrieve individual documents one at a time and work with their data.

Projection: You can specify a projection object as an optional argument to the find() method to control which fields or properties of the documents should be included in the result. This can help reduce the amount of data transferred from the database if you only need specific fields.

Sorting: You can use the sort() method in combination with find() to specify how the results should be sorted based on one or more fields in the documents. Sorting can be done in ascending or descending order.

Limiting Results: The limit() method can be used to limit the number of documents returned by the find() query. This is useful when you only need a subset of the matching documents.

Skipping Results: The skip() method allows you to skip a specified number of documents from the beginning of the result set. This is often used in combination with limit() for implementing pagination.

Here's a basic example of how the find() method is used in MongoDB:

javascript
Copy code
// Find all documents in a collection that match a query
const cursor = db.myCollection.find({ field1: "value1" });

// Iterate through the results and print each document
while (cursor.hasNext()) {
  const document = cursor.next();
  printjson(document);
}
In this example, the find() method is used to retrieve documents from the myCollection collection where field1 has the value "value1". The cursor is used to iterate through the matching documents, and each document is printed to the console.

// #12.
$regex is a MongoDB query operator used for performing regular expression-based pattern matching in queries. It allows us to search for documents where a specific field matches a regular expression pattern. We can use it in conjunction with the find() method to filter documents based on regular expressions. For example:

```
db.myCollection.find({ fieldName: { $regex: /pattern/ } })

```
This query would return documents where the fieldName matches the specified regular expression pattern.


*/



/* 


// #1.
The db.hostInfo() method in MongoDB is used to retrieve information about the host or server where the MongoDB instance is running. It provides various details and statistics about the server's environment, which can be helpful for administrators and developers when monitoring and managing the MongoDB deployment. Some of the information that db.hostInfo() can provide includes:

System Information: Information about the host system, including the operating system type and version, the system's architecture, and the number of CPUs.

Host Information: Details about the host machine, such as the hostname, kernel version, and platform.

CPU Information: Information about the CPU(s) on the host, including the number of processors, CPU frequency, and CPU model.

Memory Information: Details about the system's memory, including the total physical memory and the amount of free memory.

Storage Information: Information about the storage devices, including the file system type and the size of the storage.

Network Information: Network-related details, such as the host's IP address, network interfaces, and more.

Version Information: The version of MongoDB that is running on the host.

This information can be useful for diagnosing issues, optimizing server performance, and ensuring that the MongoDB deployment is running on an appropriate hardware and software environment. It's a valuable tool for administrators and developers to gather insights into the server's configuration and resources.

// #2.
No, we cannot change the current database using the db.getName() method. The db.getName() method simply returns the name of the current database, and it does not have the capability to switch to a different database.

// #3.
The db.getName() method returns a string data type. It returns the name of the current database as a string.

// #4.
To delete a database in MongoDB using the db.dropDatabase() method, we need to switch to the database we want to delete first using the use command and then run db.dropDatabase(). For example:

```
use mydatabase
db.dropDatabase()

```
// #5.
The db.getCollectionNames() method returns an array of strings. Each string in the array represents the name of a collection in the current database.

// #6.
The purpose of the db.getCollectionNames() method in MongoDB is to retrieve the names of all the collections present in the current database. It provides a list of collection names as strings, which can be useful for various administrative tasks and querying information about the database schema.

// #7.
You can get server statistics and information in MongoDB using the db.serverStatus() method. This method returns a document that contains various metrics and statistics about the MongoDB server's current state and operation.

// #8.
To retrieve the version of MongoDB, we can use the db.version() method. This method returns a string representing the version of the MongoDB instance we are connected to.

// #9.
The method used to delete a collection from the database in MongoDB is db.collection.drop(). For example:
```
db.myCollection.drop()

```

// #10.
To insert a single document into a collection in MongoDB, we can use the db.collection.insertOne() method. Here's an example:

```
db.myCollection.insertOne({ key1: "value1", key2: "value2" })

```

// #11.
The find() method in MongoDB is used to query a collection and retrieve documents that match a specified set of query criteria or conditions. It returns a cursor, which allows us to iterate through the result set or apply further operations such as sorting or limiting the results. It is one of the fundamental methods for querying and retrieving data from MongoDB collections. Here's an overview of what the find() method does:

Querying Documents: When we call the find() method, we provide a query object as an argument. This query object defines the criteria that documents must meet to be included in the result set. MongoDB will search the collection for documents that match these criteria.

Result as a Cursor: The find() method returns a cursor, which is a pointer to the result set. It does not immediately retrieve all matching documents from the collection but allows us to iterate through the results. This is efficient for large result sets as it doesn't load all data into memory at once.

Iterating Through Results: To access the documents in the result set, we typically use a loop to iterate through the cursor. We can retrieve individual documents one at a time and work with their data.

Projection: We can specify a projection object as an optional argument to the find() method to control which fields or properties of the documents should be included in the result. This can help reduce the amount of data transferred from the database if we only need specific fields.

Sorting: We can use the sort() method in combination with find() to specify how the results should be sorted based on one or more fields in the documents. Sorting can be done in ascending or descending order.

Limiting Results: The limit() method can be used to limit the number of documents returned by the find() query. This is useful when we only need a subset of the matching documents.

Skipping Results: The skip() method allows us to skip a specified number of documents from the beginning of the result set. This is often used in combination with limit() for implementing pagination.

Here's a basic example of how the find() method is used in MongoDB:

```
// Find all documents in a collection that match a query
const cursor = db.myCollection.find({ field1: "value1" });

// Iterate through the results and print each document
while (cursor.hasNext()) {
  const document = cursor.next();
  printjson(document);
}

```
In this example, the find() method is used to retrieve documents from the myCollection collection where field1 has the value "value1". The cursor is used to iterate through the matching documents, and each document is printed to the console.

// #12.
$regex is a MongoDB query operator used for performing regular expression-based pattern matching in queries. It allows us to search for documents where a specific field matches a regular expression pattern. We can use it in conjunction with the find() method to filter documents based on regular expressions. For example:

```
db.myCollection.find({ fieldName: { $regex: /pattern/ } })

```
This query would return documents where the fieldName matches the specified regular expression pattern.



*/