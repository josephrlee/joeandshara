(function($) {
    // DOM ready
    $(document).ready(function() {

        //$('base').attr('href','');

        // you want to enable the pointer events only on click;

        $('#google_map').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#map').on('click', function() {
            $('#google_map').removeClass('scrolloff'); // set the pointer events true on click
        });

        // you want to disable pointer events when the mouse leave the canvas area;

        $("#google_map").mouseleave(function() {
            $('#google_map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        });

        var endDate = "October 22, 2016 18:00:00";
        $('.countdown').countdown({
            date: endDate,
            render: function(data) {
                $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>Days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>Hours</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>Minutes</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>Seconds</span></div>");
            }
        });

        SetupTasks.navButton();

    });

    var SetupTasks = {

        navButton: function() {

            // arrow down smooth
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
                var target = this.hash,
                    $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 1000, 'swing', function() {
                    window.location.hash = target;
                });
            });

            // dismiss menu
            $('html').bind('click touchstart', function() {
                //Hide the menus if visible
                var menu = $('.top-bar-section');
                if ($(menu).is(':visible')) {
                    $(menu).fadeOut();
                }
            });
            $('.top-bar-section').click(function(e) {
                event.stopPropagation();
            });
        },

    }

    // Run immediately
})(jQuery);
