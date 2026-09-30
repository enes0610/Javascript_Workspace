/* 
    Mouse Events

    DOMContentLoader
    onload
    click
    mouseover
    mouseout
*/

document.addEventListener("DOMContentLoaded", run);
function run(){
    console.log("Sayfa Yüklendi...");
}

window.addEventListener("load", run);

let cardTitle = document.querySelectorAll(".card-title")[0];
let cardBody = document.querySelectorAll(".card-body")[1];

cardTitle.addEventListener("click", run); // Todo Listesi yazısına tıklandığında çalışır.
cardBody.addEventListener("mouseover", run);
cardBody.addEventListener("mouseout", run);

function run(e){
    console.log(e.type);
}