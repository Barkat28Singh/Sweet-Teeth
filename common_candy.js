document.querySelector(".navbar").style.backgroundColor = "#E077AB";
document.querySelector(".navbar").style.textAlign = "center";
document.querySelector(".navbar").style.position = "relative";

var choice = document.querySelectorAll("#choice");
for (i = 0; i < choice.length; i++) {
  choice[i].style.color = "white";
  choice[i].style.textDecoration = "white";
  choice[i].style.visibility = "hidden";
  choice[i].style.display = "block";
}

document.querySelector(".Banner").style.height = "300px";
document.querySelector(".Banner").style.width = "100%";
document.querySelector(".Banner").style.objectFit = "fill";

document.querySelector("body").style.backgroundColor = "#EBD6D6";
document.querySelector("body").style.maxWidth = "100%";
document.querySelector("body").style.overflowX = "hidden";

arrangement = document.querySelectorAll(".arrange");
for (i = 0; i < arrangement.length; i++) {
  arrangement[i].style.display = "flex";
  arrangement[i].style.flexDirection = "row";
  arrangement[i].style.marginLeft = "6%";
  arrangement[i].style.marginBottom = "2.5%";
}

arrangement = document.querySelectorAll(".arrangechoc");
for (i = 0; i < arrangement.length; i++) {
  arrangement[i].style.display = "flex";
  arrangement[i].style.flexDirection = "row";
  arrangement[i].style.marginLeft = "9%";
  arrangement[i].style.marginBottom = "2.5%";
}

arrangement = document.querySelectorAll(".arrangeted");
for (i = 0; i < arrangement.length; i++) {
  arrangement[i].style.display = "flex";
  arrangement[i].style.flexDirection = "row";
  arrangement[i].style.marginLeft = "8%";
  arrangement[i].style.marginBottom = "2.5%";
}

both = document.querySelectorAll(".both");
for (i = 0; i < both.length; i++) {
  both[i].style.marginTop = "8%";
  both[i].style.marginRight = "11.5%";
}
circ = document.querySelectorAll(".circles");
for (i = 0; i < circ.length; i++) {
  circ[i].style.width = "150px";
  circ[i].style.borderRadius = "50%";
  circ[i].style.backgroundColor = "white";
  circ[i].style.border = "2px solid #E077AB";
  circ[i].style.marginBottom = "50px";
  circ[i].style.padding = "10%";
}

pics = document.querySelectorAll(".pictures");
for (i = 0; i < pics.length; i++) {
  pics[i].style.width = "50px";
  pics[i].style.marginLeft = "33%";
}

para = document.querySelectorAll(".description");
for (i = 0; i < para.length; i++) {
  para[i].style.fontFamily = "'Cabin', sans-serif";
  para[i].style.fontSize = "large";
  para[i].style.marginBottom = "20%";
  para[i].style.textAlign = "center";
  para[i].style.marginLeft = "18%";
}

document.querySelector(".footer").style.textAlign = "center";

footericons = document.querySelectorAll("span");
for (i = 0; i < footericons.length; i++) {
  footericons[i].style.fontSize = "60px";
  footericons[i].style.margin = "50px";
  footericons[i].style.fontFamily = "Reenie Beanie";
  footericons[i].style.color = "rgb(224, 119, 171)";
}

anchor = document.querySelectorAll("i");

for (i = 0; i < anchor.length; i++) {
  anchor[i].style.color = "rgb(224, 119, 171)";
}

p = document.querySelectorAll(".pic");

for (i = 0; i < p.length; i++) {
  p[i].style.width = "150px";
  p[i].style.marginLeft = "6%";
}

choc = document.querySelectorAll(".choc");

for (i = 0; i < choc.length; i++) {
  choc[i].style.width = "100px";
  choc[i].style.marginLeft = "16%";
}

ted = document.querySelectorAll(".teddy");

for (i = 0; i < ted.length; i++) {
  ted[i].style.width = "100px";
  ted[i].style.marginLeft = "23%";
}

boujee = document.querySelectorAll(".boujee");

for (i = 0; i < boujee.length; i++) {
  boujee[i].style.width = "110px";
  boujee[i].style.marginLeft = "15%";
}

q = document.querySelectorAll(".pic1");

for (i = 0; i < q.length; i++) {
  q[i].style.width = "40px";
  q[i].style.marginLeft = "35%";
}
r = document.querySelectorAll(".pic2");

for (i = 0; i < r.length; i++) {
  r[i].style.width = "70px";
  r[i].style.marginLeft = "28%";
}

let addtoCart = document.querySelectorAll("button");
for (i = 0; i < addtoCart.length; i++) {
  addtoCart[i].style.borderRadius = "1em";
  addtoCart[i].style.height = "30px";
  addtoCart[i].style.width = "100px";
  addtoCart[i].style.outline = "none";
  addtoCart[i].style.border = "none";
  addtoCart[i].style.backgroundColor = "#E077AB";
  addtoCart[i].style.color = "white";
  addtoCart[i].style.fontFamily = "'Cabin', sans-serif";
  addtoCart[i].style.cursor = "pointer";
}

var navbutton = document.querySelectorAll(".navbutton");

for (i = 0; i < navbutton.length; i++) {
  navbutton[i].style.border = "none";
  navbutton[i].style.color = "white";
  navbutton[i].style.cursor = "pointer";
  navbutton[i].style.fontFamily = "Mali, cursive";
  navbutton[i].style.fontSize = "medium";
  navbutton[i].style.fontSize = "14px";
  navbutton[i].style.backgroundColor = "#E077AB";
  navbutton[i].style.width = "100px";
}

let count = document.querySelectorAll(".count");
for (i = 0; i < count.length; i++) {
  count[i].style.width = "25px";
  count[i].style.backgroundColor = "#E077AB";
  count[i].style.height = "25px";
  count[i].style.textAlign = "center";
  count[i].style.fontFamily = "'Cabin', sans-serif";
  count[i].style.fontSize = "20px";
  count[i].style.display = "inline-block";
  count[i].style.borderRadius = "1em";
  count[i].style.padding = "1px";
  count[i].style.color = "white";
}

shopping_cart = document.querySelectorAll(".shopp_img");
for (i = 0; i < shopping_cart.length; i++) {
  shopping_cart[i].style.width = "25px";
  shopping_cart[i].style.backgroundColor = "#E077AB";
  shopping_cart[i].style.height = "25px";
  shopping_cart[i].style.fontFamily = "'Cabin', sans-serif";
  shopping_cart[i].style.borderRadius = "1em";
  shopping_cart[i].style.padding = "1px";
  shopping_cart[i].style.display = "inline-block";
  shopping_cart[i].style.cursor = "pointer";
}

shopping_cart_svg = document.querySelectorAll("svg");
for (i = 0; i < shopping_cart_svg.length; i++) {
  shopping_cart_svg[i].style.marginBottom = "-5.5px";
}

var footer_hover = document.querySelectorAll(".footer_hover");
for (i = 0; i < footer_hover.length; i++) {
  footer_hover[i].style.display = "inline";
  footer_hover[i].style.textAlign = "center";
  footer_hover[i].style.fontFamily = "'Cabin', sans-serif";
  footer_hover[i].style.fontSize = "small";
  footer_hover[i].style.color = "white";
  footer_hover[i].style.backgroundColor = "rgb(224, 119, 171)";
  footer_hover[i].style.position = "absolute";
}

document.querySelector(".email_hover").style.marginLeft = "150px";
document.querySelector(".email_hover").style.visibility = "hidden";

document.querySelector(".trademark_hover").style.marginLeft = "460px";
document.querySelector(".trademark_hover").style.visibility = "hidden";

document.querySelector(".mobile_hover").style.marginLeft = "20px";
document.querySelector(".mobile_hover").style.visibility = "hidden";

document.querySelector(".home_hover").style.marginLeft = "337px";
document.querySelector(".home_hover").style.visibility = "hidden";

document.querySelector(".instagram_hover").style.marginLeft = "620px";
document.querySelector(".instagram_hover").style.visibility = "hidden";

document.querySelector(".twitter_hover").style.marginLeft = "770px";
document.querySelector(".twitter_hover").style.visibility = "hidden";

//FUCNTIONALITY BEGINS HERE
function display_candy() {
  for (i = 0; i < choice.length; i++) {
    choice[i].style.visibility = "visible";
    document.querySelector(".dropdown-content1").style.backgroundColor =
      "#E077AB";
  }
}

var counting = document.querySelectorAll(".count");
function clicked(index) {
  ++counting[index].innerHTML;
}

function display_mobile() {
  document.querySelector(".mobile_hover").style.visibility = "visible";
}

function reverse_display_mobile() {
  document.querySelector(".mobile_hover").style.visibility = "hidden";
}

function display_email() {
  document.querySelector(".email_hover").style.visibility = "visible";
}

function reverse_display_email() {
  document.querySelector(".email_hover").style.visibility = "hidden";
}

function display_trademark() {
  document.querySelector(".trademark_hover").style.visibility = "visible";
}

function reverse_display_trademark() {
  document.querySelector(".trademark_hover").style.visibility = "hidden";
}

function display_home() {
  document.querySelector(".home_hover").style.visibility = "visible";
}

function reverse_display_home() {
  document.querySelector(".home_hover").style.visibility = "hidden";
}

function display_instagram() {
  document.querySelector(".instagram_hover").style.visibility = "visible";
}

function reverse_display_instagram() {
  document.querySelector(".instagram_hover").style.visibility = "hidden";
}

function display_twitter() {
  document.querySelector(".twitter_hover").style.visibility = "visible";
}

function reverse_display_twitter() {
  document.querySelector(".twitter_hover").style.visibility = "hidden";
}
