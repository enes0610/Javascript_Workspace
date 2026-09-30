// Harf Sayı Projesi

let metin = "Javascript Dersleri";
console.log(metin);

let harf = prompt("Bir Harf Giriniz: ");
console.log("Harf = " + harf);

let sonuc = bul(harf);
alert("Harf Sayısı: " + sonuc);
console.log("Harf Sayısı: " + sonuc);

function bul(harf) {
    let toplam = 0;

    for(let i = 0; i < metin.length; i++) {
        if(metin.charAt(i) === harf) {
            toplam += 1;
        }
    }
    return toplam;
}