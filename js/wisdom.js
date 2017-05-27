var quotes;

$( document ).ready( function () {
    // Remember this is called asynchronously
    $.getJSON( './js/quotes.json', function ( data ) {
        quotes = data.quotes;
        initQuote();
    } );
} );

function initQuote() {
    var randomIndex = Math.floor((Math.random() * quotes.length));
    $('#quote').html(quotes[randomIndex]);
}
