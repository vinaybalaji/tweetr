/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

let tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetElement(tweetData) {

  //declaring variables for getting tweetData information from tweetData object that has been sent
  var tweetName = tweetData.user.name;
  var tweetHandle = tweetData.user.handle;
  var tweetAvatar = tweetData.user.avatars.regular;
  var tweetBody = tweetData.content.text;
  var tweetAgeMilliseconds = tweetData.created_at;

  //declaring articleElement variable that will be returned by the function
  var articleElement = $('<article>').addClass('each-old-tweet')

  //appending additional DOM elemebts using the tweeData variables delcared earlier
  //appending header right below
  articleElement.append($('<header>')
    .append($('<div>').addClass('avatar')
      .append($('<img>').attr('src', tweetAvatar)))
    .append($('<div>').addClass('name')
      .append($('<h2>').text(tweetName)))
    .append($('<div>').addClass('handle')
      .append($('<section>').text(tweetHandle))));

  //apending body section and line between body and footer
  articleElement.append($('<section>').addClass('tweet-body').text(tweetBody));
  articleElement.append('<hr>');

  //appending footer
  articleElement.append($('<footer>').addClass('footer'));

  //returning articleElement variable
  return articleElement;

}

//Registering the function below as an event handler for the document being ready, i.e. handles the
//DOMContentLoaded event.
$(function () {
  console.log('DOMContentLoaded has fired');
  var $tweet = createTweetElement(tweetData);
  $('#tweets-container').append($tweet);
});
