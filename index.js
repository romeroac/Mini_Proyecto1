//Open new tab Resume
const openInNewTab = (url) => {
    window.open(url, "_blank");
  }
  
  const btn = document.getElementById("open-link-button");
  btn.addEventListener("click", () => {
    openInNewTab("https://drive.google.com/file/d/1NyRSaYFd95ztnjEr5QCN3Qy-6Tts_oy_/view?usp=sharing");
  });

//Navbar
const nav = document.querySelector('nav');
window.onscroll = () => {
    if (window.pageYOffset > 0) {
        nav.classList.add("sticky")
    }
}
let bar = document.querySelector('.menu');
bar.onclick = () => {
    bar.classList.toggle('active');
    nav.classList.toggle("active");
}
  
//Carousel
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}