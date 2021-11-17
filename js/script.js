$(document).ready(function () {
  $('.slider').slider({
    interval: 4500,
    indicators: false,
    height: 300
  });
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('.parallax').parallax();
});

var count = 0;
const audio = new Audio("sound/rickroll.mp3" );

function t() {
  count = count + 1;
  if($("#project").is(':visible')){
    $("#project").css('display','none');
  } else {
    $("#project").css('display','block');
  }
  if(count == 5){
    
    $("body").css('animation','3s rotation_loop linear infinite');
    audio.play();
  }
}