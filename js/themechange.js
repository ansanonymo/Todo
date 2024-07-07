const body = document.querySelector("body");
const themeButton = document.getElementById("themebutton");

themeButton.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.className = "light";
  }
});
