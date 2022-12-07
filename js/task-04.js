const decrButton = document.querySelector(`button[data-action="decrement"`);
const incrButton = document.querySelector(`button[data-action="increment"`);
const clickValue = document.querySelector("#value");
let counterValue = parseInt(clickValue.textContent);

const decrButtonAction = () => {
  counterValue -= 1;
  clickValue.innerHTML = `<span id="value">${counterValue}</span>`;
};

const incrButtonAction = () => {
  counterValue += 1;
  clickValue.innerHTML = `<span id="value">${counterValue}</span>`;
};

decrButton.addEventListener("click", decrButtonAction);
incrButton.addEventListener("click", incrButtonAction);
