var divHover = document.getElementById('mydiv');
divHover.onmouseover = mouseOver;
divHover.onmouseout = mouseOut;
function mouseOver() {
  divHover.innerHTML = "Can I Help?";
}
function mouseOut() {
  divHover.innerHTML= "Hello World";
}
