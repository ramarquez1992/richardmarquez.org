window.onload = function() {
    addLinkTargets('_blank');
    animate();
}

function addLinkTargets(target) {
    $('a').each(function() {
        if ($(this).attr('href') != '#contact' && $(this).attr('href') != 'index.php') {
            $(this).attr('target', target);
        }
    });
}

function animate() {
    //$('#lab').css('display', 'block');      // Only show if javascript is enabled
    
    //waterfall();
    
    //jQuery('<div/>', { id: 'finger' }).appendTo('#lab');

    /*$('#diamond').animo( { animation: ['tada', 'bounce'], duration: 1 }, function() {
        $('#diamond').animo( { animation: 'bounceInRight', duration: 1 } );
    });*/
}

function waterfall() {
    var c = document.getElementById("lab");
    var ctx = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    var hue = 0;
    var speed = 5;

    var BG = '#000';
    var currentColor = 'hsla(' + hue + ', 100%, 50%, 1)';
    var lines = [];
    for(i = 0; i < c.width; i++)
        {
            lines.push(0);
        }
    setInterval(function(){
        ctx.fillStyle = BG;
        ctx.fillRect(0,0,c.width,c.height);
        ctx.fillStyle = '#fff';
        for(j = 0; j < c.width; j++)
            {
                currentColor = 'hsla(' + hue + ', 70%, 50%, 1)';
                ctx.fillStyle = currentColor;
                ctx.fillRect(j,0, 2, lines[j]);
                lines[j] += Math.random() * speed;
                if(lines[0] > c.height + 100)
                    {
                        for(num in lines)
                            {
                                lines[num] = 0;
                                BG = currentColor;
                                hue++;
                            }
                    }
            }
    }, 1);
}
