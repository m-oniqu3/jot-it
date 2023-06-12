const form = document.querySelector("#form");
const userName = document.querySelector("input[name='name']");
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']");

const userNameError = document.querySelector(".error.name");
const emailError = document.querySelector(".error.email");
const passwordError = document.querySelector(".error.password");

form.addEventListener("input", () => {
  const button = document.querySelector(".button.submit");
  const valid = userName.value && email.value && password.value;

  //clear error messages
  userNameError.textContent = "";
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

  const data = new FormData(form);
  const values = { name: "", email: "", password: "" };
  for (const [name, value] of data) {
    values[name] = value;
  }

  userNameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  try {
    const response = await fetch("/signup", {
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

    userNameError.textContent = message.name;
    emailError.textContent = message.email;
    passwordError.textContent = message.password;
  }
});
