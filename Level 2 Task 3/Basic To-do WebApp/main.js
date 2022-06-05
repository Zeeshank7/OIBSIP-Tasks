// Getting all required Elements
const userInput = document.querySelector('#newTaskInput');
const addBtn = document.querySelector('#addTaskBtn');
const todolist = document.querySelector('.List');
const deleteAllBtn = document.querySelector('#delAllBtn');
const pendingNum = document.querySelector('#pendingNum');


userInput.onkeyup = (e) => {
    let userData = userInput.value;

    if (userData.trim() !== 0 && userData !== "") { //if user value aren't only space
        addBtn.classList.add("active"); //active the add btn

        if (e.key == "Enter" && userData !== "") {
            addTask();
            userInput.value = "";
            addBtn.classList.remove("active");
            var num = document.querySelectorAll('li').length;
            pendingNum.textContent = num;
            if (num > 0) {
                deleteAllBtn.classList.add("active");
            } else {
                deleteAllBtn.classList.remove("active");
            }
        }
    } else {
        // alert("Please Add a task");
        addBtn.classList.remove("active"); // unactive add button
    }
}

addBtn.onclick = () => {
    addTask();
    var num = document.querySelectorAll('li').length;
    pendingNum.textContent = num;
    if (num > 0) {
        deleteAllBtn.classList.add("active");
    } else {
        deleteAllBtn.classList.remove("active");
    }

    // console.log(document.querySelectorAll('li').length);
}


//function for adding a task
function addTask() {
    let userData = userInput.value;

    //Creating li element
    let li = document.createElement("li");
    li.classList.add("ListEl");

    //createing input element
    let text = document.createElement("input");
    text.classList.add("text");
    text.type = "text";
    text.setAttribute("readonly", "readonly");
    text.value = userData;

    //creating edtbtn
    const edit = document.createElement("span");
    edit.classList.add("edtBtn");
    edit.setAttribute("onclick", "editElemet(this)");
    edit.innerHTML = '<i class="fas fa-pen-to-square"></i>';

    //creating delbtn
    const remove = document.createElement("span");
    remove.classList.add("delBtn");
    remove.setAttribute("onclick", "deleteElement(this)")
    remove.innerHTML = '<i class="fas fa-trash"></i>';

    //appending all item in list
    li.appendChild(text);
    li.appendChild(edit);
    li.appendChild(remove);
    todolist.appendChild(li);

    userInput.value = ""; //reset input field for new item
    addBtn.classList.remove("active");

}

//function for editing and updating list
function editElemet(e) {
    if (e.parentNode.childNodes[1].innerHTML == '<i class="fas fa-pen-to-square"></i>') {
        e.parentNode.firstChild.removeAttribute("readonly");
        e.parentNode.firstChild.focus();
        e.parentNode.childNodes[1].innerHTML = '<i class="fas fa-arrow-up-from-bracket"></i> ';
    } else {
        e.parentNode.firstChild.setAttribute("readonly", "readonly");
        e.parentNode.childNodes[1].innerHTML = '<i class="fas fa-pen-to-square"></i>';
    }
}

//function for removing list items
function deleteElement(e) {
    e.parentNode.remove();
    var num = document.querySelectorAll('li').length;
    pendingNum.textContent = num;
    if (num > 0) {
        deleteAllBtn.classList.add("active");
    } else {
        deleteAllBtn.classList.remove("active");
    }

}

//function for deleting all list items
function deleteAll() {
    todolist.innerHTML = "";
    var num = document.querySelectorAll('li').length;
    pendingNum.textContent = num;
    if (num > 0) {
        deleteAllBtn.classList.add("active");
    } else {
        deleteAllBtn.classList.remove("active");
    }
}