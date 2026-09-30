/*

    Koşul Yapıları // İf Else  Else İf

    if else = 2 seçenek olduğu koşullarda kullanılır.
    else if = 2 seçenekten daha fazla koşullarda kullanılır.

    */

let ad = prompt("Adınız: ");
let tcno = prompt("Tc No: ");

kontrolEt(ad, tcno);

function kontrolEt(ad, tcno) {
    if(ad != "") {
        if(tcno.length == 11) {
            console.log("Ad ve Tc Doğru");
        } else {
            console.log("Tc Numaranızı eksik girmeyiniz...");
        }
    } else{
        console.log("Lütfen Adınızı Yazınız...");
    } 
    console.log("Bilgiler " + ad);
    console.log("Bilgiler " + tcno);
}

kontrolEt1(ad, tcno);

function kontrolEt1(ad, tcno) {
    if(ad == "") {
        console.log("Lütfen Adınızı Yazınız...");
        return;
    }
    if(tcno.length == 11) {
        console.log("Tc Numaranızı eksik girmeyiniz...");
        return;
    }
    console.log("Ad ve Tc  Doğru");
}