const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:password1234@cluster0.jyc4d.mongodb.net/sample_weatherdata";
const client = new MongoClient(uri);

module.exports = client;