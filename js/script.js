
if (document.getElementById('my-work-link')) {
    document.getElementById('my-work-link').addEventListener('click', () => {
      document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
    })
}


// Navbar color change from https://stackoverflow.com/questions/39802412/change-navbar-color-while-scrolling
var navbar = document.getElementById("navbar");
var nbtext = document.getElementById("navbar-brand-text");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
    // navbar.classList.add("is-scrolled");
    navbar.classList.add("is-black")
    navbar.classList.remove("is-primary")
    navbar.classList.remove("is-not-scrolled")

    // Navbar brand colors
    nbtext.classList.remove("has-text-black-ter")
    nbtext.classList.add("has-text-white-ter")

  } else {
    // Navbar colors
    navbar.classList.remove("is-black")
    navbar.classList.add("is-primary")
    navbar.classList.add("is-not-scrolled")

    // Navbar brand colors
    nbtext.classList.remove("has-text-black-ter")
    nbtext.classList.add("has-text-white-ter")

  }
};

// document.addEventListener('DOMContentLoaded', () => {

//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

//   // Add a click event on each of them
//   $navbarBurgers.forEach( el => {
//     el.addEventListener('click', () => {

//       // Get the target from the "data-target" attribute
//       const target = el.dataset.target;
//       const $target = document.getElementById(target);

//       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//       el.classList.toggle('is-active');
//       $target.classList.toggle('is-active');

//     });
//   });

// });