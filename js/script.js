var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 100) {
    document.getElementById("navbar").className ='navbar navbar-expand-lg navbar-light fixed-top';
  } else {
    document.getElementById("navbar").className = "navbar navbar-expand-lg navbar-light fixed-top scrolled";
  }
}
