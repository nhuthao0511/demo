let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
    menu.classList.remove('active');
}
let menu = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick=()=>{
    menu.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll = ()=>{
    menu.classList.remove('active');
    search.classList.remove('active');
    menuicon.classList.remove('bx-x');
}
// THANH MENU
let header=document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
})
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
var MainImg=document.getElementById("MainImg")
var smallimg=document.getElementsByClassName("small-img")
smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;  
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;  
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;  
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;  
}
smallimg[4].onclick = function(){
    MainImg.src = smallimg[4].src;  
}



const sr = ScrollReveal ({
        distance: '65px',
        duration: 2600,
        lelay:450,
        reset: true
});
sr.reveal('.home-text',{lelay:200, origin:'top'});
sr.reveal('.section__product',{lelay:600, origin:'left'});
sr.reveal('.heading',{lelay:600, origin:'top'});
sr.reveal('.heading_blog h1',{lelay:600, origin:'top'});
sr.reveal('.ride-container .box',{lelay:800, origin:'top'});
sr.reveal('.blog-container',{lelay:400, origin:'left'});
sr.reveal('#backtop',{lelay:400, origin:'right'});
sr.reveal('#backtop_booking',{lelay:400, origin:'right'});


// --------------------------
// for (var i = 1; i<=100; i++){
//     console.log(i);
// }


const wrapper = document.querySelector(".blog");
const carousel = document.querySelector(".blog-container");
const firstCardWidth = carousel.querySelector(".blog-card").offsetWidth;
const arrowBtns = document.querySelectorAll(".slide-wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


