console.clear();

console.log("-----");
console.log("Style");
console.log("-----");

console.log(window);

let todoStyle = document.querySelectorAll(".list-group-item")[0];
todoStyle.style.color = "#fff";
todoStyle.style.backgroundColor = "lightgray";
todoStyle.style.fontWeight = "bold";
todoStyle.style.paddingLeft = "100px";
console.log(todoStyle);

let todoAddButton = document.querySelector("#todoAddButton");
todoAddButton.style.color = "#fff";
todoAddButton.style.backgroundColor = "darkred";
todoAddButton.style.fontWeight = "300";
todoAddButton.style.borderRadius = "50px";
console.log(todoAddButton);

console.log("-----");
console.log("-----");