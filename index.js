/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

let optie1 = document.querySelector(".optie1");
let optie2 = document.querySelector(".optie2");
let optie3 = document.querySelector(".optie3");
let optie4 = document.querySelector(".optie4");
let optie5 = document.querySelector(".optie5");

let optie1img = document.querySelector(".optie1img");
let optie2img = document.querySelector(".optie2img");
let optie3img = document.querySelector(".optie3img");
let optie4img = document.querySelector(".optie4img");
let optie5img = document.querySelector(".optie5img");



optie1.onclick = function() {
  if (optie1.checked == true) {
    optie1img.classList.remove("invisible")
  }
  if (optie1.checked == false) {
    optie1img.classList.add("invisible")
  }
}

optie2.onclick = function() {
  if (optie2.checked == true) {
    optie2img.classList.remove("invisible")
  }
  if (optie2.checked == false) {
    optie2img.classList.add("invisible")
  }
}

optie3.onclick = function() {
  if (optie3.checked == true) {
    optie3img.classList.remove("invisible")
  }
  if (optie3.checked == false) {
    optie3img.classList.add("invisible")
  }
}

optie4.onclick = function() {
  if (optie4.checked == true) {
    optie4img.classList.remove("invisible")
  }
  if (optie4.checked == false) {
    optie4img.classList.add("invisible")
  }
}

optie5.onclick = function() {
  if (optie5.checked == true) {
    optie5img.classList.remove("invisible")
  }
  if (optie5.checked == false) {
    optie5img.classList.add("invisible")
  }
}
