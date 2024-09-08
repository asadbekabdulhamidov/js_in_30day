const inputMessage = document.querySelector("#message");
const words = document.querySelector(".words");
const characters = document.querySelector(".characters");

inputMessage.addEventListener("input", () => {
  characters.textContent = inputMessage.value.split(" ").join("").length;

  words.textContent = inputMessage.value
    .split(" ")
    .filter((item) => item).length;
});
