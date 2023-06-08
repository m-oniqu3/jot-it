const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
const content = document.querySelector("#content");

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
