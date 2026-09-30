/* 
    classname id tag

    getElementById: id adı ile eşleşen id'yi yazdırır.
    getElementByClassName: class adı ile eşleşen class'ı yazdırır.
    querySelector: class id etiketini seçmek için kullanılır.
    querySelectorAll
*/

console.clear();

console.log("-----");
console.log("Selector");
console.log("-----");

console.log(window);

let button = document.getElementById("todoAddButton");

let buttonList = button.classList;
console.log(buttonList);

console.log(button);
console.log("id: " + button.id);
console.log("class: " + button.className);

let classList = button.classList[1];
console.log("classList: " + classList);

let buttonText = button.textContent;
let buttonText1 = button.innerHTML;

console.log(buttonText);
console.log("innerHTML: " + buttonText1);

const todoLists = Array.from(document.getElementsByClassName("list-group-item"));
todoLists.forEach(function(todo){
    console.log(todo);
    console.log(todo.textContent);
});
console.log(todoLists);

let forms = Array.from(document.getElementsByTagName("form"));
forms.forEach(form => {
    console.log(form);
});
console.log(forms[0]);
console.log(forms[1]);

let todoclearButton = document.querySelector("#todoclearButton");
console.log(todoclearButton);

let todoLists0 = document.querySelector(".list-group");
console.log(todoLists0);

let todoLists2 = document.querySelector(".list-group-item");
console.log(todoLists2);

let todoLists3 = document.querySelectorAll(".list-group-item");
console.log(todoLists3);

let todoLists4 = document.querySelectorAll(".list-group-item")[2];
console.log(todoLists4);

let todoLists5 = document.querySelectorAll("li:nth-child(2)"); // li etiketinin içinden 2. cocuğu yazdırır.
console.log(todoLists5);

let todoLists6 = document.querySelectorAll("li:first-child"); // li etiketinin içinden 1. cocuğu yazdırır.
console.log(todoLists6);

let todoLists7 = document.querySelectorAll("li:last-child"); // li etiketinin içinden 3. cocuğu yazdırır.
console.log(todoLists7);

console.log("-----");
console.log("-----");