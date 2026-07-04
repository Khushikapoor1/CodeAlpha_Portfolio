const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.querySelector(".more-text");

readMoreBtn.addEventListener("click", function(e) {
    e.preventDefault();

    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    } else {
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Read Less";
    }
});