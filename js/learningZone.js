$(document).ready(function(){
// every time window is scrolled
    $(window).scroll(function(){
        // check the location of each thumbnail
        $(".thumbnail").each(function(i){

            var bottomOfThumbnail = $(this).offset().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            var randNum = 300 + (Math.random() * 200);
            if (bottomOfWindow > bottomOfThumbnail){
                $(".slow").animate({'opacity': '1'}, 4000);
                $(".medium").animate({'opacity': '1'}, 2000);
                $(".fast").animate({'opacity': '1'}, 600);
            }

        });


    });


});

