const body = document.querySelector("body");
const conatiner = document.querySelector(".container");
const colorText = document.querySelector(".color-text");
const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// get color gradient

function getGradient() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.trunc(Math.random() * values.length);

    color += values[randomNumber];
  }

  return color;
}

// set color function

function setGradient() {
  let color1 = getGradient();
  let color2 = getGradient();
  let randomDeg = Math.trunc(Math.random() * 360);

  const bgColor = `linear-gradient(
      ${randomDeg}deg,
      ${color1},
      ${color2}
  
    )`;

  body.style.background = bgColor;
  colorText.textContent = bgColor;
}

conatiner.addEventListener("click", setGradient);
