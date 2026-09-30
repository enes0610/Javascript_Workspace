let sayac = 1;

do{
    console.log(sayac);
    sayac++;
} while(sayac < 8);

console.log("----- ---------- -----");
console.log("Çift Sayı Örneği");
console.log("----- ---------- -----");

// ! Tek Sayı Toplama Örneği    Sayılar: 1 + 3 + 5 + 7 + 9 = 25

let sayac1 = 1;
let toplam = 0;

do{
    if(sayac1 % 2 == 1) {
        toplam += sayac1;
    }
    sayac1++;
} while(sayac1 <= 10);
console.log("Toplam: " + toplam);

console.log("----- ---------- -----");
console.log("Tek Sayı Örneği");
console.log("----- ---------- -----");

// ! Çift Sayı Örneği   Sayılar: 2 + 4 + 6 + 8 + 10 = 30
 
let sayac2 = 2;
let toplam1 = 0;

do{
    if(sayac2 % 2 !== 1) {
        toplam1 += sayac2;
    }
    sayac2++;
} while(sayac2 <= 10);
console.log("Toplam: " + toplam1);