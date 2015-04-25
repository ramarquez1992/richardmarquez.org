$(document).ready(function() {
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        addPopups();
    }
});

function addPopups() {
    $('.work:even').each(function() {
        var popup = $(this).find('.popup').first();
        popup.css('right', '50px');
        popup.css('border-color', getRandomColor());

        $(this).hover(function() {
            popup.css('display', 'block');
            popup.animo( { animation: 'bounceInRight', duration: .3 } );
        }, function() {
            popup.css('display', 'none');
            /*popup.animo( { animation: 'bounceOutRight', duration: 0 }, function() {
                popup.css('display', 'none');
            });*/
        });
    });
    
    $('.work:odd').each(function() {
        var popup = $(this).find('.popup').first();
        popup.css('left', '50px');
        popup.css('border-color', getRandomColor());

        $(this).hover(function() {
            popup.css('display', 'block');
            popup.animo( { animation: 'bounceInLeft', duration: .3 } );
        }, function() {
            popup.css('display', 'none');
            /*popup.animo( { animation: 'bounceOutLeft', duration: 0 }, function() {
                popup.css('display', 'none');
            });*/
        });
    });
}
