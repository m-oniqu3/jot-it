console.log("hey");
const categories = document.querySelector("#Categories");

const subnav = document.querySelector(".categories");
categories.addEventListener("click", () => {
  console.log("click");
  // subnav.style.pro
  subnav.classList.toggle("categories");
});
