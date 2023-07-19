const todoinput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-bnt");
const todolist = document.getElementById("todo-list");

//add a task
const addTask = () => {
    const taskText = todoinput.value.trim();

    if(taskText !==""){
        const taskItem = createTaskItem(taskText);
        todolist.appendChild(taskItem);
        todolist.value = "";

    }
}
// create new task item
const createTaskItem = (taskText) => {
    const taskItem = document.createElement("li");
    taskItem.className= "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("taskText");

    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;

    const deleteBnt = document.createElement("button");
    deleteBnt.textContent = "delete";
    deleteBnt.classList.add("delete-bnt");
    deleteBnt.addEventListener("click", deleteTask);
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteBnt);

    return taskItem;
}
// delete item
const deleteTask = (event) => {
    const taskItem = event.target.parentNode;
    todolist.removeChild(taskItem);

} 
//cross out tasks
const toggleTask = (event) => {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle("completed")
};
//event listerners
addTaskButton.addEventListener("click", addTask)
todoinput.addEventListener("keydown", function(){
    if(event.key === "enter"){
        addTask();
    }
});
todoinput.addEventListener("change", toggleTask);
//example of task
const initalTask = ['Pay Bills' , 'Go Home', 'Buy Food']

initalTask.forEach((task) =>{
    const taskItem = createTaskItem(task)
    todolist.appendChild(taskItem);
});









