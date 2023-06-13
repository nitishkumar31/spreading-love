const yesBtn = document.getElementById("yes-btn");
const noBtn = document.querySelector("#no-btn");
const container = document.querySelector("#container");
const container2 = document.querySelector("#container2");
const okBtn = document.getElementById("ok-btn");

yesBtn.addEventListener("click", () => {
  container.style.display = "none";
  container2.style.display = "flex";
});

okBtn.addEventListener("click", () => {
  container2.style.display = "none";
  container.style.display = "flex";
});

const containerRect = container.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener("mousemove", () => {
  noBtn.style.left =
    Math.floor(
      Math.random() * (containerRect.width - noBtnRect.width)
    ).toString() + "px";
  noBtn.style.top =
    Math.floor(
      Math.random() * (containerRect.height - noBtnRect.height)
    ).toString() + "px";
});
