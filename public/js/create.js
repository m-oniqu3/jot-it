const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
const content = document.querySelector("#content");

const form = document.querySelector(".create-form");

const titleError = document.querySelector(".error.title");
const subtitleError = document.querySelector(".error.subtitle");
const categoryError = document.querySelector(".error.category");
const contentError = document.querySelector(".error.content");

const textareas = [
  { name: title, height: 32 },
  { name: subtitle, height: 28 },
  { name: content, height: 24 },
];

textareas.forEach((textarea) => {
  textarea.name.addEventListener("input", (e) => {
    textarea.name.style.height = textarea.height + "px";

    let scHeight = e.target.scrollHeight;
    textarea.name.style.height = `${scHeight}px`;
  });
});

form.addEventListener("input", () => {
  const button = document.querySelector(".submit");
  const valid = title.value && subtitle.value && content.value;

  //clear error messages
  titleError.textContent = "";
  subtitleError.textContent = "";
  categoryError.textContent = "";
  contentError.textContent = "";

  if (valid) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const title = formData.get("title");
  const subtitle = formData.get("subtitle");
  const category = formData.get("category");
  const content = formData.get("content").trim();

  let values = { title, subtitle, category, content };

  if (!category) {
    values = { title, subtitle, content };
  }

  try {
    const response = await fetch("/jots/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (!response.ok) throw new Error(result.message);

    location.assign("/jots");
  } catch (error) {
    console.log(error);

    const message = error.message;

    titleError.textContent = message.title;
    subtitleError.textContent = message.subtitle;
    categoryError.textContent = message.category;
    contentError.textContent = message.content;
  }
});
