
if (document.getElementById('my-work-link')) {
    document.getElementById('my-work-link').addEventListener('click', () => {
      document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
    })
}


// Navbar color change from https://stackoverflow.com/questions/39802412/change-navbar-color-while-scrolling
var navbar = document.getElementById("navbar");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 120 || document.documentElement.scrollTop >= 120) {
    // navbar.classList.add("is-scrolled");
    navbar.classList.add("is-black")

  } else {
    // navbar.classList.remove("scrolled");
    navbar.classList.remove("is-black")
    

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