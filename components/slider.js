const arrowRight = document.querySelector("#right");
const arrowLeft = document.querySelector("#left");
const slider = document.querySelector(".slider--inner");
const sliderImg = slider.querySelectorAll("img");
let porcentaje;
let index = 1;

arrowRight.addEventListener("click", () => {
  porcentaje = index * -100;
  slider.style.transform = "translateX(" + porcentaje + "%)";
  index++;
  if (index > sliderImg.length - 1) {
    index = 0;
  }
});

arrowLeft.addEventListener("click", () => {
  porcentaje = index * -100;
  slider.style.transform = "translateX(" + porcentaje + "%)";
  index++;
  if (index > sliderImg.length - 1) {
    index = 0;
  }
});
