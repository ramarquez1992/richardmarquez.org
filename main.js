window.onload = function() {
  addLinkTargets('_blank');
}

function addLinkTargets(target) {
  $('a').each(function() {
    if ($(this).attr('href') != '#contact' && $(this).attr('href') != 'index.php') {

      $(this).attr('target', target);
    }
  });
}
