/* 
    Klavye Events

    keypress --> Harfler ve Sayıları yazdırır.
    keydown --> Tab Shift CTRL Enter ALTGR BACKSPACE tıklandğında konsola yazar.
    keyup   --> Tuşa basıp bırakınca çalışır.
*/
console.clear();
console.log("Klavye Harfler");
document.addEventListener("keypress", run);
document.addEventListener("keydown", run);
document.addEventListener("keyup", run);

function run(e){
    console.log(e.key);
}