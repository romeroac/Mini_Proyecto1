//Navbar
const nav = document.querySelector('nav');
window.onscroll = () => {
    if (window.pageYOffset > 0) {
        nav.classList.add("sticky")
    }
    else {
        nav.classList.remove("sticky");
    }
}
let bar = document.querySelector('.menu');
bar.onclick = () => {
    bar.classList.toggle('active');
    nav.classList.toggle("active");
}