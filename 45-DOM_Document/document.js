/* 
    .getAttribute("id") id değerini yazdırır.
    .getAttribute("class") class değerini yazdırır.
*/

console.clear();

console.log("-----");
console.log("Document");
console.log("-----");

console.log(window);

let values;

console.log(document.location);
console.log(document.location.href);
console.log(document.location.pathname);
console.log(document.location.host);
console.log(document.location.hostname);
console.log(document.location.port);

value = document.characterSet;
value = document.title;
value = document.links;
value = document.links.item(3);
console.log("id name: " + (value = document.links.item(3).getAttribute("id")));
console.log("class name: " + (value = document.links.item(3).getAttribute("class")));
value = document.links.item(3).classList;

console.log("| --- |");

value = document.forms;
value = document.forms.item(0).children;

console.log(value);

console.log("-----");
console.log("-----");