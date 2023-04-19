document.querySelector(".Banner").style.backgroundColor = "#E077AB";
document.querySelector(".Banner").style.height = "150px";

document.querySelector(".navbar").style.backgroundColor = "#E077AB";
document.querySelector(".navbar").style.textAlign = "center";
document.querySelector(".navbar").style.position = "relative";

var choice = document.querySelectorAll("#choice");
for (i = 0; i < choice.length; i++) {
  choice[i].style.color = "white";
  choice[i].style.textDecoration = "white";
  choice[i].style.display = "block";
  choice[i].style.visibility = "hidden";
}

carddetails = document.querySelectorAll(".card_details");
for (i = 0; i < carddetails.length; i++) {
  carddetails[i].style.display = "flex";
  carddetails[i].style.textAlign = "center";
  carddetails[i].style.justifyContent = "center";
  carddetails[i].style.marginLeft = "50%";
  carddetails[i].style.marginTop = "-5%";
}
var navbutton = document.querySelectorAll(".navbutton");

for (i = 0; i < navbutton.length; i++) {
  navbutton[i].style.border = "none";
  navbutton[i].style.color = "white";
  navbutton[i].style.cursor = "pointer";
  navbutton[i].style.fontFamily = "Mali, cursive";
  navbutton[i].style.fontSize = "14px";
  navbutton[i].style.marginLeft = "10px";
  navbutton[i].style.backgroundColor = "#E077AB";
  navbutton[i].style.cursor = "pointer";
}

document.querySelector("body").style.backgroundColor = "#EBD6D6";
document.querySelector("body").style.maxWidth = "100%";
document.querySelector("body").style.overflowX = "hidden";

icon = document.querySelectorAll(".Icon_circle");
for (i = 0; i < icon.length; i++) {
  icon[i].style.display = "inline-block";
  icon[i].style.height = "70px";
  icon[i].style.width = "70px";
  icon[i].style.backgroundColor = "#E6BED2";
  icon[i].style.borderRadius = "50%";
  icon[i].style.padding = "1em";
  icon[i].style.margin = "1em";
}

document.querySelector(".Page_title").style.fontSize = "100px";
document.querySelector(".Page_title").style.fontFamily = "Loly Candy";
document.querySelector(".Page_title").style.src =
  "/Shopping cart/LolyCandy.ttf";
document.querySelector(".Page_title").style.position = "absolute";
document.querySelector(".Page_title").style.right = "0";
document.querySelector(".Page_title").style.top = "140px";
document.querySelector(".Page_title").style.left = "1.5em";

document.querySelector("body").style.backgroundColor = "#EBD6D6";

document.querySelector(".heading").style.fontSize = "60px";
document.querySelector(".heading").style.fontFamily = "Reenie Beanie";
document.querySelector(".heading").style.textAlign = "center";

document.querySelector(".Button_div").style.display = "flex";
document.querySelector(".Button_div").style.justifyContent = "center";

buttons = document.querySelectorAll("button");
for (i = 0; i < buttons.length; i++) {
  buttons[i].style.paddingRight = "25px";
  buttons[i].style.paddingLeft = "25px";
  buttons[i].style.paddingTop = "10px";
  buttons[i].style.paddingBottom = "10px";
}

document.querySelector(".Yes_Button").style.marginRight = "50px";
document.querySelector(".Yes_Button").style.backgroundColor = "#28A745";
document.querySelector(".Yes_Button").style.color = "white";
document.querySelector(".Yes_Button").style.fontSize = "larger";
document.querySelector(".Yes_Button").style.border = "none";
document.querySelector(".Yes_Button").style.cursor = "pointer";

document.querySelector(".No_Button").style.backgroundColor = "#D62B2B";
document.querySelector(".No_Button").style.color = "white";
document.querySelector(".No_Button").style.fontSize = "larger";
document.querySelector(".No_Button").style.border = "none";
document.querySelector(".No_Button").style.cursor = "pointer";

payment_label_info = document.querySelectorAll("label");
for (i = 0; i < payment_label_info.length; i++) {
  payment_label_info[i].style.fontSize = "large";
  payment_label_info[i].style.margin = "45px";
}

document.querySelector(".payment").style.border = "10px solid #E6BED2";
document.querySelector(".payment").style.borderRadius = "2em";
document.querySelector(".payment").style.height = "350px";
document.querySelector(".payment").style.width = "400px";
document.querySelector(".payment").style.textAlign = "center";
document.querySelector(".payment").style.marginTop = "5%";
document.querySelector(".payment").style.display = "block";
document.querySelector(".payment").style.marginLeft = "35%";
document.querySelector(".payment").style.visibility = "hidden";

document.querySelector(".card_payment").style.textAlign = "left";
document.querySelector(".card_payment").style.paddingBottom = "30px";

document.querySelector(".Done_button").style.backgroundColor = "#E6BED2";
document.querySelector(".Done_button").style.color = "white";
document.querySelector(".Done_button").style.fontSize = "larger";
document.querySelector(".Done_button").style.border = "none";
document.querySelector(".Done_button").style.cursor = "pointer";
document.querySelector(".Done_button").style.marginLeft = "42.5%";
document.querySelector(".Done_button").style.marginTop = "10%";

document.querySelector(".Payment_success").style.display = "flex";
document.querySelector(".Payment_success").style.justifyContent = "center";

document.querySelector(".card_dets").style.marginTop = "70px";
document.querySelector(".card_dets").style.fontSize = "50px";
document.querySelector(".card_dets").style.fontFamily = "Reenie Beanie";
document.querySelector(".card_dets").style.textAlign = "center";

document.querySelector(".footer").style.textAlign = "center";
document.querySelector(".footer").style.marginTop = "70px";

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

var choice = document.querySelectorAll("#choice");
function display_candy() {
  for (i = 0; i < choice.length; i++) {
    choice[i].style.visibility = "visible";
  }
}

function confirm_payment() {
  document.querySelector(".payment").style.visibility = "visible";
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
    `cardnumber`,
    document.getElementById(`cardnumber`).value //localstorage
  );
  localStorage.setItem(
    `dateofexpiry`,
    document.getElementById(`dateofexpiry`).value //localstorage
  );
  localStorage.setItem(
    `cvv`,
    document.getElementById(`cvv`).value //localstorage
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
