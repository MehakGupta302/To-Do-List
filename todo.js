const inputBox = document.getElementById("input-box");
const listContainer =  document.getElementById("list-container");

inputBox.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask(); //to add list with enter
    }
});

   function addTask () {
    if(inputBox.value === '') {
      alert("You must write something!");
    }
    else{
        //to create list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);  

        //to put cross after list 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
     inputBox.value = "";  //to clear input field after writing task
     saveData() //to save the updated content
}
// 
listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")//to add task in checklist
        saveData()
    }
   else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();//to remove task
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem ("data",listContainer.innerHTML ); //to store the data that in the listcontainer so

}

function showTask(){
    listContainer.innerHTML =localStorage.getItem("data") ;//to show the saved data it willbe stored in our browser with the name of data when we will oppen website again
}

showTask(); 
  