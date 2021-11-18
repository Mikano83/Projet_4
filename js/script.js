$(document).ready(function () {
  $('.slider').slider({
    interval: 4500,
    indicators: false,
    height: 300
  });
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('.parallax').parallax();
  $('.dropdown-trigger').dropdown();
});

var count_btn_click = 0;
var count_rick_rgb = 0;
const audio = new Audio("sound/rickroll.mp3");

function modal_contact() {
  count_btn_click = count_btn_click + 1;
  if ($("#project").is(':visible')) {
    $("#project").css('display', 'none');
  } else {
    $("#project").css('display', 'block');
  }
  rick();
}
function rick() {
  if (count_btn_click == 5) {
    $(".main").css('animation', '3s rotation_loop linear infinite');
    $(".rick").css('animation', '3s rick_loop linear infinite');
    audio.play();
  }
}
