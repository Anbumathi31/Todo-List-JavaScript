let taskInput = document.querySelector("#todo-input");
let addBtn = document.querySelector("#add-btn");
let taskList = document.querySelector("#todo-list");
let emptyMessage = document.querySelector("#empty-message");

function updateEmptyMessage() {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

function addTask() {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.classList.add("todo-item");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let taskText = document.createElement("span");
    taskText.textContent = task;

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
        }
    });

    editBtn.addEventListener("click", () => {
        let updatedTask = prompt("Edit your task:",taskText.textContent);

        if (updatedTask == null) {
            return;
        }

        updatedTask = updatedTask.trim();

        if (updatedTask == "") {
            alert("Task cannot be empty");
            return;
        }

        taskText.textContent = updatedTask;
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateEmptyMessage();
    });

    li.append(checkbox);
    li.append(taskText);
    li.append(editBtn);
    li.append(deleteBtn);

    taskList.append(li);

    taskInput.value = "";

    updateEmptyMessage();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        addTask();
    }
});

updateEmptyMessage();
