function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxesBox = document.querySelector("#boxes");

const createBoxes = (amount) => {
  amount = parseInt(input.value);
  for (let i = 1; i <= amount; i++) {
    const newBox = document.createElement("div");
    boxesBox.append(newBox);
    newBox.classList.add("newbox");
    const newBoxes = document.querySelectorAll(".newbox").length - 1;
    newBox.style.width = `${30 + newBoxes * 10}px`;
    newBox.style.height = `${30 + newBoxes * 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();
  }
};

const destroyBoxes = (amount) => {
  amount = parseInt(input.value);
  for (let i = 1; i <= amount; i++) {
    boxesBox.remove("div");
  }
  location.reload();
};

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
