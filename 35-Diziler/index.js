// Diziler Array

// Sayı = 1 2 3 4 ---> 0. index 1 sayısını verir.

let sayilar = [1,2,3,4,5,6,7,8,9,"ENES"];

console.log(sayilar);
console.log(sayilar[5]); // [5] 5. index 6 sayısını yazdırır.
console.log(sayilar[9]);
console.log(sayilar.length);

console.log(sayilar[12]);   // undefined 12. index yok.

let isimler = ["Enes", "Ahmet", "Fatma", "Mehmet"];
console.log("İsimler " + isimler);
isimler[2] = "Ayşe"; // index'i 2 olan değeri Ayşe olarak günceller.
console.log(isimler);

let karisik = ["ENES" , 10.5, true, undefined];
console.log(karisik);