/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function renderTweets(data) {
  $('#tweets-container').empty();
  data.forEach(function (tweetData) {
    $('#tweets-container').prepend(createTweetElement(tweetData));
  });
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

  //appending footer with tweet options image
  articleElement.append($('<footer>').addClass('footer').text(tweetAge(tweetAgeMilliseconds))
    .append($('<img>').addClass('tweet-options').addClass('tweet-buttons-hidden').attr('src', 'images/tweet-buttons.png')));

  //returning articleElement variable
  return articleElement;

}

function tweetAge(tweetAgeMilliseconds) {
  var tweetAge = 0;
  if (Math.round((Date.now() - tweetAgeMilliseconds)/86400000) !== 0) {
    return Math.round((Date.now() - tweetAgeMilliseconds)/86400000) + " day(s) go";
  } else if (Math.round((Date.now() - tweetAgeMilliseconds)/3600000) !== 0) {
    return Math.round((Date.now() - tweetAgeMilliseconds)/3600000) + "hour(s) ago";
  } else if (Math.round((Date.now() - tweetAgeMilliseconds)/60000) !==  0) {
    return Math.round((Date.now() - tweetAgeMilliseconds)/60000) + " minute(s) ago";
  } else {
    return Math.round((Date.now() - tweetAgeMilliseconds)/1000) + " second(s) ago";
  }
}

//function to load tweets to respond to a get request
function loadTweets() {
  $.ajax({
    method: 'GET',
    url: '/tweets/'
  }).done(function (tweets) {
    renderTweets(tweets);
  });
}

//function to reset the character counter to 140
function setNewTweetCounter() {
  $('#new-tweet-counter').text('140');
}

//funciton to reset the Flash Message in the new tweet container
function resetFlashMessage() {
  $('#flash-message').text('');
}

//Registering the function below as an event handler for the document being ready, i.e. handles the
//DOMContentLoaded event.
$(function () {
  loadTweets();
  resetFlashMessage();
  setNewTweetCounter();

  //Hide the new tweet container on page load
  $('#new-tweet-container').hide();
  //Toggle Compose Button when clicked
  $('#compose').on('click', function (event) {
    $('#new-tweet-container').slideToggle('fast');
    $('#tweet-body').focus();
  });
  //Show tweet buttons image when hovering over each tweet
  $(document).on('mouseenter', '.each-old-tweet', function(event) {
    $(this).find('.tweet-options').removeClass('tweet-buttons-hidden').addClass('tweet-buttons-unhidden');
  });
  //Hiden tween buttons inage when hovering out of each tweet
  $(document).on('mouseleave','.each-old-tweet', function(event) {
    $(this).find('.tweet-options').removeClass('tweet-buttons-unhidden').addClass('tweet-buttons-hidden');
  });
  //POST function for Tweet button
  $('#new-tweet-form').on('submit', function (event) {
    event.preventDefault();
    var tweetBodyContainer = $('#tweet-body');
    var tweetBodyText = tweetBodyContainer.val();
    if (tweetBodyText === '' || tweetBodyText === null) {
      $('#flash-message').text('Tweet cannot be empty.');
    } else if (tweetBodyText.length > 140) {
      $('#flash-message').text('Tweet cannot be more than 140 characters');
    } else {
      $.ajax({
        url: '/tweets/',
        method: 'POST',
        data: {
          text: tweetBodyText
        }
      }).done(function (newTweet) {
        $('#new-tweet-form').removeClass('error');
        tweetBodyContainer.val('');
        tweetBodyContainer.focus();
        loadTweets();
        resetFlashMessage();
        setNewTweetCounter();
      }).fail(function (err) {
        $('#new-tweet-form').addClass('error'); // think about what class we should be adding in case of an error
      });
    }
  });
});





