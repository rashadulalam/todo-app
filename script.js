const addTask = document.getElementById("add_task");
const task = document.getElementById("taskName");
// const taskAlert = document.getElementById("alert");

const taskList =  document.getElementById("all-task");


const singleTask = document.getElementById("single_task");


// main programme
addTask.addEventListener("submit", (ev) => {
    
    ev.preventDefault();
    
    const taskValue = task.value;

    if(taskValue) {
        
        // create single task
        const singleTaskDiv = document.createElement("div");
        singleTaskDiv.classList.add("col-lg-8", "offset-lg-2", "d-flex", "bg-secondary", "p-2", "my-2");
        singleTaskDiv.setAttribute("id", "single_task");

        // create input
        const createInput = document.createElement("input");
        createInput.classList.add("ps-4", "bg-transparent", "text-white", "border-0", "flex-grow-1");
        createInput.type = "text"
        createInput.value = taskValue;
        createInput.readOnly = "readonly";

        // clear the input field
        task.value = "";

        // edit btn
        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "text-white", "bg-warning", "rounded-0", "rounded-start");
        editBtn.innerText = "Edit";

        // complete btn
        const completeBtn = document.createElement("button");
        completeBtn.classList.add("btn", "text-white", "bg-info", "rounded-0");
        completeBtn.innerText = "Complete";
        
        // delete btn
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "text-white", "bg-danger", "rounded-0", "rounded-end");
        deleteBtn.innerText = "Delete";

        
        // complete the task
        singleTaskDiv.append(createInput, editBtn, completeBtn, deleteBtn);

        taskList.appendChild(singleTaskDiv);
        
        // edit button action
        editBtn.addEventListener("click", (e) => {

            if(editBtn.innerText == "Edit") {
                editBtn.innerText = "Save";
                createInput.removeAttribute("readonly");
                createInput.focus();
            } else {
                editBtn.innerText = "Edit";
                createInput.setAttribute("readonly", "readonly");
            }
           
        });

        // completed button action
        completeBtn.addEventListener("click", (e) => {
            completeBtn.innerText ="Completed";
            singleTaskDiv.classList.add("task-completed");
        });

        // delete task
        deleteBtn.addEventListener("click", (e) => {
            
            taskList.removeChild(singleTaskDiv)
        });


    }
})