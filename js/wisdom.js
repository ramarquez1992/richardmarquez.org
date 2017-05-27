const quotes;
let queue = []; // use push() and shift() to get a queue
let quotesList = [];

$(document).ready(() => {
  // Remember this is called asynchronously
  $.getJSON('./js/quotes.json', (data) => {
    quotes = data.quotes;
    initQuote(quotes);
  });
});

function initQuote(quotes) {
  quotesList = quotes;
  setInterval(() => {
    let randomIndex = Math.floor((Math.random() * quotesList.length));
    $('main').fadeOut(500, () => {
      $('#quote').html(quotesList[randomIndex]);
      $('main').fadeIn(500, () => {
        queue.push(quotesList.splice(randomIndex));
        if (queue.length > 5) {
          quotesList.push(queue.shift());
        }
      });
    });
  }, 3000);
}