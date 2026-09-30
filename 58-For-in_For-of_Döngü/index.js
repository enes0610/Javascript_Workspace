// Javascript ES6 For-in & For-of Döngü
console.clear();

let names = ["Ali", "Ayşe", "Mehmet", "Ahmet"];

// For in Döngüsü --> in index'ini verir.

console.log("For in");
console.log("-----");

for(let name in names){
    console.log(name);
    console.log(name, names[name]);
}

// For of Döngüsü --> of dizideki değeri verir.
console.log("-----");
console.log("For of");
console.log("-----");

for(let ad of names){
    console.log(ad, names.indexOf(ad));
}