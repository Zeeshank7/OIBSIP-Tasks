// Getting all required Elements
const userInput = document.querySelector('#newTaskInput');
const addBtn = document.querySelector('#addTaskBtn');
const todolist = document.querySelector('.List');
const deleteAllBtn = document.querySelector('#delAllBtn');
const pendingNum = document.querySelector('.pending');






userInput.onkeyup=(e)=>{
    let userData= userInput.value;
    var liElements=document.getElementsByTagName("li");
    var noElements=liElements.length;

    if(userData.trim() !==0 && userData !==""){ //if user value aren't only space
        addBtn.classList.add("active"); //active the add btn
        
        if(e.key =="Enter" && userData !==""){
            addTask();
            userInput.value="";
            addBtn.classList.remove("active");
            
            if(noElements>0){
                deleteAllBtn.classList.add("active");
            }else{

                // deleteAllBtn.classList.remove("active");
            }
            deleteAllBtn.classList.remove("active");
        }
    }else{
        // alert("Please Add a task");
        addBtn.classList.remove("active"); // unactive add button
    }
}

addBtn.onclick=()=>{
    addTask();
    // console.log(document.querySelectorAll('li').length);        
}


//function for adding a task
function addTask(){
    let userData= userInput.value;

    

    //Creating li element
    let li=document.createElement("li");
    li.classList.add("ListEl");

    
        
    //createing input element
    let text=document.createElement("input");
    text.classList.add("text");
    text.type="text";
    text.setAttribute("readonly","readonly");
    text.value= userData;

    //creating edtbtn
    const edit=document.createElement("span");
    edit.classList.add("edtBtn");
    edit.setAttribute("onclick","editElemet(this)");
    edit.innerHTML='<i class="fas fa-pen-to-square"></i>';

    //creating delbtn
    const remove=document.createElement("span");
    remove.classList.add("delBtn");
    remove.setAttribute("onclick","deleteElement(this)")
    remove.innerHTML= '<i class="fas fa-trash"></i>';

    //appending all item in list
    li.appendChild(text);
    li.appendChild(edit);
    li.appendChild(remove);
    todolist.appendChild(li);
    
    // var n=li.childNodes;
    // console.log(n);
    // var number=n.length;
    
    // pendingNum.textContent= li.length;
    // var num = $(".List").find("li").length;
    // const num=todolist.children.tags("li");
    // console.log(num.length);
    
    // var item= document.querySelectorAll("#list li");
    // if(item.length>0){
    //     deleteAllBtn.classList.add("active");
    //     console.log("its workinng");
    // }else{
    //     deleteAllBtn.classList.remove("active");
    // }
    
    userInput.value=""; //reset input field for new item
    addBtn.classList.remove("active");


}

//function for editing and updating list
function editElemet(e){
    if(e.parentNode.childNodes[1].innerHTML =='<i class="fas fa-pen-to-square"></i>'){
        e.parentNode.firstChild.removeAttribute("readonly");
        e.parentNode.firstChild.focus();
        e.parentNode.childNodes[1].innerHTML='<i class="fas fa-arrow-up-from-bracket"></i> ';
    }else{
        e.parentNode.firstChild.setAttribute("readonly","readonly");
        e.parentNode.childNodes[1].innerHTML='<i class="fas fa-pen-to-square"></i>';
    }
}

//function for removing list items
function deleteElement(e){

    

    // deleteAllBtn.classList.add("active");
    // deleteAllBtn.classList.remove("active");
    e.parentNode.remove();
}

//function for deleting all list items
function deleteAll(){
    todolist.innerHTML="";
}   