const todoButton = document.getElementById("todo-button");
const doneButton = document.getElementById("done-button");
const solveDiv = document.getElementById("solve-div");
const taskDiv = document.getElementById("task-div");

doneButton.classList.remove("active");
todoButton.classList.add("active");

solveDiv.style.display = "none";
taskDiv.style.display = "flex";

todoButton.addEventListener("click", () => {
  // switch the button
  doneButton.classList.remove("active");
  todoButton.classList.add("active");

  solveDiv.style.display = "none";
  taskDiv.style.display = "flex";
});

doneButton.addEventListener("click", () => {
  todoButton.classList.remove("active");
  doneButton.classList.add("active");
  taskDiv.style.display = "none";
  solveDiv.style.display = "flex";
});
