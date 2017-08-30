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
    $('.arrow').fadeOut(500);
    $('.arrow').fadeIn(500);
}

setInterval(blinker, 2000); //Runs every second

});
