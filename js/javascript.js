const navToggle = document.getElementById("navigation");
const menu = document.getElementById("menu");

menu.addEventListener('click', function () {
    navToggle.classList.toggle('active');
})