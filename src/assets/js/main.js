"use strict";
$(document).ready(function () {
    
    /* left sidebar open */
    $('#left-menu').on('click', function () {
        $('body').toggleClass('sidebar-left-close');
    });
    $('.sidebar-left + div.backdrop, .sidebar .nav .nav-item .nav-link').on('click', function () {
        $('body').addClass('sidebar-left-close');
    });
 

    /* flip color setting block*/
    function setIntervalX(callback, delay, repetitions) {
        var x = 0;
        var intervalID = window.setInterval(function () {
            callback();
            if (++x === repetitions) {
                window.clearInterval(intervalID);
            }
        }, delay);
    }
    setIntervalX(function () {
        $('.animateflipy').addClass('flipInY');
        setTimeout(function () {
            $('.animateflipy').removeClass('flipInY');
        }, 1000)
    }, 2000, 3);

    /* fullscreen feature */
    $('.fullscreenbtn').on('click', function () {
        $(this).closest('.fullscreen').toggleClass('activefullscreen')
    });

    /* settings sidebar backdrop close */
    $('.settings-sidebar-backdrop').on('click', function () {
        $(this).fadeOut().prev('.settings-sidebar').addClass('close-settings-sidebar-backdrop')
        $('.close-setting-sidebar').removeClass('active')
        $('body').removeClass('setting-sidebar-open');
    });
    $('.close-setting-sidebar').on('click', function () {
        if ($(this).hasClass('active') === true) {
            $('.settings-sidebar').addClass('close-settings-sidebar-backdrop')
            $(this).removeClass('active');
            $('body').removeClass('setting-sidebar-open');
            $('.settings-sidebar-backdrop').fadeOut();
        } else {
            $('.settings-sidebar').removeClass('close-settings-sidebar-backdrop')
            $(this).addClass('active');
            $('body').addClass('setting-sidebar-open');
            if ($('#hidebackdrop').is(':checked') != true) {
                $('.settings-sidebar-backdrop').fadeIn()
            }
        }
    });
    $('#hidebackdrop').on('click', function () {
        if ($(this).is(':checked') === true) {
            $('.settings-sidebar-backdrop').fadeOut();
            $('#settingalert').show();
        } else {
            $('.settings-sidebar-backdrop').fadeIn();
            $('#settingalert').hide();
        }
    });


    /* full container active */
    $('#boxlayout').on('click', function () {
        if ($(this).is(':checked') === true) {
            $('body').addClass('boxed-page sidebar-left-close');
        } else {
            $('body').removeClass('boxed-page sidebar-left-close');
        }
    });

    /* full container active */
    $('#full-width3').on('click', function () {
        if ($(this).is(':checked') === true) {
            $('#full-width2').prop('checked', true);
            $('.main-container').addClass('container-fluid').removeClass('container');
        } else {
            $('#full-width2').prop('checked', false);
            $('.main-container').removeClass('container-fluid').addClass('container');
        }
    });
    $('#full-width2').on('click', function () {
        if ($(this).is(':checked') === true) {
            $('#full-width3').prop('checked', true);
            $('.main-container').addClass('container-fluid').removeClass('container');
        } else {
            $('#full-width3').prop('checked', false);
            $('.main-container').removeClass('container-fluid').addClass('container');
        }
    });

    /* chat window minimize */
    $('.chat-minmax').on('click', function () {
        $(this).closest('.chat-window').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.chat-close').on('click', function () {
        $(this).closest('.chat-window').hide();
    });
    $('#chat-list .list-group-item').on('click', function () {
        $('.chat-minmax, .chat-window').addClass('active');
        $('.chat-window').show();
    });

    if ($('body').hasClass('boxed-page') === true) {
        $('body').addClass('sidebar-left-close');
    }



    /* theme selection and image background script*/
    $("#customRadio32img").prop('checked', true);
    $('body .wrapper > .sidebar').css({
        'background-image': 'url(../assets/img/sidebar-2.png)',
        'background-repeat': 'no-repeat',
        'background-size': 'auto'
    }); 
 
    $('#sidebarfill').on('click', function () {
        $('.theme-color input[type="radio"]').prop("checked", false);
        if ($(this).is(':checked')) {
            $('#fullcolorfill').prop("checked", false);
            $.cookie("fullcolorfill", "", {
                expires: 1
            });

            $.cookie("sidebarfill", "sidebar", {
                expires: 1
            });
        } else {
            $.cookie("sidebarfill", "", {
                expires: 1
            });
        }
    });

    
    $('#headerfill').on('click', function () {
        $('.theme-color input[type="radio"]').prop("checked", false);
        if ($(this).is(':checked')) {
            $('#fullcolorfill').prop("checked", false);
            $.cookie("fullcolorfill", "", {
                expires: 1
            });

            $.cookie("headerfill", "header", {
                expires: 1
            });
        } else {
            $.cookie("headerfill", "", {
                expires: 7
            });
        }
    });

    
    $('#fullcolorfill').on('click', function () {
        $('.theme-color input[type="radio"]').prop("checked", false);
        if ($(this).is(':checked')) {
            $('#headerfill').prop("checked", false);
            $('#sidebarfill').prop("checked", false);
            $.cookie("headerfill", "", {
                expires: 7
            });
            $.cookie("sidebarfill", "", {
                expires: 1
            });

            $.cookie("fullcolorfill", "full", {
                expires: 1
            });
        } else {
            $.cookie("fullcolorfill", "", {
                expires: 1
            });
        }
    });
    

    $('#darktheme').on('click', function () {
        if ($(this).is(':checked')) {
            var stylesheetname = "css/dark-grey.css";
            $.cookie("stylesheetname", stylesheetname, {
                expires: 7
            });
            var linkurl = $('#theme')
            $('head').append("<link id='theme' rel='stylesheet' href='" + stylesheetname + "' type='text/css'>");

            $(".loader-logo").show();
            setTimeout(function () {
                $(".loader-logo").fadeOut();
                linkurl.remove();
            }, 1500);
        } else {
            var stylesheetname = "css/style.css";
            $.cookie("stylesheetname", stylesheetname, {
                expires: 7
            });
            var linkurl = $('#theme')
            $('head').append("<link id='theme' rel='stylesheet' href='" + stylesheetname + "' type='text/css'>");

            $(".loader-logo").show();
            setTimeout(function () {
                $(".loader-logo").fadeOut();
                linkurl.remove();
            }, 1500);
        }
    });
    $('.theme-color input[type="radio"]').on('click', function () {
        $.cookie("themecolor", $(this).next().attr('data-title'), {
            expires: 7
        });

        var stylesheetname = "css/" + $(this).next().attr('data-title') + $.cookie("headerfill") + $.cookie("sidebarfill") + ".css";
        $.cookie("stylesheetname", stylesheetname, {
            expires: 7
        });
        var linkurl = $('#theme')
        $('head').append("<link id='theme' rel='stylesheet' href='" + stylesheetname + "' type='text/css'>");

        $(".loader-logo").show();
        setTimeout(function () {
            $(".loader-logo").fadeOut();
            linkurl.remove();
        }, 1500);
    });

 

    $('.sidebar-image input[type="radio"]').on('click', function () {
        if ($(this).hasClass('bg-repeat') === true) {
            $.cookie("sidebarimgrepeat", $(this).next().attr('data-title'), {
                expires: 7
            });
            $.removeCookie('sidebarimg', {
                path: '/'
            });
            $('body .wrapper > .sidebar').css({
                'background-image': 'url(' + $(this).next().attr('data-title') + ')',
                'background-repeat': 'repeat',
                'background-size': 'auto'
            });
        } else {
            $.cookie("sidebarimg", $(this).next().attr('data-title'), {
                expires: 7
            });
            $.removeCookie('sidebarimgrepeat', {
                path: '/'
            });
            $('body .wrapper > .sidebar').css({
                'background-image': 'url(' + $(this).next().attr('data-title') + ')',
                'background-repeat': 'no-repeat',
                'background-size': '100%'
            });
        }
    });

   

    $('#rtl').on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('rtl');
            $.cookie("rtl-layout", "rtl", {
                expires: 1
            });
        } else {
            $('body').removeClass('rtl');
            $.cookie("rtl-layout", "", {
                expires: 1
            });
            $.removeCookie('rtl-layout');
        }
    })

     
    $('#iconsibarbar').on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('iconsibarbar sidebar-left-close');
            $.cookie("iconsibarbar-layout", "iconsibarbar", {
                expires: 1
            });
        } else {
            $('body').removeClass('iconsibarbar');
            $.cookie("iconsibarbar-layout", "", {
                expires: 1
            });
            $.removeCookie('iconsibarbar-layout');
        }
    });

});

$(window).on('load', function () {
    /* hide loader  */
    $('.loader').hide();
    $('.animatejack').addClass('jackInTheBox');
    $('.wrapper').css('padding-bottom', $('body > footer').outerHeight() );
    $('body > footer').css('margin-top', -( $('body > footer').outerHeight() ));
});
 
	// single range slider
	 
	 
	
	// multiple handled with value 
 
 