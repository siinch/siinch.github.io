// Navigation bar Javascript
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

// Accordion Javascript
var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}




let mainName = "ALTPAASPIL";
let firstlink = document
.getElementsByTagName("a")[0];
firstlink.innerHTML = mainName;

let subject1 = "POTENTIALE";
let secondlink = document
.getElementsByTagName("a")[1];
secondlink.innerHTML = subject1;

let subject2 = "FRIDOM";
let thirdlink = document
.getElementsByTagName("a")[2];
thirdlink.innerHTML = subject2;

let title = document
.getElementsByTagName("title")[0];
title.innerHTML = mainName;
