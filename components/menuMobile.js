const menu = document.querySelector(".mobile");
const cerrar = document.querySelector(".cerrar");
const links = document.querySelector(".nav-left");

menu.addEventListener("click", () => {
  menu.classList.remove("mostrar");
  links.classList.add("mostrar");
  cerrar.classList.add("mostrar");
});

cerrar.addEventListener("click", () => {
  menu.classList.add("mostrar");
  links.classList.remove("mostrar");
  cerrar.classList.remove("mostrar");
});
