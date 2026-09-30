// Break Kullanımı

console.log("----- ***** -----");
console.log("Break Kullanımı");
console.log("----- ***** -----");

let sayac = 0;

while(sayac <= 10) {
    console.log(sayac);

    if(sayac == 5) {
        break;
    }
    sayac++;
}

console.log("----- ***** -----");
console.log("Continue Kullanımı");
console.log("----- ***** -----");

// Continue Kullanımı

let sayac1 = 0;

while(sayac1 < 12) {
    sayac1++;
    if(sayac1 == 4 || sayac1 == 8) {    //  Sayı 4 ve 8 eşit ise sayılar konsolda gözükmez ama sayaç sayıyı 1 artırır.
        continue;
    }
    console.log(sayac1);
}