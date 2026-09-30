 let sayac = 1;

 while(sayac <= 10) {
    console.log("Sayı: " + sayac);
    sayac++;
}

console.log("----- ---------- -----");
console.log("Çift Sayı Örneği");
console.log("----- ---------- -----");

// ! Çift Sayı Örneği

let sayac2 = 0;

while(sayac2 <= 50) {
    
    if(sayac2 % 2 == 0) {
        console.log(sayac2);
    }
    sayac2++;

}

console.log("----- ---------- -----");
console.log("Tek Sayı Örneği");
console.log("----- ---------- -----");

// ! Tek Sayı Örneği

let sayi = 1;

while (sayi <= 50) {
    
    if (sayi % 2 !== 0) {
        console.log(sayi);
    }
    sayi++;

}