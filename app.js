let input = document.querySelector("#input-box");
let list = document.querySelector("#list-container");
let btn = document.querySelector(".btn");


function addtask() {
    if (!(input.value === "")) {
        let task = document.createElement("li");
        task.innerText = input.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        task.appendChild(span);
        
        list.append(task);
        input.value = '';
        savedata();
    }
    else {
        alert("please enter the task")
    }
}
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addtask();
    }
});


btn.addEventListener("click", function (event) {
    addtask();
});

list.addEventListener("click", function (event) {
    if (event.target.tagName == "LI") {
       event.target.classList.toggle("checked");
        savedata();
        

    }
    else if (event.target.tagName == "SPAN") {
        event.target.parentElement.remove();
       savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data" , list.innerHTML);
}

function reload(){
    list.innerHTML = localStorage.getItem("data");
}

reload();