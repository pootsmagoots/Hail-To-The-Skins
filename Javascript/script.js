$(document).ready(function(){

//teseting some JQuery with elements on html
//minimizing the amount of CSS usage

// $("#test").mouseover(function(){
// $(this).css("text-decoration", "line-through");
// }),
// $("#test").mouseleave(function(){
// $(this).css("text-decoration", "none");
// });
function blinker() {
    $('.arrow').fadeOut(500); //fade out arrow svg
    $('.arrow').fadeIn(500);  //fade in arrow svg
}
setInterval(blinker, 2000); //Runs every two seconds

$(window).on('scroll', function(){ //Blur on first picture
var pixs = $(document).scrollTop()
pixs = pixs / 100
$('.banner').css({'-webkit-filter': "blur("+pixs+"px)", "filter":
"blur("+pixs+"px)" })
});






});
