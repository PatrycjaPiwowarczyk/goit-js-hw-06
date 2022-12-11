const input = document.querySelector("input");
const nameOutput = document.querySelector("span");

const updateInput = (name) => {
  if (input.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = name.target.value;
  }
};

input.addEventListener("input", updateInput);
