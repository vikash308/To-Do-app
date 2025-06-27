let btn = document.getElementById("btn");

window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTask(task);
    });
};



btn.addEventListener("click", list)

function list() {
    let st = document.querySelector("#input").value;
    if (st.length == 0) {
        alert("please enter tasks");
    }
    else {
        addTask(st);
        saveTask(st);
        document.getElementById("input").value = "";
    }

}

function addTask(st) {
    let div = document.createElement("div");
    div.classList.add("data");

    let text = document.createElement("span");
    text.textContent = st;

    let div2 = document.createElement("div")


    let taskBtn = document.createElement("i");
    taskBtn.className = "fa-solid fa-trash";

    let editbtn = document.createElement("i");
    editbtn.className = "fa fa-edit";

    taskBtn.addEventListener("click", () => {
        //if(confirm("sure delete this task??"))
        removeTaskFromStorage(text.textContent);
        div.remove();

    })

    editbtn.onclick = () => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = text.textContent;
        input.classList.add("edit-input");
        input.style.marginRight = "10px";
        input.style.padding = " 5px";
        input.style.fontSize = " 1.001rem";
        input.style.border ="none"

        const saveBtn = document.createElement("i");
        saveBtn.classList = "fas fa-save"
        saveBtn.style.marginRight = "15px";

        saveBtn.onclick = () => {
            const updatedText = input.value.trim();
            if (updatedText) {
                updateTaskInStorage(text.textContent, updatedText);
                text.textContent = updatedText;
                div.replaceChild(text, input);
                div2.replaceChild(editbtn, saveBtn);
            }
        };

        div.replaceChild(input, text);
        div2.replaceChild(saveBtn, editbtn);
        input.focus();
    };

    div2.appendChild(editbtn)
    div2.appendChild(taskBtn)
    div.appendChild(text)
    div.appendChild(div2)

    let main = document.getElementById("main")
    main.appendChild(div)
}
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function removeTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function updateTaskInStorage(oldTask, newTask) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.indexOf(oldTask);
    if (index !== -1) {
        tasks[index] = newTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}
