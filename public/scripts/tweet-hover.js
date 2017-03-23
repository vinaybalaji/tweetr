$(function () {
  $(document).on('mouseenter', '.each-old-tweet', function(e) {
    $(this).css('opacity', 1);
    $(this).children('.footer').append($('<img>').addClass('tweet-buttons').attr('src', 'images/tweet-buttons.png'));
  });
  $(document).on('mouseleave', '.each-old-tweet', function(e) {
    $(this).css('opacity', 0.5);
    $(this).find('.tweet-buttons').remove();
  });
});