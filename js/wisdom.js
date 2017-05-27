var quotes;
var queue = []; // use push() and shift() to get a queue
var quotesList = [];

$(document).ready(function () {
  // Remember this is called asynchronously
  $.getJSON('./js/quotes.json', function (data)  {
    quotes = data.quotes;
    initQuote(quotes);
  });
});

function initQuote(quotes) {
  quotesList = quotes;

  setInterval(function () {
    var randomIndex = Math.floor((Math.random() * quotesList.length));

    $('main').fadeOut(500, function () {
      $('#quote').html(quotesList[randomIndex]);

      $('main').fadeIn(500, function () {
        queue.push(quotesList.splice(randomIndex));

        if (queue.length > 5) {
          quotesList.push(queue.shift());
        }
      });
    });
  }, 3000);
}
