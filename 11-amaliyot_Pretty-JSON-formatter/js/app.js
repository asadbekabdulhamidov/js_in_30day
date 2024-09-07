const inputJson = document.querySelector("#inputJson");
const outputJson = document.querySelector("#outputJson");
const formatted = document.querySelector("#formatted");
const minifed = document.querySelector("#minifed");
const copy = document.querySelector(".input-json > svg");

formatted.addEventListener("click", () => {
  outputJson.value = JSON.stringify(JSON.parse(inputJson.value), null, 4);
});

minifed.addEventListener("click", () => {
  outputJson.value = JSON.stringify(JSON.parse(inputJson.value));
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(outputJson.value);
});
