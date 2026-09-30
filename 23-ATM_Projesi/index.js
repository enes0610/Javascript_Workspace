// ATM Projesi

/*
    1- Bakiye Sorgulama
    2- Para Yatırma
    3- Para Çekme
    4- Çıkış
*/

let yeniSatir = "\n\r";
let bakiye = 1000;

let metin = "Bakiye Sorgulama" + yeniSatir
+ "Para Yatırma"
+ "Para Çekme"
+ "Çıkış"

let secim = prompt(metin);

switch(secim) {
    case "1":
        alert("Bakiye: " + bakiye);
        console.log("Bakiye: " + bakiye);
        breaak;

    case "2":
    let parayatirTutar = Number (prompt("Yatırmak istenilen Tutar: "));
}