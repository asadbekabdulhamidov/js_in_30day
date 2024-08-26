const rgb = document.getElementById("rgb");
const generatedBtn = document.querySelector(".generated-button");
const body = document.querySelector("body");
console.log(body);

generatedBtn.addEventListener("click", () => {
  rgb.textContent = generateRGBColor();
  body.style.background = generateRGBColor();
});

const generateRGBColor = () => {
  const RED = Math.floor(Math.random() * 255);
  const GREEN = Math.floor(Math.random() * 255);
  const BLUE = Math.floor(Math.random() * 255);

  return `rgb(${RED},${GREEN},${BLUE})`;
};
