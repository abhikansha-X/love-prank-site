let btn = document.getElementById("move");

btn.addEventListener("mouseover", function(){

let x = Math.random()*window.innerWidth;
let y = Math.random()*window.innerHeight;

btn.style.position="absolute";
btn.style.left = x + "px";
btn.style.top = y + "px";

});