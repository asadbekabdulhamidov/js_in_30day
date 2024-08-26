const netStatus = document.getElementById("netResult");
const container = document.querySelector(".container");
const checkBtn = document.querySelector(".checker-btn");

function netOnAndOff() {
  const net = navigator.onLine;

  netStatus.textContent = net ? "Online" : "Offline";
  container.style.borderColor = net ? "green" : "red";
  //   if (net) {
  //     netStatus.textContent = "online";
  //     container.style.borderColor = "green";
  //   } else {
  //     netStatus.textContent = "offline";
  //     container.style.borderColor = "red";
  //   }
}

document.addEventListener("DOMContentLoaded", () => {
  netOnAndOff();
});

checkBtn.addEventListener("click", () => {
  netOnAndOff();
});
