const form = document.querySelector("form.login-form");

const formChecking = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return window.alert("Please fill all the fields");
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  event.currentTarget.reset();
};

form.addEventListener("submit", formChecking);
