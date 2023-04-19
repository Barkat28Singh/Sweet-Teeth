document.querySelector(".navbar").style.backgroundColor = "#E077AB";
document.querySelector(".navbar").style.textAlign = "center";
document.querySelector(".navbar").style.position = "relative";
document.querySelector(".navbar").style.height = "35px";

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

//picker area styling
document.querySelector(".pickerarea").style.backgroundColor = "#E077AB";
document.querySelector(".pickerarea").style.display = "flex";
document.querySelector(".pickerarea").style.flexWrap = "wrap";
document.querySelector(".pickerarea").style.justifyContent = "center";

//droplist div styling
document.querySelector(".droplist").style.marginRight = "1rem";
document.querySelector(".droplist").style.margin = "20px";

//dropdown list 1 styling
document.querySelector("#countries").style.outline = "none";
document.querySelector("#countries").style.borderRadius = "1rem";
document.querySelector("#countries").style.padding = "0.5rem";
document.querySelector("#countries").style.border = "none";

arrangement = document.querySelectorAll(".arrange");
for (i = 0; i < arrangement.length; i++) {
  arrangement[i].style.display = "flex";
  arrangement[i].style.flexDirection = "row";
  arrangement[i].style.marginBottom = "2.5%";
  arrangement[i].style.marginLeft = "10%";
}

arrangement = document.querySelectorAll(".arrange2");
for (i = 0; i < arrangement.length; i++) {
  arrangement[i].style.display = "flex";
  arrangement[i].style.flexDirection = "row";
  arrangement[i].style.marginBottom = "2.5%";
  arrangement[i].style.marginLeft = "10%";
}

arrangement = document.querySelectorAll(".arrange3");
for (i = 0; i < arrangement.length; i++) {
  arrangement[i].style.display = "flex";
  arrangement[i].style.flexDirection = "row";
  arrangement[i].style.marginBottom = "2.5%";
  arrangement[i].style.marginLeft = "10%";
}

both = document.querySelectorAll(".both");
for (i = 0; i < both.length; i++) {
  both[i].style.marginTop = "8%";
  both[i].style.marginRight = "35%";
}
circ = document.querySelectorAll(".circles");
for (i = 0; i < circ.length; i++) {
  circ[i].style.width = "150px";
  circ[i].style.height = "140px";
  circ[i].style.borderRadius = "50%";
  circ[i].style.backgroundColor = "white";
  circ[i].style.border = "2px solid #E077AB";
  circ[i].style.marginBottom = "50px";
  circ[i].style.padding = "10%";
}

para = document.querySelectorAll(".description");
for (i = 0; i < para.length; i++) {
  para[i].style.fontFamily = "'Cabin', sans-serif";
  para[i].style.fontSize = "large";
  para[i].style.marginBottom = "20%";
  para[i].style.textAlign = "center";
  para[i].style.marginLeft = "9%";
}

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

p = document.querySelectorAll(".pic");

for (i = 0; i < p.length; i++) {
  p[i].style.width = "100px";
  p[i].style.height = "120px";
  p[i].style.marginLeft = "16%";
  p[i].style.marginTop = "8%";
}

p = document.querySelectorAll(".pic2");

for (i = 0; i < p.length; i++) {
  p[i].style.width = "100px";
  p[i].style.height = "120px";
  p[i].style.marginLeft = "16%";
  p[i].style.marginTop = "8%";
}

let addtoCart = document.querySelectorAll("button");
for (i = 0; i < addtoCart.length; i++) {
  addtoCart[i].style.borderRadius = "1em";
  addtoCart[i].style.height = "30px";
  addtoCart[i].style.width = "80px";
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
  navbutton[i].style.fontSize = "14px";
  navbutton[i].style.marginLeft = "30px";
  navbutton[i].style.backgroundColor = "#E077AB";
  navbutton[i].style.width = "100px";
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

margin = document.querySelectorAll(".margining");
for (i = 0; i < margin.length; i++) {
  margin[i].style.marginLeft = "-49%";
  margin[i].style.marginTop = "32%";
  margin[i].style.marginRight = "10%";
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
var counting = document.querySelectorAll(".count");
function clicked(index) {
  ++counting[index].innerHTML;
}

//Drop down list country changer code
document.querySelector("#indianCandies").style.display = "none";
document.querySelector("#japanCandies").style.display = "none";

function candyChange() {
  let c = document.getElementById("countries").value;

  if (c === "Caribbean") {
    document.getElementById("caribCandies").style.display = "block";
    document.getElementById("indianCandies").style.display = "none";
    document.getElementById("japanCandies").style.display = "none";
  } else if (c === "India") {
    document.getElementById("caribCandies").style.display = "none";
    document.getElementById("indianCandies").style.display = "block";
    document.getElementById("japanCandies").style.display = "none";
  } else if (c === "Japan") {
    document.getElementById("caribCandies").style.display = "none";
    document.getElementById("indianCandies").style.display = "none";
    document.getElementById("japanCandies").style.display = "block";
  }
}

/*function showDetails() {
  let info=document.getElementById("infobtn").name;

  if (info ==="jap1"){
    document.querySelector(".candydetailsbox").style.display = "block";
  }
  
}*/

//Details//

details = document.querySelectorAll(".candydetailsbox");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox1");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox2");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox3");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox4");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox5");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox6");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox7");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox8");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox9");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox10");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox11");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox12");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox13");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox14");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox15");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox16");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox17");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox18");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox19");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox20");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox21");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox22");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox23");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox24");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox25");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox26");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox27");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox28");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox29");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox30");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox31");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox32");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox33");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox34");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

details = document.querySelectorAll(".candydetailsbox35");
for (i = 0; i < details.length; i++) {
  details[i].style.display = "flex";
  details[i].style.display = "none";
  details[i].style.flexDirection = "column";
  details[i].style.justifyContent = "center";
  details[i].style.alignItems = "center";
  details[i].style.maxWidth = "100%";
  details[i].style.height = "500px";
  details[i].style.position = "absolute";
  details[i].style.top = "130%";
  details[i].style.left = "50%";
  details[i].style.transform = "translate(-50%,-50%)";
  details[i].style.zIndex = "4";
}

function display_candy() {
  for (i = 0; i < choice.length; i++) {
    choice[i].style.visibility = "visible";
    document.querySelector(".dropdown-content1").style.backgroundColor =
      "#E077AB";
  }
}

function showDetails() {
  document.querySelector(".candydetailsbox").style.display = "block";
}

function showDetails1() {
  document.querySelector(".candydetailsbox1").style.display = "block";
}

function showDetails2() {
  document.querySelector(".candydetailsbox2").style.display = "block";
}

function showDetails3() {
  document.querySelector(".candydetailsbox3").style.display = "block";
}

function showDetails4() {
  document.querySelector(".candydetailsbox4").style.display = "block";
}

function showDetails5() {
  document.querySelector(".candydetailsbox5").style.display = "block";
}

function showDetails6() {
  document.querySelector(".candydetailsbox6").style.display = "block";
}

function showDetails7() {
  document.querySelector(".candydetailsbox7").style.display = "block";
}

function showDetails8() {
  document.querySelector(".candydetailsbox8").style.display = "block";
}

function showDetails9() {
  document.querySelector(".candydetailsbox9").style.display = "block";
}

function showDetails10() {
  document.querySelector(".candydetailsbox10").style.display = "block";
}

function showDetails11() {
  document.querySelector(".candydetailsbox11").style.display = "block";
}

function showDetails12() {
  document.querySelector(".candydetailsbox12").style.display = "block";
}

function showDetails13() {
  document.querySelector(".candydetailsbox13").style.display = "block";
}

function showDetails14() {
  document.querySelector(".candydetailsbox14").style.display = "block";
}

function showDetails15() {
  document.querySelector(".candydetailsbox15").style.display = "block";
}

function showDetails16() {
  document.querySelector(".candydetailsbox16").style.display = "block";
}

function showDetails17() {
  document.querySelector(".candydetailsbox17").style.display = "block";
}

function showDetails18() {
  document.querySelector(".candydetailsbox18").style.display = "block";
}

function showDetails19() {
  document.querySelector(".candydetailsbox19").style.display = "block";
}

function showDetails20() {
  document.querySelector(".candydetailsbox20").style.display = "block";
}

function showDetails21() {
  document.querySelector(".candydetailsbox21").style.display = "block";
}

function showDetails22() {
  document.querySelector(".candydetailsbox22").style.display = "block";
}

function showDetails23() {
  document.querySelector(".candydetailsbox23").style.display = "block";
}

function showDetails24() {
  document.querySelector(".candydetailsbox24").style.display = "block";
}

function showDetails25() {
  document.querySelector(".candydetailsbox25").style.display = "block";
}

function showDetails26() {
  document.querySelector(".candydetailsbox26").style.display = "block";
}

function showDetails27() {
  document.querySelector(".candydetailsbox27").style.display = "block";
}

function showDetails28() {
  document.querySelector(".candydetailsbox28").style.display = "block";
}

function showDetails29() {
  document.querySelector(".candydetailsbox29").style.display = "block";
}

function showDetails30() {
  document.querySelector(".candydetailsbox30").style.display = "block";
}

function showDetails31() {
  document.querySelector(".candydetailsbox31").style.display = "block";
}

function showDetails32() {
  document.querySelector(".candydetailsbox32").style.display = "block";
}

function showDetails33() {
  document.querySelector(".candydetailsbox33").style.display = "block";
}

function showDetails34() {
  document.querySelector(".candydetailsbox34").style.display = "block";
}

function showDetails35() {
  document.querySelector(".candydetailsbox35").style.display = "block";
}

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox1");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox2");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox3");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox4");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox5");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox6");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox7");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox8");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox9");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox10");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox11");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox12");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox13");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox14");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox15");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox16");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox17");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox18");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox19");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox20");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox21");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox22");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox23");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox24");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox25");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox26");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox27");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox28");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox29");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox30");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox31");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox32");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox33");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox34");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

window.addEventListener("mouseup", function (event) {
  let hideinfo = document.querySelector(".candydetailsbox35");
  if (event.target != hideinfo && event.target.parentNode != hideinfo) {
    hideinfo.style.display = "none";
  }
});

//Details//

info = document.querySelectorAll(".candyinfo");
for (i = 0; i < info.length; i++) {
  info[i].style.display = "flex";
  info[i].style.flexDirection = "column";
  info[i].style.justifyContent = "center";
  info[i].style.alignItems = "center";
  info[i].style.width = "500px";
  info[i].style.height = "500px";
  info[i].style.padding = "20px";
  info[i].style.backgroundColor = "#FE7F9C";
  info[i].style.borderRadius = "25px";
}

descpic = document.querySelectorAll("#descpic");
for (i = 0; i < info.length; i++) {
  descpic[i].style.width = "400px";
  descpic[i].style.height = "400px";
}

let infobtn = document.querySelectorAll("#infobtn");
for (i = 0; i < infobtn.length; i++) {
  infobtn[i].style.height = "30px";
  infobtn[i].style.width = "60px";
  infobtn[i].style.color = "white";
  infobtn[i].style.backgroundColor = "#FE7F9C";
  infobtn[i].style.border = "none";
  infobtn[i].style.borderRadius = "1em";
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
