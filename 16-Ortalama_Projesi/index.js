// Ders Ortalama Projesi

// Vize: 30% Vize: 30% Final: 40% 

// Ortalama 70% altında ise // ! BAŞARISIZ
// Ortalama 70% üzerinde ise // ? BAŞARILI

let vize1 = Number(prompt ("Vize1 Not Giriniz: ") );
let vize2 = Number(prompt ("Vize2 Not Giriniz: ") );

let final = Number(prompt ("Final Not Giriniz: ") );

let ortalama = vize1 * 0.30 + 0.30 + final * 0.40;

if(ortalama >= 60) {
    console.log("Başarılı Öğrenci " + ortalama);
} else {
    console.log("Başarısız Öğrenci " + ortalama);
}