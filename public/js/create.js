const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
const content = document.querySelector("#content");

const form = document.querySelector(".create-form");

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
  const content = formData.get("content");

  let values = { title, subtitle, category, content };

  if (!category) {
    values = { title, subtitle, content };
  }

  try {
    const response = await fetch("/jots-create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
});
