$(document).ready(function() {
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        addPopups();
        initContactForm();
        initContactModal();
    } else {
        initMobileContact();
    }

});

function initMobileContact() {
    $('#hire').click(function() {
        window.location.href = 'mailto:richard92m@me.com';
    });

    $('#contact-link').click(function() {
        window.location.href = 'mailto:richard92m@me.com';
    });
}

function initContactForm() {
    $('#name').focus(function() {
        if($(this).val() == 'Name') {
            $(this).val('');
            $(this).css('color', '#000');
        }
    });

    $('#name').focusout(function() {
        if($(this).val() == '' || $(this).val() == 'Name') {
            $(this).val('Name');
            $(this).css('color', '#999');
        }
    });

    $('#email').focus(function() {
        if($(this).val() == 'Email') {
            $(this).val('');
            $(this).css('color', '#000');
        }
    });

    $('#email').focusout(function() {
        if($(this).val() == '' || $(this).val() == 'Email') {
            $(this).val('Email');
            $(this).css('color', '#999');
        }
    });

    $('#message').focus(function() {
        if($(this).val() == 'Message') {
            $(this).val('');
            $(this).css('color', '#000');
        }
    });

    $('#message').focusout(function() {
        if($(this).val() == '' || $(this).val() == 'Message') {
            $(this).val('Message');
            $(this).css('color', '#999');
        }
    });
}

function initContactModal() {
    $('#contact-link').click(function() {
        showShade();
        showContactModal();
    });

    $('#hire').click(function() {
        showShade();
        showContactModal();
    });
}

function closeContactModal() {
    $('#shade').css('display', 'none');

    $('#contact').animo( { animation: 'bounceOutRight', duration: 0.3 }, function() {
        $('#contact').css('display', 'none');
     });
    //$('#contact').css('display', 'none');
}

function showShade() {
    $('#shade').css('display', 'block');
    $('#shade').click(function() {
        closeContactModal();
    })
}

function showContactModal() {
    showShade();
    $('#contact').css('display', 'block');
    $('#contact').animo( { animation: 'bounceInRight', duration: .3 } );
}

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
