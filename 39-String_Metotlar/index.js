/*
    charAt
    concat
    indexOf
    lastindexOf
    toUpperCase
    toLowerCase
    trim
    slice
    substring
    replace
    split
    valueOf
    startswith
    endsWith

    ! " " boşluk  bir karakterdir.
*/

let kurs = "Javascript Proje";
console.log(kurs);

let kurs1 = "   Javascript Proje 1";
console.log(kurs1);

let kurs2 = "Web Javascript Proje";
console.log(kurs2);

let harfIndex = kurs.charAt(9); // İndex değeri yazılır ve karakteri verir.
console.log("Harf: " + harfIndex);

console.log("-----");

let tarih = " 2024";
let concat = kurs.concat(tarih);
console.log(concat);

console.log("-----");

let index = kurs.indexOf("P");  // Karakter yazılır ve index değeri alınır.
console.log("IndexOf: " + index);

console.log("-----");

let last = kurs.lastIndexOf("v");
console.log("Last " + last);

console.log("-----");

let toupper = kurs.toUpperCase();
console.log(toupper);

console.log("-----");

let tolower = kurs.toLowerCase();
console.log(tolower);

console.log("-----");

console.log(kurs1);
console.log(kurs1.trim());

console.log("-----");

console.log(kurs2);
console.log(kurs2.slice(0 , 3));

console.log("-----");

console.log(kurs2);
console.log(kurs2.substring(0, 5));

console.log("-----");

console.log(kurs2);
console.log(kurs2.replace("Web", "Modern"));

console.log("-----");

console.log(kurs);
let dizi = kurs.split(" ");
console.log(dizi);

console.log("-----");

console.log(kurs);
console.log(kurs.startsWith("J"));

console.log(kurs2);
console.log(kurs2.startsWith("w"));

console.log("-----");

console.log(kurs);
console.log(kurs.endsWith("Proje"));

console.log(kurs);
console.log(kurs.endsWith("proje"));