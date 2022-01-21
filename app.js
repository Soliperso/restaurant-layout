const menuBar = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');
const navbarLink = document.querySelectorAll('.navbar ul li a');
const sections = document.querySelectorAll('section');

menuBar.addEventListener('click', function () {
  this.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll load', function () {
  menuBar.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
});

document.querySelectorAll('.menu .list .btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    console.log(this);
    this.classList.add('active');
    this.parentElement.querySelector('.active').classList.remove('active');
    let src = this.getAttribute('data-src');
    document.querySelector('#menu-img').setAttribute('src', src);
  });
});
