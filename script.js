const taskInput = document.querySelector("#task-input")
const addtaskBtn = document.querySelector("#add-task-btn")
const taskList = document.querySelector("#task-list")



 
function addTask(){
    const li = document.createElement("li");
    const delBtn = document.createElement("button")
    li.textContent = taskInput.value;
    delBtn.textContent = "delete";
    taskList.appendChild(li);
    li.appendChild(delBtn)
    taskInput.value = "";
    delBtn.addEventListener("click", function(){
        li.remove();
    })
    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    })
}
addtaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});