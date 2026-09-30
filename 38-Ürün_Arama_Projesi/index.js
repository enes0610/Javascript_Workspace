// Ürün Arama Projesi

let urun1 = {
    ad: "Asus Nottebook",
    kategori: "Bilgisayar",
    fiyat: 5000
}

let urun2 = {
    ad: "Asus Gamer",
    kategori: "Bilgisayar",
    fiyat: 9900
}

let urun3 = {
    ad: "Lenovo Nottebook",
    kategori: "Bilgisayar",
    fiyat: 6300
}

let urun4 = {
    ad: "Lenovo Gamer",
    kategori: "Bilgisayar",
    fiyat: 11000
}

let ürünler = [urun1,urun2,urun3,urun4];
let filitreliÜrünler = [];

let ürünİsmi = prompt("Ürün İsmi Giriniz:  // asus  lenovo");

filitreliÜrünlerGetir(ürünler);
filitreliÜrünlerYazdir(filitreliÜrünler);

function filitreliÜrünlerGetir(ürünler) {
    ürünler.forEach(function (ürün) {
        if(ürün.ad.toUpperCase().includes(ürünİsmi.toUpperCase(), 0)) {
            filitreliÜrünler.push(ürün);
        }
    });
}

function filitreliÜrünlerYazdir(ürünler) {
    ürünler.forEach(function (ürün) {
        console.log("----------");
        console.log("|" + ürün.ad + "|" + ürün.kategori + "|" + ürün.fiyat + "₺");
        console.log("----------");
    });
}