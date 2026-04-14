function addTask() {

    let taskValue = document.getElementById("task").value.trim();

    if (taskValue == "") {
        alert("Enter a task");
        return;
    }

    let  li = document.createElement("li");
    li.innerHTML = taskValue;

    // Mark complete on click
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete button
    let  deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
        updateCount();
    };

    li.appendChild(deleteBtn);

    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";

    updateCount();
}

function clearAll() {
    document.getElementById("list").innerHTML = "";
    updateCount();
}

function updateCount() {
    let  total = document.getElementById("list").children.length;
    document.getElementById("count").innerHTML = total;
}
