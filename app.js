var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
require('dotenv').config();

// connect to the database
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0-shard-00-00-0bqek.mongodb.net:27017,cluster0-shard-00-01-0bqek.mongodb.net:27017,cluster0-shard-00-02-0bqek.mongodb.net:27017/gradDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`);

var catSchema = mongoose.Schema({
    name: {type: String, required: true},
    colors: {type: String, required: true},
    age: {type: Number, required: true}
});

var Cat = mongoose.model('Cat', catSchema);

// for BOTH of the following categories (callbacks and promises): 
// create a new cat in the database and print its information to the console
// alter some field of the cat and then print its information to the console again
// delete the cat from the database
// show all database records to prove the cat was removed

// USE CALLBACKS:
// your code here

// USE PROMISES:
// your code here

var app = express();

module.exports = app;