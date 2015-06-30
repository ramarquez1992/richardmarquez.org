$(document).ready(function() {
    $(document).focus(play());
});

function play() {
    displayGreetings();
}

function displayGreetings() {
    var audio = new Audio('/audio/greetings.mp3');
    audio.play();
    setTimeout("displayInput()", 3000);
    
    var span = $('<span>').appendTo('#container');
        
    span.typed({
        strings: ["Greetings Professor Falken<br/>"],
        typeSpeed: 50,
        showCursor: false
      });
}

function displayInput() {
    var text = $('#container').html() + '<br/><input id="input" type="text" /><br/><br/>';
    $('#container').html(text);
    focusInput();
    
    var input = $('#input');
    input.keypress(function(e) {
        if (e.which == 13) {
            if (input.val() == "hello") {
                blurInput();
                displayStrange();
            } else {
                input.typed({
                    strings: ["The world explodes"],
                    typeSpeed: 0,
                    showCursor: false
                });
                blurInput();
                nuke();
            }
        }
    });    
}

function nuke() {
    $('#nuke').css('display', 'block');
    $('#nuke').attr("src", "");
    $('#nuke').attr("src", "/img/nuke.gif");
    
    var audio = new Audio('/audio/nuke.mp3');
    audio.play();
    setTimeout("nuke()", 2500);
}

function focusInput() {
    $('#input').focus();
    
    $('#wopr').click(function() { $('#input').focus(); });
    $(document).click(function() { $('#input').focus(); });
    $(document).focus(function() { $('#input').focus(); });
}       

function blurInput() {
    $('#input').blur();
    
    $('#wopr').click(function() { $('#input').blur(); });
    $(document).click(function() { $('#input').blur(); });
    $(document).focus(function() { $('#input').blur(); });
}  

function displayStrange() {
    var audio = new Audio('/audio/strange.mp3');
    audio.play();
    setTimeout("displayChess()", 6000);
    
    var span = $('<span>').appendTo('#container');
        
    span.typed({
        strings: ["A strange game.<br/>The only winning move is not to play.<br/><br/>"],
        typeSpeed: 50,
        showCursor: false
      });
}

function displayChess() {
    var audio = new Audio('/audio/chess.mp3');
    audio.play();
    
    var span = $('<span>').appendTo('#container');
        
    span.typed({
        strings: ['How about a nice game of <a href="http://en.wikipedia.org/wiki/Atomic_chess">chess</a>?'],
        typeSpeed: 50,
        showCursor: false
      });
}
