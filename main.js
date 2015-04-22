window.onload = function() {
  addLinkTargets('_blank');
  //animate();
}

function addLinkTargets(target) {
  $('a').each(function() {
    if ($(this).attr('href') != '#contact' && $(this).attr('href') != 'index.php') {

      $(this).attr('target', target);
    }
  });
}

function animate() {
  $('#diamond').animo( { animation: ['tada', 'bounce'], duration: 1 }, function() {
    $('#diamond').animo( { animation: 'bounceInRight', duration: 1 } );
  });
}
