// As a user, you should be able to:

//    Add a new todo (by submitting a form)

//    Mark a todo as completed (cross out the text of the todo)

//    Remove a todo

window.onload = function() {
  let toDoForm = document.querySelector("#newToDoForm");

  let toDoList = document.querySelector("#toDoList");

  toDoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let newToDo = document.createElement("li");
    newToDo.innerHTML = document.querySelector("#task").value;

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "X";

    newToDo.appendChild(removeBtn);
    toDoList.appendChild(newToDo);
    toDoForm.reset();
  });

  toDoList.addEventListener("click", function(event) {
    console.log(event.target.tagName);
    if (event.target.tagName === "LI") {
      event.target.style.textDecorationLine = "line-through";
    }

    if (event.target.tagName === "BUTTON") {
      event.target.parentNode.remove();
    }
  });
}
