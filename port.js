
window.addEventListener("scroll", function(){

    let header= document.querySelector("header");

    if(window.scrollY > window.innerHeight){

        header.style.opacity="1";

    }

    else{

        header.style.opacity="0";

    }

});