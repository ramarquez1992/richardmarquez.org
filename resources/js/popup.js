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
