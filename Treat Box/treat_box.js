document.querySelector(".navbar").style.backgroundColor = "#E077AB";
document.querySelector(".navbar").style.textAlign = "center";
document.querySelector(".navbar").style.position = "relative";
document.querySelector(".navbar").style.height = "35px";

var choice = document.querySelectorAll("#choice");
for (i = 0; i < choice.length; i++) {
  choice[i].style.color = "white";
  choice[i].style.textDecoration = "white";
  choice[i].style.backgroundColor = "#E077AB";
  choice[i].style.visibility = "hidden";
  choice[i].style.display = "block";
}
document.querySelector(".navbutton1").style.border = "none";
document.querySelector(".navbutton1").style.color = "white";
document.querySelector(".navbutton1").style.cursor = "pointer";
document.querySelector(".navbutton1").style.fontFamily = "Mali, cursive";
document.querySelector(".navbutton1").style.fontSize = "15px";
document.querySelector(".navbutton1").style.marginLeft = "40px";
document.querySelector(".navbutton1").style.backgroundColor = "#E077AB";
document.querySelector(".navbutton1").style.height = "30px";

let navbutton = document.querySelectorAll(".navbutton");

for (i = 0; i < navbutton.length; i++) {
  navbutton[i].style.border = "none";
  navbutton[i].style.color = "white";
  navbutton[i].style.cursor = "pointer";
  navbutton[i].style.fontFamily = "Mali, cursive";
  navbutton[i].style.fontSize = "15px";
  navbutton[i].style.backgroundColor = "#E077AB";
  navbutton[i].style.marginLeft = "40px";
}

document.querySelector(".Banner").style.height = "300px";
document.querySelector(".Banner").style.width = "100%";
document.querySelector(".Banner").style.objectFit = "fill";

document.querySelector("body").style.backgroundColor = "#EBD6D6";
document.querySelector("body").style.maxWidth = "100%";
document.querySelector("body").style.overflowX = "hidden";

arrangement = document.querySelectorAll(".arrange");
for (i = 0; i < arrangement.length; i++) {
  arrangement[i].style.margin = "80px";
  arrangement[i].style.paddingleft = "10px";
  arrangement[i].style.display = "flex";
  arrangement[i].style.flexDirection = "row";
}

document.querySelector(".valentine_starter_pack").style.width = "500px";
document.querySelector(".valentine_starter_pack").style.border =
  "8px solid #E6BED2";

paras = document.querySelectorAll(".description");
for (i = 0; i < paras.length; i++) {
  paras[i].style.backgroundColor = "#E6BED2";
  paras[i].style.marginLeft = "150px";
  paras[i].style.textAlign = "center";
  paras[i].style.fontFamily = "'Cabin Sans-serif'";
  paras[i].style.fontSize = "35px";
  paras[i].style.fontSize = "35px";
  paras[i].style.height = "400px";
}

document.querySelector(".xmas_starter_pack").style.width = "580px";
document.querySelector(".xmas_starter_pack").style.border = "8px solid #E6BED2";

document.querySelector(".description-left").style.backgroundColor = "#E6BED2";
document.querySelector(".description-left").style.marginRight = "150px";
document.querySelector(".description-left").style.textAlign = "center";
document.querySelector(".description-left").style.fontFamily =
  "'Cabin Sans-serif'";
document.querySelector(".description-left").style.fontSize = "35px";

document.querySelector(".halloween_starter_pack").style.width = "500px";
document.querySelector(".halloween_starter_pack").style.border =
  "8px solid #E6BED2";

document.querySelector(".footer").style.textAlign = "center";
document.querySelector(".footer").style.marginTop = "5%";

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

let addtoCart = document.querySelectorAll(".add");
for (i = 0; i < addtoCart.length; i++) {
  addtoCart[i].style.borderRadius = "1em";
  addtoCart[i].style.height = "30px";
  addtoCart[i].style.width = "200px";
  addtoCart[i].style.outline = "none";
  addtoCart[i].style.border = "none";
  addtoCart[i].style.backgroundColor = "#E077AB";
  addtoCart[i].style.color = "white";
  addtoCart[i].style.fontFamily = "'Cabin', sans-serif";
  addtoCart[i].style.marginLeft = "12.5%";
  addtoCart[i].style.cursor = "pointer";
}

count = document.querySelectorAll(".count");
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

document.querySelector(".margining").style.marginLeft = "60%";

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
