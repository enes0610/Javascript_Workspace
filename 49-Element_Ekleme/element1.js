// Dinamik Todo Ekleme

const todo = document.createElement("li");
const todoLink = document.createElement("a");
const i  = document.createElement("i");

todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";

todoLink.href="#";
todoLink.className="delete-item";

i.className="fa fa-remove";

todoLink.appendChild(i);
todo.appendChild(todoLink);

todoList.appendChild(todo);
console.log(link);