window.onload = function() {
  contactFormInit()
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
