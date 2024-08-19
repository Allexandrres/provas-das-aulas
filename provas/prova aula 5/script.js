function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        let taskItem = document.createElement("li");
        taskItem.textContent = taskInput.value;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
}