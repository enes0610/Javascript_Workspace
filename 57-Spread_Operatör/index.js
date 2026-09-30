// Javascript ES6 Spread Operatör
console.clear();

let dil1 = ["Java", "C#"];
let dil2 = ["C+", "Python", ...dil1];

console.log(dil1);
console.log(dil2);

let number = [1,2,3,4,5,6,7,8,9,0];
let [a,b,c , ...kalanSayi] = number;
console.log(a,b,c,kalanSayi);

const array1 = ["Ayşe", "Ahmet", "Ali"];
let array2 = [...array1];   // array2 ve array1 birbirine eşit demektir. Array1'deki değerleri Array2'de de yazacak. 
console.log(array2);