const projectID = document.getElementById("project");

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
  if(projectID.style.display !== "none"){
    projectID.style.display = "none";
  } else {
    projectID.style.display = "block";
  }
}