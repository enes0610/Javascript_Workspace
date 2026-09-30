/*  Diziler Metot
    
    push: Dizinin sonuna eleman ekler. Dizinin uzunluğunu döner.
    unshift: Dizinin baına eleman ekler. Eleman sayısını geri döner.
    
    pop: Dizinin sonundan eleman siler. Eleman sayısını döner.
    shift: Dizinin başından eleman siler. Eleman sayısını döner.

    splice: (index, index): Eleman eklemek ve silmek için kullanılır.

    toString: Diziyi string'e çevirir.
    join: Dizi string'e çevirir.

    concat: Dizileri birleştirmek için kullanılır.
    slice: Diziyi istenilen yerden böler. Yeni dizi oluşturur.
    
    lenght: Dizinin uzunluğunu verir.
    reverse: Dizi elemanlarını ters çevirir.

    split:  .
    indexOf: Elemanın index numarasını verir.
    includes: Belirtilen değerlerin eşleşip eşleşmediğini kontrol eder.
*/

let arabalar = ["Bmw ", "Mercedes "];
console.log("Diziler " + arabalar);

console.log("--- ---");

arabalar.push("Alfa Romeo");
console.log(arabalar);

console.log("--- ---");

arabalar.unshift("Audi");
console.log(arabalar);

console.log("--- ---");

let esya = ["Arçelik ", "Altus ", "Beko "];
console.log("Diziler " + esya);

console.log("--- ---");

let silinen = esya.pop();
console.log(esya);
console.log("Silinen: " + silinen);

console.log("--- ---");

let silinen2 = esya.shift();
console.log(esya);
console.log("Silinen2: " + silinen2);

console.log("--- ---");

console.log(arabalar);
arabalar.splice(4, 0, " Fiat");  // arabalar.splice(4) eklenek index. -- arabalar.splice(0, 0) 2. 0 silinecek index.
console.log(arabalar);

console.log("--- ---");

console.log(arabalar);
arabalar.splice(0, 1,);  // arabalar.splice(0, 1) 2. 0 silinecek index.
console.log(arabalar);

console.log("--- ---");

console.log(typeof arabalar);
let stringArabalar = arabalar.toString();
console.log(typeof stringArabalar);
console.log(stringArabalar);

console.log("--- ---");

let stringArabalar2 = arabalar.join(" || ");
console.log(stringArabalar2);

console.log("--- ---");

let birlesmisDizi = arabalar.concat(esya);
console.log(birlesmisDizi);

console.log("--- ---");

console.log(arabalar);
let ayrilmisDizi = arabalar.slice(2);   // arabalar.slice(2); Parantez içine yazulan index değeridir. 
console.log(ayrilmisDizi);

console.log("--- ---");

console.log("Dizi Uzunluk: " + birlesmisDizi.length);

console.log("--- ---");

console.log(birlesmisDizi);
let tersDizi = birlesmisDizi.reverse();
console.log(tersDizi);

console.log("--- ---");

let isim = "Ali, Ayşe, Mehmet";
let isimlerDizi = isim.split(" \\ ");
console.log(typeof isimlerDizi);

console.log("--- ---");

let meyve = ["Elma", "Çilek"];
let meyveİndex = meyve.indexOf("Elma"); //  Eşleşme doğru ise sonuç 0 olur.
let meyveİndex1 = meyve.indexOf("Muz"); //  Eşleşme yanlış ise sonuç -1 olur.
console.log(meyve + ": " +  meyveİndex);
console.log(meyve + ": " +  meyveİndex1);

console.log("--- ---");

let sonuc1 = arabalar.includes("Alfa Romeo");
console.log(sonuc1);

let sonuc2 = arabalar.includes("Aston Martin");
console.log(sonuc2);