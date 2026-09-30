/* 
Javascript Asenkron Calback

Javascript Senkron çalışan Programlama Dili
Callback --> Asenkron yapıyı senkron'a çevirir

Bir fonksiyona parametre vermek
*/

console.clear();

function getName(callback){
    setTimeout(() => {
        console.log("ENES");
        callback();
    }, 1500);
}

function getSurname(){
    setTimeout(() => {
        console.log("OĞUZ");
    }, 1000);
}

getName(getSurname);