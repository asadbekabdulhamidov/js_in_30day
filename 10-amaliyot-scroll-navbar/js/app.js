const header = document.querySelector("header");
const links = document.querySelectorAll("header nav ul li a");
console.log(links);

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > window.innerHeight) {
    header.style.height = "80px";
    header.style.backgroundColor = "#242424";
    links.forEach((link) => {
      link.style.color = "#fff";
    });
  } else {
    header.style.height = "120px";
    header.style.backgroundColor = "#fff";
    links.forEach((link) => {
      link.style.color = "#242424";
    });
  }
});
