$(document).ready(function(){
resizeDiv();
});

window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
wh = $(window).height();
ww = $(window).width();
rh = $("#resume").height();
rh += 30;
ww -= 30;

$("#parallax-1").css({"height": wh + "px"});
$("#parallax-2").css({"height": rh + "px"});
$("footer").css({"width": ww + "px"});
}