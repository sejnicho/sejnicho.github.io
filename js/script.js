
if (document.getElementById('my-work-link')) {
    document.getElementById('my-work-link').addEventListener('click', () => {
      document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
    })
}


// Navbar color change from https://stackoverflow.com/questions/39802412/change-navbar-color-while-scrolling
var navbar = document.getElementById("navbar");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
};

// Navbar color change from https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
//figure out jquery next time
// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   });
// });

// const Menu = document.getElementById('Menu');


// const captureclick = () => {
//   capture.classList.toggle('is-active');
  
// };

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