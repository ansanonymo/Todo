const taskList = document.getElementById("task-list");
const solveList = document.getElementById("solve-list");
const form = document.getElementById("add-form");
const input = document.getElementById("input");

const tasks = [];

function createTaskLi(text, isTask = false) {
  // <li>
  //             <p>Task</p>
  //             <div class="btn-group">
  //               <button class="delete-btn">X</button
  //               ><button class="done-btn">✓</button>
  //             </div>
  //           </li>

  const li = document.createElement("li");
  li.dataset.text = text;

  if (isTask) {
    li.dataset.isTask = true;
  }

  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  const div = document.createElement("div");
  div.className = "btn-group";
  li.appendChild(div);

  if (isTask) {
    const doneButton = document.createElement("button");
    doneButton.className = "done-btn";
    doneButton.innerText = "✓";

    doneButton.addEventListener("click", () => {
      const newLi = createTaskLi(li.dataset.text);
      taskList.removeChild(li);
      solveList.appendChild(newLi);
    });

    div.appendChild(doneButton);
  }

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", () => {
    if (li.dataset.isTask) {
      taskList.removeChild(li);
    } else {
      solveList.removeChild(li);
    }
  });
  div.appendChild(deleteButton);

  return li;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = "";

  // create li for task
  const li = createTaskLi(text, true);
  taskList.append(li);
});
