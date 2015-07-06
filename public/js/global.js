$(document).ready(function() {
    //addLinkTargets('_blank');
    colorSquares();
});

function addLinkTargets(target) {
    $('a').each(function() {
        if ($(this).attr('href') != '#contact' && $(this).attr('href') != 'index.php') {
            $(this).attr('target', target);
        }
    });
}

function colorSquares() {
    $('.square').each(function() {
        $(this).css('border-color', getRandomColor());
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeElementById(id) {
    var child = document.getElementById(id);
    child.parentNode.removeChild(child)
}
