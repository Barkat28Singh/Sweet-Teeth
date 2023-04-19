document.querySelector(".navbar").style.backgroundColor = "#E077AB";
document.querySelector(".navbar").style.textAlign = "center";
document.querySelector(".navbar").style.position = "relative";
document.querySelector(".navbar").style.height = "35px";

var choice = document.querySelectorAll("#choice");
for (i = 0; i < choice.length; i++) {
  choice[i].style.color = "white";
  choice[i].style.textDecoration = "none";
  choice[i].style.visibility = "hidden";
  choice[i].style.display = "block";
}

var navbutton = document.querySelectorAll(".navbutton");
for (i = 0; i < navbutton.length; i++) {
  navbutton[i].style.backgroundColor = "#E077AB";
  navbutton[i].style.border = "none";
  navbutton[i].style.color = "white";
  navbutton[i].style.cursor = "pointer";
  navbutton[i].style.fontFamily = "Mali, cursive";
  navbutton[i].style.fontSize = "15px";
  navbutton[i].style.marginLeft = "40px";
}

//Style for page body

document.querySelector("body").style.backgroundColor = "#EBD6D6";
document.querySelector("body").style.maxWidth = "100%";
document.querySelector("body").style.overflowX = "hidden";
//background styling
document.querySelector("#backimage").style.backgroundImage =
  "url('/Images/candy.JPG')";
document.querySelector("#backimage").style.height = "800px";
document.querySelector("#backimage").style.filter = "blur(8px)";

//Header styling
document.querySelector("#accountHeader").style.backgroundColor = "#E077AB";
document.querySelector("#accountHeader").style.height = "265px";

document.querySelector("h1").style.fontFamily = "Loly Candy";
document.querySelector("h1").style.src = "/LolyCandy.ttf";
document.querySelector("h1").style.fontSize = "100px";
document.querySelector("h1").style.textAlign = "left";
document.querySelector("h1").style.display = "inline";
document.querySelector("h1").style.marginLeft = "10px";
document.querySelector("h1").style.marginBottom = "1300px";

document.querySelector("p").style.marginLeft = "10px";
document.querySelector("p").style.fontSize = "25px";

//Form Styling
document.querySelector(".accountForm").style.display = "flex";
document.querySelector(".accountForm").style.justifyContent = "center";
document.querySelector(".accountForm").style.alignItems = "center";

//Form Caption Styling
//document.querySelector("#signupcaption").style.fontColor="white";

//Form box styling
document.querySelector("#accountBox").style.backgroundColor = "#E077AB";
document.querySelector("#accountBox").style.marginTop = "150px";
document.querySelector("#accountBox").style.borderRadius = "1rem";
document.querySelector("#accountBox").style.padding = "2rem";
document.querySelector("#accountBox").style.position = "absolute";
document.querySelector("#accountBox").style.top = "60%";
document.querySelector("#accountBox").style.left = "50%";
document.querySelector("#accountBox").style.transform = "translate(-50%,-50%)";
document.querySelector("#accountBox").style.zIndex = "5";
document.querySelector("#accountBox").style.opacity = "0.8";

//icon styling
document.querySelector("#icondiv").style.display = "flex";
document.querySelector("#icondiv").style.flexDirection = "column";
document.querySelector("#icondiv").style.justifyContent = "center";
document.querySelector("#icondiv").style.alignItems = "center";
document.querySelector("#icondiv").style.color = "white";

icon = document.querySelectorAll(".iconbox");
for (i = 0; i < icon.length; i++) {
  icon[i].style.display = "flex";
  icon[i].style.height = "70px";
  icon[i].style.width = "70px";
  icon[i].style.backgroundColor = "#E6BED2";
  icon[i].style.borderRadius = "50%";
  icon[i].style.padding = "1em";
  icon[i].style.margin = "1em";
  icon[i].style.justifyContent = "center";
  icon[i].style.alignItems = "center";
}

document.querySelector(".fa-user-circle").style.color = "#E077AB";
document.querySelector(".fa-user-circle").style.fontSize = "5rem";
document.querySelector(".fa-user-circle").style.justifyContent = "center";
document.querySelector(".fa-user-circle").style.alignItem = "center";

//Form input styling
inputs = document.querySelectorAll("input");
for (i = 0; i < 5; i++) {
  inputs[i].style.margin = "0.5rem";
  inputs[i].style.padding = "0.5rem";
  inputs[i].style.outline = "none";
  inputs[i].style.width = "300px";
  inputs[i].style.fontSize = "10px";
  inputs[i].style.textColor = "lightgray";
  inputs[i].style.border = "none";
  inputs[i].style.borderRadius = "1rem";
}

//Button styling
document.querySelector("#centerbutton").style.display = "flex";
document.querySelector("#centerbutton").style.justifyContent = "center";

signupbutton = document.querySelectorAll(".signup_button");
for (i = 0; i < signupbutton.length; i++) {
  signupbutton[i].style.borderRadius = "1rem";
  signupbutton[i].style.border = "none";
  signupbutton[i].style.padding = "0.5rem";
  signupbutton[i].style.fontSize = "10px";
  signupbutton[i].style.backgroundColor = "#EBD6D6";
  signupbutton[i].style.marginTop = "10px";
  signupbutton[i].style.cursor = "pointer";
}

document.querySelector(".footer").style.textAlign = "center";

footericons = document.querySelectorAll("span");
for (i = 0; i < footericons.length; i++) {
  footericons[i].style.fontSize = "60px";
  footericons[i].style.margin = "50px";
  footericons[i].style.fontFamily = "Reenie Beanie";
  footericons[i].style.color = "rgb(224, 119, 171)";
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

anchor = document.querySelectorAll("i");

for (i = 0; i < anchor.length; i++) {
  anchor[i].style.color = "rgb(224, 119, 171)";
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

label = document.querySelectorAll("label");
for (i = 0; i < label.length; i++) {
  label[i].style.fontFamily = "'Cabin , sans-serif'";
  label[i].style.fontSize = "small";
  label[i].style.color = "white";
}

//functionality

function display_candy() {
  for (i = 0; i < choice.length; i++) {
    choice[i].style.visibility = "visible";
  }
}

function storage() {
  localStorage.setItem(
    `firstname`,
    document.getElementById(`firstname`).value //localstorage
  );
  localStorage.setItem(
    `lastname`,
    document.getElementById(`lastname`).value //localstorage
  );
  localStorage.setItem(
    `email`,
    document.getElementById(`email`).value //localstorage
  );
  localStorage.setItem(
    `phone`,
    document.getElementById(`phone`).value //localstorage
  );
  localStorage.setItem(
    `address`,
    document.getElementById(`address`).value //localstorage
  );
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
