// Değer Ekleme   --> setItem
// Değer Silme    --> removeItem
// Değer Console  --> getItem
// Değer Clear    --> clear 

console.log(window);

let names = ["Ahmet ", "Enes "];
sessionStorage.setItem("Names ", names);

console.log(window.sessionStorage.setItem("100", "Storage"));
sessionStorage.setItem("200", "S-2");
sessionStorage.setItem("300", "3");

sessionStorage.removeItem("200");

let value = sessionStorage.getItem("100");
console.log("Text: " + value);

sessionStorage.clear();