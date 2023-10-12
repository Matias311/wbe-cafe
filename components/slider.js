arrowIcons = document.querySelectorAll(".slider-container i");
const carousel = document.querySelector(".slider");
fristImg = carousel.querySelectorAll("img")[0];

let firstImgWidth = 405 + 16;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});
