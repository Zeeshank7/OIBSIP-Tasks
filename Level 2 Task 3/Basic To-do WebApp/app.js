// getting all required Element
const userInput = document.querySelector('.inputContainer input');
const addBtn = document.querySelector('.inputContainer button');
const todoList = document.querySelector('.List');
const deleteAllBtn = document.querySelector('.clearAll');



function createTodo(){
    let userData= userInput.value;
    if (userData===""){
        return;
    }

    const li= document.createElement("li");
    // li.classList.add("listEL");

    // const text=document.createElement("input");
    // text.classList.add("text");
    // text.type= "text";
    // text.value= userData;
    // text.setAttribute("readonly","readonly");

    // const edit=document.createElement("span");
    // edit.classList.add("edtBtn");
    // edit.innerHTML='<i class="fas fa-pen-to-square"></i>'

    // const remove=document.createElement("span");
    // remove.classList.add("delBtn");
    // remove.innerHTML= '<i class="fas fa-trash"></i>';

    // li.appendChild(text);
    // li.appendChild(edit);
    // li.appendChild(remove);
    
    // todoList.appendChild(li);
    // console.log(todoList);
    // userInput.value="";

    // remove.addEventListener('click',()=>{
    //     todoList.removeChild(li)
    // });

}



addBtn.onclick =()=>{
    let userData= userInput.value; //getting user input
   
    createTodo(); //calling showtask()
    addBtn.classList.remove("active");
    userInput.value="";
}

userInput.onkeypress =(event)=>{
    let userData= userInput.value; //getting user input
    
    if(event.key==="Enter"){
        createTodo();
        addBtn.classList.remove("active");
        userInput.value="";
    }
    
    if(userData.trim() !=0 ){ //if user value aren't only space
        addBtn.classList.add("active"); //active the add btn
    }else{
        addBtn.classList.remove("active"); // unactive add button
    }

}


// // function to add task to list inside ul
// function showTask(){
//     let getLocalStorage= localStorage.getItem("New Todo"); 
    // if (getLocalStorage === null){
    //     listArray = [];
    // }else{
    //     listArray = JSON.parse(getLocalStorage); 
    // }



//     let newliTag="";
//     listArray.forEach((element,index) => {
//         newliTag += `<li> ${element} <span class="span1" title="Edit"> <i class="fas fa-pen-to-square"></i> </span> <span  onclick="deleteTask(${index})"; class="span2" title="Delete" > <i class="fas fa-trash"></i></span> </li>`;
//     });
//     todoList.innerHTML= newliTag;   //adding new li tag inside ul tag
//     inputBox.value="";
// }


// //delete task function
// function deleteTask(index){
//     let getLocalStorage= localStorage.getItem("New Todo");
//     listArray = JSON.parse(getLocalStorage);
//     listArray.splice(index,1) // delete or remove perticular indexed li
    
//     // after remove li update local storage again
    
//     localStorage.setItem("New Todo", JSON.stringify(listArray));
//     showTask();

// }

// //delete all task function
// deleteAllBtn.onclick= ()=>{
//     listArray=[]; 

//     // after deleting all task again update local storage
//     localStorage.setItem("New Todo", JSON.stringify(listArray));   
//     showTask();
// }














 // let getLocalStorage= localStorage.getItem("New Todo");// getting local storage
    // if (getLocalStorage == null){
    //     todoList = [];
    // }else{
    //     listArray = JSON.parse(getLocalStorage); //transforming json string to js object
    // }
    // listArray.unshift(userData);
    // localStorage.setItem("New Todo", JSON.stringify(listArray));   //transforming js object to json string









// addBtn.addEventListener("click", createTodo);

// userInput.addEventListener("keypress", function(event){
//     if (event.key==="Enter"){
//         createTodo()
//     }
// });



    // let getLocalStorage= localStorage.getItem("New Todo"); 
    // if (getLocalStorage === null){
    //     todoList = [];
    // }else{
    //     listArray = JSON.parse(getLocalStorage); 
    // }
    // const div=document.createElement("div");


    
    // const pendingNum = document.querySelector('.pending');
    // pendingNum.textContent= todoList.length; // passing the length value in pending

    // if (todoList.length>0){  //if array length is greater than 0
    //     deleteAllBtn.classList.add("active"); // active the clear all btn
    // }else{
    //     deleteAllBtn.classList.remove("active"); // else unacttive the clear btn
    // }






   // edit.addEventListener('click',()=>{
    //     if (edit.innerText=="edtBtn"){
    //         text.removeAttribute("readonly");
    //         text.focus();
    //         edit.innerHTML='<i class="fas fa-check"></i>';
    //     }else{
    //         text.setAttribute("readonly","readonly");
    //         edit.innerHTML='<i class="fas fa-pen-to-square"></i>'
    //     }
    // });