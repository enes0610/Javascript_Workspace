let tarih = new Date;

console.log(tarih);

console.log(tarih.getFullYear());
console.log(tarih.getMonth()+1); // İndex 0 olduğu için bir önceki ayı yazar.
console.log(tarih.getDay()-1);   // İndex 0 olduğu için bir sonraki günü yazar.
console.log(tarih.getHours());
console.log(tarih.getMinutes());        // 0 - 59
console.log(tarih.getSeconds());        // 0 - 59
console.log(tarih.getMilliseconds());   // 0 - 999
console.log(tarih.toLocaleDateString());
console.log(tarih.toLocaleTimeString());
console.log(tarih.toLocaleString());

console.log("---------- *** ---------- *** ----------");
console.log("---------- *** ---------- *** ----------");
console.log("---------- *** ---------- *** ----------");

// SET METOT

console.log(tarih);
tarih.setFullYear(2050);    // YIL 2050
console.log(tarih);

console.log("----------");

console.log(tarih);
tarih.setMonth(11);     // AY 11
console.log(tarih);

console.log("----------");


console.log(tarih);
tarih.setDate(30); // GÜN 30
console.log(tarih);

console.log("----------");


console.log(tarih);
tarih.setHours(23);     // SAAT 23
console.log(tarih);

console.log("----------");


console.log(tarih);
tarih.setMinutes(46);   // DAKİKA 46
console.log(tarih);

console.log("----------");


console.log(tarih);
tarih.setSeconds(59);   // SANİYE 59
console.log(tarih);

console.log("----------");

console.log("----------");
console.log("ENES");
console.log("----------");

let enes = new Date(1996, 9, 29, 21, 45, 59);
console.log(enes);