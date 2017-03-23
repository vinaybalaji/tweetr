$(function () {
  $(document).on('keyup', '#tweet-body', function() {
    $('#flash-message').text('');
    let counterValue = 140 - $(this).val().length;
    $(this).siblings(".counter").text(counterValue);
    if (counterValue < 0) {
      $(this).siblings(".counter").css("color", "red");
    } else {
      $(this).siblings(".counter").css("color", "black");
    }
  });
});