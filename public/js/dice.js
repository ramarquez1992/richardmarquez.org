$(document).ready(function() {
    $(document).focus(roll());

    init();
});

function init() {
    $('#roll-button').click(function() {
        roll();
    });
}

function roll() {
    var dieType = parseInt($('#die-type').val());
    var dieCount = $('#die-count').val();

    var dice = '';
    for(var i = 0; i < dieCount; ++i) {
        dice += makeDie(getNumBetween(1, dieType));
    }
    $('#dice').html(dice);
}

function makeDie(num) {
    var die = num + '<br/>';

    return die;
}

// Get random # between lower and upper (inclusive)
function getNumBetween(lower, upper) {
    var num = Math.floor(Math.random() * ((upper + 1) - lower)) + lower;

    return num;
}