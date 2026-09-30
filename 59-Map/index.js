// Javascript ES6 Map
console.clear();

let map = new Map();

// set

let value;
map.set("01", "Adana")
map.set("06", "Ankara")
map.set("34", "İstanbul")
map.set("35", "İzmir")

// String anahtarla get() fonksiyonu çağrılmalı

console.log(map.get("01")); // Adana
console.log(map.get("06")); // Ankara
console.log(map.get("34")); // İstanbul
console.log(map.get("35")); // İzmir

console.log("*---*");
let dDeger = map.get("35");
console.log(dDeger);

console.log("*---*");
console.log("Size");
console.log("*---*");

value = map.size;
console.log("index " + value);

console.log("*---*");
console.log("Delete");
console.log("*---*");

value = map.delete("01");
console.log("Silindi " + value);
console.log(map);

console.log("*---*");
console.log("Has");
console.log("*---*");

console.log(map.has("06"));
console.log(map.has("99"));

console.log("*---*");
console.log("For-of map");
console.log("*---*");

for(let  [key, value] of map){
    console.log(key, value);
}

console.log("*---*");
console.log("Map to Array");
console.log("*---*");

let array = Array.from(map);
console.log(array);

console.log("*---*");
console.log("Array to Map");
console.log("*---*");

let array2 = [
    ["06", "ANKARA"],
    ["35", "İZMİR"],
    ["42", "KONYA"]
]

let myMap = new Map(array2);

let myArray = Array.from(myMap);
console.log(myArray);