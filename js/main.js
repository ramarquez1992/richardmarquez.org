$(document).ready(function() {
  initColorBlocks();
});

$(window).resize(function() {
  initColorBlocks();
});

function initColorBlocks() {
  $('#colors .square').each(function() {
    var colorBlock = $(this);
    var timerId;

    // Assign initial random color
    colorBlock.css('background-color', getRandomColor());
    // Set block height to 1/5 viewport y
    colorBlock.css('height', $(window).height() / 5);

    // Continuously change block color when hovered over
    colorBlock.mouseover(function() {
      timerId = setInterval(function() {
        colorBlock.css('background-color', getRandomColor());
      }, 100);
    });

    colorBlock.mouseleave(function() {
      clearInterval(timerId);
    });
  });
}

// Get random 6-digit hex color e.g. "#a82df1"
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';

  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
