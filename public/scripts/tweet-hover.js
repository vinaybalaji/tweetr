$(function () {
  $('.each-old-tweet').mouseenter(function(e) {
    $(this).css('opacity', 1);
    $(this).children('.footer').append($('<img>').addClass('tweet-buttons').attr('src', 'images/tweet-buttons.png'));
  });
  $('.each-old-tweet').mouseleave(function(e) {
    $(this).css('opacity', 0.5);
    $(this).find('.tweet-buttons').remove();
  });
});