const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.value = 16;

const updateSpan = () => {
  span.style.fontSize = `${input.value}px`;
};

input.addEventListener("input", updateSpan);
