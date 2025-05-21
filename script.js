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

        let taskBtn = document.createElement("i");
        taskBtn.className = "fa-solid fa-trash";

        taskBtn.addEventListener("click", ()=>{
           // if(confirm("sure delete this task??"))
            div.remove();
        })

        div.appendChild(text)
        div.appendChild(taskBtn)

        let main = document.getElementById("main")
        main.appendChild(div)
}
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
