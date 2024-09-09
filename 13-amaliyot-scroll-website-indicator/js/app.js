const indicator = document.querySelector(".indicator");

document.addEventListener("scroll", () => {
  const pagMaxheight = document.body.scrollHeight - window.innerHeight;
  indicator.style.width = (window.scrollY / pagMaxheight) * 103 + "%";
  console.log(window.scrollY);
});
