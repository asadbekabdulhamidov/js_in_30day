const modalContainer = document.querySelector(".modal-container");
const showModal = document.querySelector("#show-modal");
const closeModal = document.querySelectorAll(".close-modal");

document.addEventListener("DOMContentLoaded", () => {
  modalContainer.style.left = "-100%";
});

showModal.addEventListener("click", () => {
  modalContainer.classList.remove("hidden");
  setTimeout(() => {
    modalContainer.style.left = "50%";
  }, 500);
});

closeModal.forEach((item) => {
  item.addEventListener("click", () => {
    modalContainer.style.left = "200%";
    setTimeout(() => {
      modalContainer.classList.toggle("hidden");
      modalContainer.style.left = "-100%";
    }, 500);
  });
});
