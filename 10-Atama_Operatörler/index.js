/*
    Aritmatik Oparatörler

    =
    == eşittir
    === Veri tiplerini ve değerlerin eşitliğini kontrol eder. Eğer veri tipi farklı değerler aynı ise sonuç false olur.
    += 
    -=
    *=
    /=
    %=
    **=
*/

let a = 2;
let sonuç = a;
console.log(sonuç == a);

let b = 2;
let c = 3;
let sonuc = b + c;
console.log(sonuc == 4);

console.log(5 === 5);
console.log(5 === "5");

let sayi = 4;
sayi += 2;
console.log(sayi);  // 4 + 2 = 6

let sayi2 = 6;
sayi2 -= 3;
console.log(sayi2);

let sayi3 = 4;
sayi3 *= 2;
console.log(sayi3);

let sayi4 = 6;
sayi4 /= 3;
console.log(sayi4);

let sayi5 = 12;
sayi5 = sayi5%= 3 ;
console.log(sayi5);

let sayi6 = 4;
sayi6 **= 2;
console.log(sayi6); // 4 * 4 = 16