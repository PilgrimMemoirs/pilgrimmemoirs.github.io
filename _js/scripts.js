var curScroll = 0;

$(window).bind('mousewheel DOMMouseScroll', function(e){
    var evt = window.event || e;
    var delta = evt.detail? evt.detail*(-120) : evt.wheelDelta;
    if(delta < 0) {
        //scroll down
        curScroll += 10;
    }
    else {
        //scroll up
        curScroll -= 10;
    }
    $('.page-content').scrollTop(curScroll);
    return true;
}); 