const form = document.querySelector("#form");
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']");

const emailError = document.querySelector(".error.email");
const passwordError = document.querySelector(".error.password");

form.addEventListener("input", () => {
  const button = document.querySelector(".button.submit");
  const valid = email.value && password.value;

  //clear error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  if (valid) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const values = { email: email.value, password: password.value };

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    location.assign("/jots");
  } catch (error) {
    const message = error.message;

    emailError.textContent = message.email;
    passwordError.textContent = message.password;
  }
});
