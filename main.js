window.onload = function() {
  portfolioInit();
}

function portfolioInit() {
  // Set onclick() for each work
  $('#portfolioList').children().each(function() {

    $(this).click(function() {
      showWork($(this).children('h3').html(), $(this).children('img').attr('src'));
    });

  });
}

function showWork(name, imgSrc) {
  var shade = $('<div id="shade"></div>');
  shade.click(function() {
    removeWork();
  });
  $('body').append(shade);

  var workContainer = $('<div id="workContainer"></div>');
  $('body').append(workContainer);

  var header = $('<h1>' + name + '</h1>');
  $('#workContainer').append(header);

  var image = $('<img alt="' + name + '" src="' + imgSrc + '" />');
  $('#workContainer').append(image);

  $.get('portfolio/text/' + name, function(data) {

    var desc = $('<div id="description">' + data + '</div>');
    $('#workContainer').append(desc);


    var close = $('<div id="close">Close</div>');
    close.click(function() {
      removeWork();
    });

    $('#workContainer').append(close);
  });

}

function removeWork() {
    $('#shade').remove();
    $('#workContainer').remove();
}
