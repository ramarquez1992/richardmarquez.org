var quotes;
var queue = []; // use push() and shift() to get a queue
var quotesList = [];

$(document).ready(function () {
  // Remember this is called asynchronously
  $.getJSON('./quotes.json', function (data)  {
    quotes = data.quotes;
    initQuote(quotes);
  });
});

function initQuote(quotes) {
  quotesList = quotes;

  setInterval(function () {
    $('main').fadeOut(500, function () {
      var randomIndex = Math.floor((Math.random() * quotesList.length));
      $('#quote').html(quotesList[randomIndex]);

      $('main').fadeIn(500, function () {
        // queue.push(quotesList.splice(randomIndex));
        //
        // if (queue.length > 5) {
        //   quotesList.push(queue.shift());
        // }
      });
    });
  }, 5000);
}
