$(document).ready(function() {
    //addLinkTargets('_blank');
});

function addLinkTargets(target) {
    $('a').each(function() {
        if ($(this).attr('href') != '#contact' && $(this).attr('href') != 'index.php') {
            $(this).attr('target', target);
        }
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
