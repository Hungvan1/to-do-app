function addTask() {
    const inputBox = document.getElementById("input-box");
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const listContainer = document.getElementById("list-container");

    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "task-checkbox";
    checkBox.addEventListener("change", updateCounters);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function () {
        listItem.remove();
        updateCounters();
    });

    listItem.appendChild(checkBox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    listContainer.appendChild(listItem);

    inputBox.value = "";
    updateCounters();
}

function updateCounters() {
    const taskItems = document.querySelectorAll(".task-item");
    const completedTasks = document.querySelectorAll(".task-checkbox:checked");

    const completedCounter = document.getElementById("completed-counter");
    const uncompletedCounter = document.getElementById("uncompleted-counter");

    completedCounter.textContent = completedTasks.length;
    uncompletedCounter.textContent = taskItems.length - completedTasks.length;
}
