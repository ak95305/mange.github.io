let hamburger = document.querySelector(".hamburger");
let mobileNavBar = document.querySelector(".nav-bar-mobile");
let body = document.querySelector("body");

console.log(mobileNavBar);

hamburger.addEventListener("click", hamburgerFunction);

function hamburgerFunction(){

    if(hamburger.classList.contains("hamburger-animation")){
        hamburger.classList.remove("hamburger-animation");
        mobileNavBar.classList.remove("nav-bar-animation-in");
        mobileNavBar.classList.add("nav-bar-animation-out");
        body.classList.remove("body-blur");

    }
    else{
        hamburger.classList.add("hamburger-animation");
        mobileNavBar.classList.add("nav-bar-animation-in");
        mobileNavBar.classList.remove("nav-bar-animation-out");
        body.classList.add("body-blur");
    }

    
}