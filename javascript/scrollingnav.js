$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("nav").addClass("scrolling");
        $("nav img").addClass("scrolling");
    } else {
        $("nav").removeClass("scrolling");
        $("nav img").removeClass("scrolling");
    }


    if (scroll >= 60) {
    	$("footer").addClass("scrolling"); 
    } else {
    	$("footer").removeClass("scrolling");
    }
});