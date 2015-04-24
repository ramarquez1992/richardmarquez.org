$(document).ready(function() {
    //addPopups();
});

function addPopups() {
    $('.work').each(function() {
        var pic = $(this).find('img').first();
        $(this).hover(function() {
            pic.css('display', 'block');
            //pic.animo( { animation: 'bounceInRight', duration: .5 } );
        }, function() {
            pic.css('display', 'none');
            /*pic.animo( { animation: 'bounceOutRight', duration: .5 }, function() {
                pic.css('display', 'none');
            });*/
        });
    });
}

function splitAnimation() {
    $('#lab').css('display', 'block');      // Only show if javascript is enabled

    var svg = $('#lab'); 
    var svgNS = "http://www.w3.org/2000/svg";

    var rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"x",0);
    rect.setAttributeNS(null,"y",0);
    rect.setAttributeNS(null,"width",svg.width());
    rect.setAttributeNS(null,"height",svg.height());
    rect.setAttributeNS(null,"fill","#222");
    rect.onmouseover = function() { splitRect(this); };

    document.getElementById("lab").appendChild(rect);
}

function splitRect(rect) {    
    var newSet = divideRect(rect);
    for (var i = 0; i < newSet.length; ++i) {
        newSet[i].onmouseover = function() { splitRect(this); };
        document.getElementById("lab").appendChild(newSet[i]);
    }
    
    rect.parentNode.removeChild(rect);
}

function divideRect(rect) {  
    var svgNS = "http://www.w3.org/2000/svg";
 
    var oldX = rect.getAttribute("x");
    var oldY = rect.getAttribute("y");
    var subWidth = Math.trunc(rect.getAttribute("width") / 2);
    var subHeight = Math.trunc(rect.getAttribute("height") / 2);
    
    var topRight = document.createElementNS(svgNS,"rect");
    topRight.setAttributeNS(null,"x",+oldX + subWidth);
    topRight.setAttributeNS(null,"y",oldY);
    topRight.setAttributeNS(null,"width",subWidth);
    topRight.setAttributeNS(null,"height",subHeight);
    topRight.setAttributeNS(null,"fill",getRandomColor());

    var bottomRight = document.createElementNS(svgNS,"rect");
    bottomRight.setAttributeNS(null,"x",+oldX + subWidth);
    bottomRight.setAttributeNS(null,"y",+oldY + subHeight);
    bottomRight.setAttributeNS(null,"width",subWidth);
    bottomRight.setAttributeNS(null,"height",subHeight);
    bottomRight.setAttributeNS(null,"fill",getRandomColor());
    
    var bottomLeft = document.createElementNS(svgNS,"rect");
    bottomLeft.setAttributeNS(null,"x",oldX);
    bottomLeft.setAttributeNS(null,"y",+oldY + subHeight);
    bottomLeft.setAttributeNS(null,"width",subWidth);
    bottomLeft.setAttributeNS(null,"height",subHeight);
    bottomLeft.setAttributeNS(null,"fill",getRandomColor());
    
    var topLeft = document.createElementNS(svgNS,"rect");
    topLeft.setAttributeNS(null,"x",oldX);
    topLeft.setAttributeNS(null,"y",oldY);
    topLeft.setAttributeNS(null,"width",subWidth);
    topLeft.setAttributeNS(null,"height",subHeight);
    topLeft.setAttributeNS(null,"fill",getRandomColor());
        
    return [ topRight, bottomRight, bottomLeft, topLeft ];
}
