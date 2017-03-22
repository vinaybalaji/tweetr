/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//  let tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }

// function createTweetElement(tweetData) {
//   let tweetName = tweetData.user.name;
//   let tweetHandle = tweetData.handle;
//   let tweetAvatar = tweetData.user.avatars.regular;
//   let tweetBody = tweetData.content.text;
//   let tweetAgeMilliseconds = tweetData.created_at;
//   //let $tweet = $("<article>").addClass("each-old-tweet").text("Hello");

//   // $('<article>')
//   //   .addClass('each-old-tweet')
//   //   .text('Hello')
//   //   .appendTo('#tweets-container');
//   $('<h3>').text('Vinay').appendTo('body');

//   console.log($('<h3>').text('Vinay').appendTo('body'));

//     //$('<p class="whoa-snit">Hi, my name is <b>Vinay</b>.</p>').addClass('cool-p').appendTo('body');

//   // $("#tweets-container").appendTo("<article>").addClass("each-old-tweet").text("Hello");

//   // console.log($("#tweets-container").append("<article>").addClass("each-old-tweet").text("Hello"));

//   // $tweet.append("<header>")
//   //   .append("<div>").addClass("avatar").text("Hello!");

//   //return $tweet; // needs to return the jquery statement to load the tweet on index.html

// }

// // var $tweet = createTweetElement(tweetData);

// // // Test / driver code (temporary)
// // //console.log($tweet); // to see what it looks like

// // $('#tweets-container').append($tweet);

// // console.log($('#tweets-container').append($tweet));

// document.addEventListener('DOMContentLoaded', createTweetElement(tweetData));


// What happens when you pass a function into jQuery?
// It registers the function as an event handler for the document
// DOMContentLoaded event.
// document.addEventListener('DOMContentLoaded', function () {});
// $(document).ready(function () {});

function createTweetElement() {

  var articleElement = $('<article>').addClass('each-old-tweet')

  articleElement.append($('<header>')
    .append($('<div>').addClass('avatar')
      .append($('<img src="images/sample-avatar.png">')))
    .append($('<div>').addClass('name')
      .append($('<h2>').text('Vinay')))
    .append($('<div>').addClass('handle')
      .append($('<section>').text('@VBalaji'))));

  articleElement.append($('<section>').addClass('tweet-body').text('If I have seen further it is by standing on the shoulders of giants'));

  articleElement.append('<hr>');

  articleElement.append($('<footer>').addClass('footer'));

  articleElement.appendTo('#tweets-container');

}


$(function () {
  console.log('DOMContentLoaded has fired');
  createTweetElement();
  });
