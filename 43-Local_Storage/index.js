// Değer Ekleme   --> setItem
// Değer Silme    --> removeItem
// Değer Console  --> getItem
// Değer Clear    --> clear 

console.log(window);
console.clear();

let names = ["Ahmet ", "Enes "];
sessionStorage.setItem("Names ", names);

console.log(window.localStorage.setItem("100", "Storage"));
localStorage.setItem("200", "S-2");
localStorage.setItem("300", "S-3");

let value = localStorage.getItem("100");
console.log(value);

let value1 = ["Enes", "Ahmet", "Arif", "Ayşe"];
localStorage.setItem("Local", JSON.stringify(value1));
console.log(value1);

let local = ["Enes", "Ahmet", "Arif"];
localStorage.setItem("Local", JSON.stringify(local)); // Array gibi yazdırır.

localStorage.clear();