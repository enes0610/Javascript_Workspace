// Günler Projesi

let yeniSatir = "\r\n";
let metin = 
"1- Pazartesi" + yeniSatir
+ "2- Salı" + yeniSatir
+ "3- Çarşamba" + yeniSatir
+ "4- Perşembe" + yeniSatir
+ "5- Cuma" + yeniSatir
+ "6- Cumartesi" + yeniSatir
+ "7- Pazar" + yeniSatir;

let deger = prompt(metin);

switch(deger) {
    case "1" :
        console.log("Pazartesi");
        break;
    
    case "2" :
    console.log("Salı");
    break;

    case "3" :
    console.log("Çarşamba");
    break;

    case "4" :
    console.log("Perşembe");
    break;

    case "5" :
    console.log("Cuma");
    break;

    case "6" :
    console.log("Cumartesi");
    break;

    case "7" :
    console.log("Pazar");
    break;

    default:
        console.log("Hatalı İşlem");
}