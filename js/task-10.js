function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberEl = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

divBoxesEl.style.display = "flex";
divBoxesEl.style.flexWrap = "wrap";
divBoxesEl.style.alignItems = "center";
divBoxesEl.style.marginTop = "30px";

function createBoxes(amount) {
  const elements = [];
  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    sizeDefault += 10;
    div.style.width = `${sizeDefault}px`;
    div.style.height = `${sizeDefault}px`;
    div.style.background = getRandomHexColor();
    elements.push(div);
  }

  divBoxesEl.append(...elements);
}

createButton.addEventListener("click", () => {
  createBoxes(inputNumberEl.value);
});

function destroyBoxes() {
  inputNumberEl.value = "";
  divBoxesEl.innerHTML = "";
}

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
