const newTodoInput = document.getElementById("newTodo");
const addTodoButton = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

addTodoButton.addEventListener("click", function () {
    const todoText = newTodoInput.value;
    if (todoText.trim() === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <div class="task">
            <span>${todoText}</span>
        </div>
        <div class="buttons">
            <button class="delete">Delete</button>
            <button class="edit">Edit</button>
            <button class="done">Done</button>
        </div>
    `;

    li.querySelector(".delete").addEventListener("click", function () {
        todoList.removeChild(li);
    });

    li.querySelector(".edit").addEventListener("click", function () {
        const taskDiv = li.querySelector(".task");
        const taskText = taskDiv.querySelector("span");
        const updatedText = prompt("Edit task:", taskText.textContent);
        if (updatedText) {
            taskText.textContent = updatedText;
        }
    });

    li.querySelector(".done").addEventListener("click", function () {
        const taskDiv = li.querySelector(".task");
        taskDiv.classList.toggle("completed");
    });

    todoList.appendChild(li);
    newTodoInput.value = "";
});