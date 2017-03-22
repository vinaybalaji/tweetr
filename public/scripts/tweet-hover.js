function tweetHoverHighlight() {
  $( ".each-old-tweet" ).mouseenter(function(e) {
    $(this).css("opacity", 1);
    $('<img src="images/tweet-buttons.png" id="tweet-buttons">').appendTo('footer');
  });
  $( ".each-old-tweet" ).mouseleave(function(e) {
    $(this).css("opacity", 0.5);
    $("#tweet-buttons").remove();
  });
}


document.addEventListener('DOMContentLoaded', tweetHoverHighlight);