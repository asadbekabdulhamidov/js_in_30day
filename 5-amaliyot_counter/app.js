const number = document.querySelector(".number");

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
let count = 0;

increment.addEventListener("click", () => countFunc(++count));
decrement.addEventListener("click", () => countFunc(--count));
reset.addEventListener("click", () => countFunc((count = 0)));

const countFunc = (value) => {
  number.textContent = value;

  if (count > 0) number.style.color = "#2dc653";
  else if (count < 0) number.style.color = "#ff0000";
  else number.style.color = "#183153";
};
