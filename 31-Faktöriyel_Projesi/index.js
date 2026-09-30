// Faktöriyel Projesi

let sayi = Number(prompt("Sayı Giriniz:"));

let carpim = 1;

for(let i = 1; i <= sayi; i++) {
    carpim = carpim * i;
}
alert("Sonuç: " + carpim);