const navbar = document.querySelector("nav")
window.addEventListener('scroll', function(){
    if(this.scrollY != 0) {
        navbar.style.animationName = "navbar-animation-forward";
    }
    else {
        navbar.style.animationName = "navbar-animation-backward";
    }
})

setInterval(() => {
    const btnNext = document.querySelector("button.carousel-control-next")
    btnNext.click();
}, 5000);
