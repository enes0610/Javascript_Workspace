// Debugger F12 Sources kısmından görebilirsiniz.

function kisi(ad, soyad) {
    console.log(ad + " " + soyad);
}

console.log();
kisi("ENES", "OĞUZ");

let yas = Number(prompt("Yaşınız: "));
kontrolEt(yas);

function kontrolEt(yas) {
    if(yas > 18) {
        console.log("Yetişkin Birey");
    } else{
        console.log("Yetişkin Birey Değilsin");
    }
}