console.clear();

let mesaj = 
`
Markete Hoşgeldiniz
Money Kartınız varmı ?
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmi : "Ekmek",
        fiyat : 10
    },
    {
        urunIsmi : "Süt",
        fiyat : 15
    },
    {
        urunIsmi : "Bebek Bezi",
        fiyat: 75
    },
    {
        urunIsmi : "Kıyma",
        fiyat : 100
    }
]


let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    //Money kartı vardır.
    let isim = prompt("Adınızı Giriniz :");
    let soyisim = prompt("Soyisminizi giriniz");

    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    
     odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri Bilgileri : ${musteri.getIsim()} ${musteri.getSoyisim()}
        Ödenecek Tutar : ${odenecekTutar}
        `);


}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`)
}