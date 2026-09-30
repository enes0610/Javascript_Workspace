// Foreach Döngüsü

// Foreach Dizilerde kullanılır.

let isimler = ["Enes", "Ahmet", "Emir", "Ayşe"];

isimler.forEach(function(isim){
    console.log(isim);
});

console.log("--- *** ---");

let isim = ["Enes", "Ahmet", "Emir", "Ayşe"];
let index = 0;

while(index < isim.length) {
    console.log(isim [index]);
    index++;
}