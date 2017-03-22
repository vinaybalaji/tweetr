function tweetAge() {
  $(".footer").text(Math.round((Date.now() - 1461116232227)/86400000) + " days ago");
}

document.addEventListener('DOMContentLoaded', tweetAge);