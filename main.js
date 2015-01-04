window.onload = function() {
  addLinkTargets('_blank');
  menuInit();
  contactFormInit();
}

function addLinkTargets(target) {
  $('a').each(function() {
    if ($(this).attr('href') != '#contact' && $(this).attr('href') != 'index.php') {

      $(this).attr('target', target);
    }
  });
}

function menuInit() {
  $('#menu-button').click(function() {
    $('nav').toggle();
  });
}

function contactFormInit() {
  inputInit($('#contact-name'), 'name');
  inputInit($('#contact-email'), 'email');
  inputInit($('#contact-message'), 'message');
}

function inputInit(input, value) {
  $(input).focusin(function() {
    if ($(this).val() == value) {
      $(this).val('');
      $(this).css('color', '#000');
    }
  });

  $(input).focusout(function() {
    if ($(this).val() == '') {
      $(this).val(value);
      $(this).css('color', '#666');
    }
  });
}

