// Beden Kitle Projesi

let kilo = Number(prompt("Kilonuzu Giriniz: ")); 
console.log("Kilo" + kilo);

let boy = Number(prompt("Boyunuzu Giriniz: "));
console.log("Boy" + boy);

let sonuc = kilo / (boy * 2);

if(sonuc < 18.5) {
    console.log("Aşırı Zayıf " + sonuc);
} else if(sonuc >= 18.5 && sonuc <= 24.9) {
    console.log("Çok Zayıf " + sonuc);
} else if(sonuc >= 25.0 && sonuc <= 29.9) {
    console.log("Zayıf " + sonuc);
} else if(sonuc >= 30.0 && sonuc <= 34.9) {
    console.log("Normal " + sonuc);
} else if(sonuc >= 34.5 && sonuc <= 39.9) {
    console.log("Kilolu " + sonuc);
} else if(sonuc >= 39.9 && sonuc <= 44.9) {
    console.log("Obez " + sonuc);
}