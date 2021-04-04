const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

//add event listener to toggle on click adds the class and removes
btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
