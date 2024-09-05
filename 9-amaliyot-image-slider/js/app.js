const displayImage = document.querySelector(".display > img");
const images = document.querySelectorAll(".img-slider > .img-item");
const prevImage = document.querySelector(".prev");
const nextImage = document.querySelector(".next");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    displayImage.src = e.target.src;
    3;
  });
});

nextImage.addEventListener("click", () => {
  let view = false;

  images.forEach((image, key) => {
    if (image.src == displayImage.src && !view) {
      if (images.length - 1 !== key) displayImage.src = images[key + 1].src;
      else displayImage.src = images[0].src;
      view = true;
    }
  });
});

prevImage.addEventListener("click", () => {
  let view = false;

  images.forEach((image, key) => {
    if (image.src == displayImage.src && !view) {
      if (0 !== key) {
        displayImage.src = images[key - 1].src;
      } else {
        displayImage.src = images[images.length - 1].src;
      }
      view = true;
    }
  });
});
