document.querySelector(".Banner").style.height = "300px";
document.querySelector(".Banner").style.width = "100%";
document.querySelector(".Banner").style.objectFit = "fill";

document.querySelector("body").style.backgroundColor = "#EBD6D6";
document.querySelector("body").style.maxWidth = "100%";
document.querySelector("body").style.overflowX = "hidden";

document.querySelector("h2").style.fontSize = "50px";
document.querySelector("h2").style.fontFamily = "cabin";

document.querySelector(".arrange_hover").style.marginLeft = "18%";

document.querySelector(".candy_categories").style.display = "inline";
document.querySelector(".candy_categories").style.textAlign = "center";
document.querySelector(".candy_categories").style.fontFamily =
  "Cabin sans-serif";
document.querySelector(".candy_categories").style.fontSize = "small";
document.querySelector(".candy_categories").style.color = "white";
document.querySelector(".candy_categories").style.marginRight = "20%";
document.querySelector(".candy_categories").style.backgroundColor =
  "rgb(224, 119, 171)";
document.querySelector(".candy_categories").style.visibility = "hidden";

document.querySelector(".international_candy").style.display = "inline";
document.querySelector(".international_candy").style.textAlign = "center";
document.querySelector(".international_candy").style.marginRight = "14%";
document.querySelector(".international_candy").style.fontFamily =
  "Cabin sans-serif";
document.querySelector(".international_candy").style.fontSize = "small";
document.querySelector(".international_candy").style.color = "white";
document.querySelector(".international_candy").style.backgroundColor =
  "rgb(224, 119, 171)";
document.querySelector(".international_candy").style.visibility = "hidden";

document.querySelector(".treat_box").style.display = "inline";
document.querySelector(".treat_box").style.textAlign = "center";
document.querySelector(".treat_box").style.fontFamily = "Cabin sans-serif";
document.querySelector(".treat_box").style.fontSize = "small";
document.querySelector(".treat_box").style.color = "white";
document.querySelector(".treat_box").style.marginRight = "15%";
document.querySelector(".treat_box").style.backgroundColor =
  "rgb(224, 119, 171)";
document.querySelector(".treat_box").style.visibility = "hidden";

document.querySelector(".mix_n_match").style.display = "inline";
document.querySelector(".mix_n_match").style.textAlign = "center";
document.querySelector(".mix_n_match").style.fontFamily = "Cabin sans-serif";
document.querySelector(".mix_n_match").style.fontSize = "small";
document.querySelector(".mix_n_match").style.color = "white";
document.querySelector(".mix_n_match").style.backgroundColor =
  "rgb(224, 119, 171)";
document.querySelector(".mix_n_match").style.visibility = "hidden";

document.querySelector(".about_us").style.fontFamily = "Mali, cursive";
document.querySelector(".about_us").style.fontSize = "22px";

document.querySelector(".container").style.display = "flex";
document.querySelector(".container").style.flexDirection = "column";
document.querySelector(".container").style.height = "auto";
document.querySelector(".container").style.width = "100vw";

document.querySelector(".navicons").style.flex = "1";
document.querySelector(".navicons").style.display = "flex";
document.querySelector(".navicons").style.justifyContent = "space-evenly";

document.querySelector("#toffeecandy").style.cursor = "pointer";
document.querySelector("#teddy").style.cursor = "pointer";
document.querySelector("#treatbox").style.cursor = "pointer";
document.querySelector("#mixnmatch").style.cursor = "pointer";

document.querySelector(".loll1").style.backgroundColor = "#9ECDFF";
document.querySelector(".choc1").style.backgroundColor = "#B5499C";
document.querySelector(".gumm1").style.backgroundColor = "#ADDDB8";
document.querySelector(".rock1").style.backgroundColor = "#D58638";
document.querySelector(".bouj1").style.backgroundColor = "#DBC446";

document.querySelector(".midbanner").style.flex = "1";
document.querySelector(".midbanner").style.display = "flex";
document.querySelector(".ban").style.width = "100%";

document.querySelector(".main").style.flex = "6";
document.querySelector(".main").style.display = "flex";
document.querySelector(".main").style.flexDirection = "row";
document.querySelector(".main").style.padding = "5vw";
document.querySelector(".main").style.gap = "50px";

document.querySelector(".leftside").style.width = "50vw";
document.querySelector(".rightside").style.width = "50vw";

document.querySelector(".footer").style.flex = "2";
document.querySelector(".toffee").style.height = "80px";

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

//
//
//
//Functions and for loops below
//
//
//

menuicons = document.querySelectorAll(".icons");
for (i = 0; i < menuicons.length; i++) {
  menuicons[i].style.width = "auto";
  menuicons[i].style.height = "100px";
}

document.querySelector(".footer").style.textAlign = "center";
document.querySelector(".footer").style.marginTop = "70px";

anchor = document.querySelectorAll("a");
for (i = 0; i < anchor.length; i++) {
  anchor[i].style.color = "rgb(224, 119, 171)";
}

footericons = document.querySelectorAll("span");
for (i = 0; i < footericons.length; i++) {
  footericons[i].style.fontSize = "60px";
  footericons[i].style.margin = "50px";
  footericons[i].style.fontFamily = "Reenie Beanie";
  footericons[i].style.color = "rgb(224, 119, 171)";
}

//Drop Down Menu

let choice = document.querySelectorAll("#choice"); // Centers the dropdown menu text
for (i = 0; i < choice.length; i++) {
  choice[i].style.display = "flex";
  choice[i].style.justifyContent = "center";
  choice[i].style.color = "black";
  choice[i].style.textDecoration = "none";
}

let content1 = document.querySelectorAll(".dropdown-content1"); // Styles  Candy dropdown menu
for (i = 0; i < content1.length; i++) {
  content1[i].style.position = "absolute";
  content1[i].style.minWidth = "209.65px";
  content1[i].style.display = "none";
  // content1[i].style.display = "block";
  content1[i].style.zIndex = "1";
  content1[i].style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2) ";
}

const toffee = document.querySelector(".toffee");
document.querySelector(".toffee").addEventListener("mouseover", function () {
  dropDownMenu1("drop");
});
function dropDownMenu1(drop) {
  // Hide/Show the dropdown menu when mouseover or mouseleaves for first candy icon
  if (drop == "drop") {
    document.querySelector(".dropdown-content1").style.display = "block";
  }
}

function hover_toffee() {
  document.querySelector(".candy_categories").style.visibility = "visible";
}

function unhover_toffee() {
  document.querySelector(".candy_categories").style.visibility = "hidden";
}

function hover_teddy() {
  document.querySelector(".international_candy").style.visibility = "visible";
}

function unhover_teddy() {
  document.querySelector(".international_candy").style.visibility = "hidden";
}

function hover_treatbox() {
  document.querySelector(".treat_box").style.visibility = "visible";
}

function unhover_treatbox() {
  document.querySelector(".treat_box").style.visibility = "hidden";
}

function hover_mixmatch() {
  document.querySelector(".mix_n_match").style.visibility = "visible";
}

function unhover_mixmatch() {
  document.querySelector(".mix_n_match").style.visibility = "hidden";
}

//Footer
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
