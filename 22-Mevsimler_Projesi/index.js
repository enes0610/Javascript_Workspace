// Mevsimler Projesi

let yeniSatir = "\r\n";
let metin = 
"1- İlkbahar" + yeniSatir
+ "2- Yaz" + yeniSatir
+ "3- Sonbahar" + yeniSatir
+ "4- Kış" + yeniSatir

let deger = prompt(metin);

switch(deger) {
    case "1" :
        console.log("İlkbahar");
        break;
    
    case "2" :
    console.log("Yaz");
    break;

    case "3" :
    console.log("Sonbahar");
    break;

    case "4" :
    console.log("Kış");
    break;

    default:
        console.log("Hatalı İşlem");
}