//  let heading = document.getElementById("heading")
//  let hide = document.getElementById("btn-hide")
//  let show = document.getElementById("btn-show")

// //  function hidefunc(){
// //     heading.style.visibility="hidden"
// //  }

// //   function showfunc(){
// //     heading.style.visibility="visible"
// //  }

//  function hidefunc(){
//     heading.style.display="none"
//  }

//   function showfunc(){
//     heading.style.display="block"
//  }

const input = document.getElementById("inp");
const heading = document.getElementById("heading");

function getValue() {
  document.querySelector("#heading").innerHTML = input.value;
  input.value = "";
}

function makeBold() {
  heading.style.fontWeight = "900";
}
function makeitalic() { 
  heading.style.fontWeight = "400";
  heading.style.fontStyle = "italic";
}
function changecolor() {
  heading.style.fontWeight = "400";
  heading.style.color = "red";
}
function changefontstyle() {
  heading.style.fontWeight = "900";
  heading.style.fontFamily = "Clicker Script", cursive;
}
function increaseFontSize() {
  heading.style.fontSize = "60px";
}
function animateText() {
  heading.style.animation = "bounce 1s infinite";
}
function upercase() {
  heading.style.textTransform = "uppercase";
}
function lovercase() {
  heading.style.textTransform = "lowercase";
}
function underline() {
  heading.style.textDecoration = "underline";
}
function linethrow() {
  heading.style.textDecoration = "line-through";
}
function overline() {
  heading.style.textDecoration = "overline";
}
function rotateText() {
  document.getElementById("heading").style.transform = "rotate(360deg)";
  document.getElementById("heading").style.transition = "transform 1s";
}
// function speakText() {
//   let el = document.getElementById("heading");
//   const msg = new SpeechSynthesisUtterance(el.textContent);
//   window.speechSynthesis.speak(msg);
// }
// function randomStyle() {
//   let el = document.getElementById("heading");
//   const colors = ["red", "blue", "green", "purple", "orange", "pink"];
//   const fonts = ["Arial", "Georgia", "Courier New", "Clicker Script"];
//   el.style.color = colors[Math.floor(Math.random() * colors.length)];
//   el.style.fontSize = `${Math.floor(Math.random() * 20) + 16}px`;
//   el.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
//   el.style.textShadow = "2px 2px 4px rgba(0,0,0,0.2)";
// }
function skewText() {
  heading.style.transition = "transform 0.3s ease";
  heading.style.transform = "skewX(20deg)" ;
}
function rotate3D() {
  heading.style.transition = "transform 0.8s";
  heading.style.transform = heading.style.transform  === "rotateY(360deg)" ? "rotateY(0deg)" : "rotateY(360deg)";
  heading.style.transformStyle = "preserve-3d";
}
function flipVertical() {
  heading.style.transition = "transform 0.5s";
  heading.style.transform = heading.style.transform === "scaleY(-1)" ? "scaleY(1)" : "scaleY(-1)";
  heading.style.transformStyle = "preserve-3d";
}
function resatestyle() {
  heading.style = "null"
}
