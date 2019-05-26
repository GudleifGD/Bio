var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 100) {
    document.getElementById("navbar").className = 'navbar navbar-expand-lg navbar-light fixed-top';
  } else {
    document.getElementById("navbar").className = "navbar navbar-expand-lg navbar-light fixed-top scrolled";
  }
}
/* var revitem = 0;
function slide () {
var revItem = document.querySelectorAll('.review');
console.log (revItem);
return revItem;
}
document.addEventListener("DOMContentLoaded", slide ); */
