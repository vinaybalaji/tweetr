"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");
const mongo = require('mongodb');

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.collection('tweets').insertOne(newTweet, function (err, res) {
          if (err) {
            return callback(err);
          }
          callback(null, true);
        });
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      simulateDelay(() => {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        db.collection('tweets').find().toArray(function (err, tweets) {
          if (err) {
            return callback(err);
          }
          tweets.sort(sortNewestFirst);
          callback(null, tweets);
        });
      });
    },

    //Update tweets database for likes counter
    updateTweet: function(tweetID, tweetLikesCounter, callback) {
      var o_id = new mongo.ObjectID(tweetID);
      db.collection('tweets').updateOne({_id: o_id}, {$set: {likes: tweetLikesCounter}}, function (err, result) {
        if (err) throw err;
        callback(null, true);
      });
    }
  }
};
