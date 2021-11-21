var upsidedown = 0;

$(document).ready(function () {
  // $(".qst").throwable({
  //   gravity: {x:0,y:1},
  //   shape:"circle",
  // });
  $('.slider').slider({
    interval: 4500,
    indicators: false,
    height: 300
  });
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('.parallax').parallax();
  $('.dropdown-trigger').dropdown();
  $('#expand_contact').on('click',function () {
    $('#custom-modal-footer').slideToggle('slow');
    if (upsidedown == 0){
    $("#expand_contact_btn").css('transform', 'rotate3d(1, 0, 0, 180deg)');
    upsidedown = 1;
    } else {
      $("#expand_contact_btn").css('transform', 'rotate3d(1, 0, 0, 0deg)');
      upsidedown = 0;
    }
  });
  $('#test').on('click',function () {
    $('#project').slideToggle();
  });
});

var passphrase = "";

document.addEventListener("keydown", function (event) {
  passphrase = passphrase + event.key;
  password();
})

var count_btn_click = 0;
var count_rick_rgb = 0;
const audio_rick = new Audio("sound/rickroll.mp3");
const audio_heaven = new Audio("sound/heaven.mp3");

function projects() {
  count_btn_click = count_btn_click + 1;
  if ($("#project").is(':visible')) {
    $("#project").css('display', 'none');
  } else {
    $("#project").css('display', 'block');
  }
  rick();
}
/*################# EASTER EGG #################*/
function rick() {
  if (count_btn_click == 5) {
    $("body").css('animation', '3s rotation_loop linear infinite');
    $(".rick").css('animation', '3s rick_loop linear infinite');
    $(".rick").css('display', 'block');
    audio_rick.play();
  }
}
function password() {
  if (passphrase == "antoine") {
    $(".rick").css('display', 'block');
    $(".rick").css('background-color', '#000000a9');
    $(".antoine").css('display', 'block');
    $(".antoine").css('animation', '6s heaven linear infinite');
    $(".antoine").css('animation-direction', 'alternate');
    audio_heaven.play();
  }
}
