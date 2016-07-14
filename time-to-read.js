$(document).ready(function timeToRead() {
  var wordsPerMinute = 230;
  var pageText = $(document.body).text();
  var splitWords = pageText.split(" ");
  var  wordCount = splitWords.length;
  var timeToRead = (wordCount/wordsPerMinute)
  timeToRead = Math.round(timeToRead);

  $(".time-to-read-view").text("This article is  " + timeToRead + " minutes read.");
});
