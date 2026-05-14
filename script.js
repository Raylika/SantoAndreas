//Carousel
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let intervalId;

document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentSlide);
    intervalId = setInterval(nextSlide, 5000);
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            clearInterval(intervalId);
            showSlide(index);
            intervalId = setInterval(nextSlide, 5000);
        });
    });
});

function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    currentSlide = index;

    slides.forEach(slide => slide.classList.remove("displaySlide"));
    slides[currentSlide].classList.add("displaySlide");

    // Re-trigger slide content animation
    const content = slides[currentSlide].querySelector(".slide-content");
    content.style.animation = "none";
    content.offsetHeight; // force reflow
    content.style.animation = "";

    dots.forEach((dot, i) => {
        dot.classList.toggle("dotActive", i === currentSlide);
    });
}

function prevSlide() {
    clearInterval(intervalId);
    showSlide(currentSlide - 1);
    intervalId = setInterval(nextSlide, 5000);
}

function nextSlide() {
    clearInterval(intervalId);
    showSlide(currentSlide + 1);
    intervalId = setInterval(nextSlide, 5000);
}

//Teacher's Gallery
const gallerySlide = document.querySelectorAll(".gallery-slide");
let galleryIndex = 0;
let galleryIntervalID = 0;

//NavBar
const navbar = document.querySelector(".nav-bar");
const carousel = document.querySelector(".slides");

navbar.classList.remove("nav-hidden"); // remove the initial hide

window.addEventListener("scroll", () => {
    const carouselBottom = carousel.getBoundingClientRect().bottom;

    if (carouselBottom <= 0) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
});