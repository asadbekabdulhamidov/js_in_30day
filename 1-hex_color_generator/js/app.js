const hex = document.getElementById("hex");
const generatedBtn = document.querySelector(".generated-button");
console.log(generatedBtn);

const hexCode = "0123456789ABCDEF";

generatedBtn.addEventListener("click", function () {
  const color = generatedHexColor();
  hex.textContent = color;
  document.body.style.backgroundColor = color;
});

function generatedHexColor() {
  let result = "#";
  for (let i = 0; i < 6; i++) {
    result += hexCode.charAt(Math.floor(Math.random() * hexCode.length));
  }
  return result;
}
