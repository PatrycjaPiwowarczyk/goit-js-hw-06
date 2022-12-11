const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

const updateSpan = () => {
  span.style.fontSize = `${input.value}px`;
  };

input.addEventListener("input", updateSpan);