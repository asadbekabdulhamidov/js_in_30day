// beginner forntend developer Abdulkhamidov
//veriables
const textPassword = document.querySelector(".display > p");
const passwordLegth = document.querySelector("#password-length");
const generateBtn = document.querySelector(".generate-btn");
const elements = document.querySelectorAll(".properties ul li input");
// const elements = document.querySelectorAll("input");

const check = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false,
};
//events
document.addEventListener("DOMContentLoaded", () => {
  elements.forEach((item) => {
    check[`${item.id}`] = item.checked;
  });
});

passwordLegth.addEventListener("input", (e) => {
  document.querySelector(".password >p").textContent = e.target.value;
});

document.querySelector(".display svg").addEventListener("click", () => {
  navigator.clipboard.writeText(textPassword.textContent);
});

elements.forEach((item) => {
  item.addEventListener("input", () => {
    check[item.id] = item.checked;
  });
});

generateBtn.addEventListener("click", () => {
  console.log(check);
  console.log(passwordLegth.value);
});
