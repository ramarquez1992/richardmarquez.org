$(document).ready(function() {
  initColorBlocks();
});

function initColorBlocks() {
  $('.square').each(function() {
    $(this).css('background-color', getRandomColor());
    resizeColorBlocks();
  });
}

function resizeColorBlocks() {
  $('.square').each(function() {
    $(this).css('height', $(window).height() / 5);
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
