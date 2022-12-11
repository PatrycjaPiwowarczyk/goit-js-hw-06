const form = document.querySelector("form.login-form");

const formChecking = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return window.alert("Please fill all the fields");
  }
  console.log(`{${email.name}: ${email.value}, ${password.name}: ${password.value}}`);
  event.currentTarget.reset();
};

form.addEventListener("submit", formChecking);
