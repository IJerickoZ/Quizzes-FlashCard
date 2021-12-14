const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:1234@cluster0.jyc4d.mongodb.net/sample_weatherdata";
const client = new MongoClient(uri);

module.exports = client;