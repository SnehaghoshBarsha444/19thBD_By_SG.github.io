/*
window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
});

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  navToggle.classList.toggle('active');
});
*/

// Add this to your app.js file

const header = document.querySelector('.main-header');
const nav = document.querySelector('.nav');

header.addEventListener('mouseenter', () => {
    console.log('Mouse entered header');
    nav.classList.add('active'); // Show navbar
});

header.addEventListener('mouseleave', () => {
    console.log('Mouse left header');
    nav.classList.remove('active'); // Hide navbar
});

// Existing code remains unchanged
window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`); // Update method
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
});

const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    navToggle.classList.toggle('active');
});