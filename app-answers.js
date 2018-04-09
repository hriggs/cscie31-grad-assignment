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

// using CALLBACKS:
console.log('Using callbacks:');

// create a new cat 
var callbackCat = new Cat({ name: 'Ernest', colors: 'white and gray', age: 5 });
callbackCat.save((err, cat)=>{
    
    // check for errors
    if (err) {
        console.log(err);
    } else {
        console.log('The cat has been added to the database: ' + cat);
    }
    
    // find the cat
    Cat.findById(cat._id, function (err, cat) {
        if (err) {
            console.log(err);
        } else {
            
            // update the cat's name
            cat.name = 'Hemingway';
            cat.save((err, cat)=>{
                if (err) {
                    console.log(err);
                } else {
                    console.log('The cat has been updated: ' + cat);    
                }
                
                // delete the cat
                Cat.remove({ name: 'Hemingway' }, (err)=>{
                    if (err) {
                        console.log(err);
                    }
                
                    // show all cats - make sure the cat has been removed 
                    Cat.find({}, (err, cats)=>{
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('There should be no cats in the database: ' + cats);
                        }
                    });
                });
            });
        }
    });   
});

// using PROMISES:
console.log('Using promises:');

// create a new cat
var promiseCat = new Cat({ name: 'Champ', colors: 'orange', age: 3 });
promiseCat.save()
    .then((cat)=>{
        console.log('The cat has been added to the database: ' + cat);
        
        // update the cat
        Cat.findOne({'_id': cat._id})
        .then((cat)=>{
            cat.name = 'Champion';
            cat.save()
            .then((cat)=>{
                console.log('The cat has been updated: ' + cat);
                
                // remove the cat
                cat.remove()
                .then(()=>{
                    
                    // show all cats - make sure the cat has been removed 
                    Cat.find({})
                    .then((cats)=>{
                        console.log('There should be no cats in the database: ' + cats);
                    })
                })
                .catch((err)=>{
                    console.log(err);
                }); 
            })
            .catch((err)=>{
                console.log(err);
            }); 
        })
        .catch((err)=>{
            console.log(err);
        });
    })
    .catch((err)=>{
        console.log(err);
    });

var app = express();

module.exports = app;