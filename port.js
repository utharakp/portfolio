function toggleMenu(){
let menu = document.getElementById("menu");

if(menu.style.right === "0px"){
menu.style.right = "-220px";
}else{
menu.style.right = "0px";
}
}

window.addEventListener("scroll", function(){

let sections = document.querySelectorAll("section");

sections.forEach(function(section){

let position = section.getBoundingClientRect().top;

if(position < window.innerHeight - 100){
section.classList.add("show");
}

});

});