//selecting elements
const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
const button = document.querySelector("button");
function addTask(){
    console.log("button is clicked");
    if(inputBox.value === ""){
        alert("You must enter a task!!");
    } else{
        //creating a new element and storing in li.
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
    }
}

button.addEventListener("click",addTask);