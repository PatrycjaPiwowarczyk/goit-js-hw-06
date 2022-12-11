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
    let sizer = 20 + i * 10;
    newBox.style.width = `${sizer}px`;
    newBox.style.height = `${sizer}px`;
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
