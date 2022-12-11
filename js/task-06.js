const input = document.querySelector("#validation-input");
const properLength = input.getAttribute("data-length");

const updateBorders = () => {
  if (input.value.trim().length === parseInt(properLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", updateBorders);
