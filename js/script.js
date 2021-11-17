$(document).ready(function () {
  $('.slider').slider({
    interval: 4500,
    indicators: false,
    height: 300
  });
  $('.sidenav').sidenav();
  $('.modal-contact').modal();
  $('.parallax').parallax();
});
function t() {
  if($("#project").is(':visible')){
    $("#project").css('display','none');
  } else {
    $("#project").css('display','block');
  }
}