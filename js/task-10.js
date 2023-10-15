function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberEl = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.background = getRandomHexColor();
    elements.push(div);
  }

  divBoxesEl.append(...elements);
}

createButton.addEventListener("click", () => {
  createBoxes(inputNumberEl.value);
});

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  inputNumberEl.value = "";
  divBoxesEl.innerHTML = "";
}
