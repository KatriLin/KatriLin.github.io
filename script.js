window.onscroll = function() {stayTop()};

var header = document.getElementById("stickheader");
var stay = header.offsetTop;

function stayTop() {
  if (window.pageYOffset > stay) {
    header.classList.add("stay");
  } else {
    header.classList.remove("stay");
  }
}
/* hamburger icon function */
function hambfunction(x) {
  x.classList.toggle("change");

}
/*show navigation on click */

function showDiv() {
let mainmenu = document.getElementById('mainnav');

if (mainmenu.style.display === 'block') {
  mainmenu.style.display = "none";
} else {
  mainmenu.style.display = "block";
}
}
/* button to go to top on page */
//this makes it visible and not visible on scroll
/*window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
  document.getElementById("topBtn").style.display = "block";
} else {
  document.getElementById("topBtn").style.display = "none";
}
}

//this makes scroll to top
function backtotopFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}*/

/*copyright year update */
var d = new Date()
document.getElementById("year").innerHTML="© " + d.getFullYear() +" Katri Lindvall. All Rights reserved.";
